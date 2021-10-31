# 从React 开始架构分析

<img src="https://mmbiz.qpic.cn/mmbiz_png/xsw6Lt5pDCtASWS2KK5DOaHjiasJGHBtbb6trLa8ic9bjwPNTg6fBzibNY4sibIzmJ94B33b5AkCx6alYqcjG1XWlw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1">

## 1. v16之前的架构（铁憨憨式）

> 主流浏览器刷新频率为 60Hz，即每 16.6ms 浏览器刷新一次，每 16.6ms 要完成 JS 执行、重绘重排。而 JS 线程和 GUI 线程是互斥的，在浏览器的一帧里（16.6ms）JS 脚本执行和页面渲染是同步执行的，一旦 JS 脚本执行时间过长，页面就会出现掉帧卡顿。

- reconciler：对比VDom和真实dom的过程，也就是更新的diff过程。
- renderer：将组件更新渲染至页面。

`React 15`(16 之前)的组件采用的时递归更新的方式对组件进行对应的挂载和更新的操作。所以当层级较深时，递归的时间会对页面造成较大影响。

这里的逻辑就像是顾客在餐厅（React项目中），每隔一会想修改菜单就喊服务员（浏览器）

- 服务员有时候忙于给别的顾客服务（其他更新任务服务），无法抽身，导致顾客不满（引发卡顿）
- 服务员帮用户处理，一一对比用户的菜单和之前的不同，每次发现一个不同就跑到后厨（Renderer）通知一次

## 2. V16+架构分析

为了避免"JS 脚本执行时间过长，页面就会出现掉帧卡顿"这个问题，16之后的版本在浏览器每一帧的时间里，预留出来一部分给 JS 线程（目前源码是预留`5ms`）。

如果预留的时间用完了，JS 线程还没执行完，那么 JS 线程就会被中断阻塞，GUI 渲染线程获得执行权，这一帧执行完了，React 则继续被中断的任务。

这里因为考虑兼容性的问题，没有采用浏览器已经实现的api `requestIdleCallback`。`React` 自己实现了一套这样的机制，并给他起名`Scheduler`，也就是他使得`Reconciler`由之前的`Stack Reconciler`转变为现在大名鼎鼎的`Fiber Reconciler`。

自此，`React` 学会了对于需更新的状态不再频繁更新，而是`Scheduler`发现浏览器有空，把更新任务交给`Reconciler`去给需要更新的VDom打上标记(symbol)。然后等打完以后`Renderer`才去处理。

这里现在的逻辑就变成了顾客在餐厅订餐系统（Scheduler）更改已经下单的菜品，订餐系统发现服务员（浏览器）有空，然后服务员收到通知（更新任务），服务员在点餐系统中给需要修改的菜品加上备注（Reconciler），然后由点餐系统（Renderer）将这些信息展示给后厨。

费这么多时间重写架构就只是为了提升运行时性能吗？

其实 Concurrent Mode 才是架构重写的源动力，也是 React 未来的发展方向。在这个架构基础下，也会有更多的基于 Concurrent Mode 的上层应用产生。

## 3. Concurrent Mode

> Concurrent Mode 是 React 的一组新功能。可帮助应用保持响应，并根据用户的设备性能和网速进行适当地调整。

- 三大特点：
  - 可以控制渲染流程，可中断 JS 执行，把控制权交还给浏览器。
  - 并发，引入优先级调度算法，可以并发执行多个更新任务。
  - 将人机交互的研究成果投入实际的应用当中。

### 3.1 Concurrent Mode 原理

![](https://mmbiz.qpic.cn/mmbiz_png/xsw6Lt5pDCtASWS2KK5DOaHjiasJGHBtb9usMnNxdF4b2u77OkCCLgcFWuxG6Jltiaic16rsMUbkSnZmGceOMeezw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 3.1.1 时间切片

React 为了解决卡顿问题，将更新任务作为时间切片来执行，因此需要一个机制来调度切片，浏览器原生提供了 `requestIdelCallback` API。

```JS
function task(deadline) {
  while (true) {
    if (!deadline.timeRemaining) {
      requestIdleCallback(task);
      // 主动退出循环，将控制权交还浏览器
      break;
    }
  };
}
requestIdleCallback(task);
```

上面说到，`Scheduler`就是`React`制作的`requestIdelCallback`的替代品。

在一帧里 JS 的执行顺序，只有 `requestIdelCallback` 是在浏览器重绘重排之后。退而求其次，我们选择宏任务来代替，`setTimeout` 是我们最熟悉的宏任务调度函数，但有一个 api 要比它执行顺序靠前，即 `MessageChannel`。当浏览器不兼容时，再降级使用 `setTimeout`。

所以 上述提到的 api 的执行顺序如下：

![](https://mmbiz.qpic.cn/mmbiz_png/xsw6Lt5pDCtASWS2KK5DOaHjiasJGHBtbA6SS2yVj18s2FPzPOHe2wLG3ssHxHFFdrOlsvhdJGJGHxjia3SBVJnQ/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 3.1.2 切片标准(默认5ms，可以依据系统 fps 来进行调整)

```JS
const forceFrameRate = (fps) => {
  if (fps < 0 || fps > 125) {
    return;
  }
  if (fps > 0) {
    yieldInterval = Math.floor(1000 / fps);
  } else {
    yieldInterval = 5;
  }
};
```

#### 3.1.3 Reconciler的Fiber

原本基于 VDOM 的递归，就变成基于 Fiber 节点的迭代，同时 Fiber 节点在内存中保存了需要处理的上下文信息，可以很方便地中断和恢复。

![](https://mmbiz.qpic.cn/mmbiz_png/xsw6Lt5pDCtASWS2KK5DOaHjiasJGHBtbdOhQxiauP1pbpjGUP6Ygz1Cz7ckMWWicrzK2oIUjZrTNnRXspFumn0zA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

#### 3.1.4 生命周期（阶段）改造

引入时间切片后，一边 diff 一边提交的模式显然不再适用。React16 则把更新过程拆成两部分 —— 协调阶段和提交阶段。

- 协调阶段

协调阶段（diff 阶段）会找出所有节点变更，例如节点新增、删除、属性变更等等（副作用），只有这个阶段可以被中断。
```JS
static getDerivedStateFromProps()
shouldComponentUpdate()
Render()
```

- 提交阶段

提交阶段将节点变更一次性渲染到页面，这个阶段不可中断。因为这个阶段的生命周期里可能会做一些带 副作用 的操作，如果中断了，可能会重复执行，带来一些意想不到的 bug。

```JS
getSnapshotBeforeUpdate()
componentDidMount()
componentDidUpdate()
componentWillUnmount()
```

#### 3.1.5 优先级模型

Concurrent Mode 模式下的更新是异步可中断的更新，除了时间片用完，还有一种中断的可能：正在更新的任务被中断，转而开始一次新的更新。我们可以说后一次的更新打断了正在执行的更新，这就是优先级的概念：后一次任务的优先级更高，打断了正在执行的更低优先级的任务。

#### 3.1.6 expirationTime 模型

Scheduler 除了拥有 requestIdelCallback 的能力，还提供了多种优先级供调度选择。

```JS
ImmediatePriority:
UserBlockingPriority:
NormalPriority:
LowPriority:
IdlePriority:
```

Scheduler 提供了两个重要的 api：

runWithPriority：优先级调度的函数，React 内部所有需要优先级调度的都会用到；

scheduleCallback：不同的是可以传一个优先级参数，根据任务优先级的大小先后执行（模拟 requestIdelCallback）。

这里的优先级表示啥呢？

指任务的过期时间（expirationTime），也就是：
- 过期时间越短，优先级越高
- 随着时间推移，当前时间越接近过期时间，优先级变高
- 某个任务的过期时间比当前时间短，表示已经过期，需要立即执行（可能会发生中断）

#### 3.1.7 Lane(s) 模型

![](https://mmbiz.qpic.cn/mmbiz_png/xsw6Lt5pDCtASWS2KK5DOaHjiasJGHBtbEZjoJD0Vla36ynGbUnDQ9B0d264GcaIaPPJZTdJWBjzBAGe3l7caPg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

- 其中 Lane (s) 表示优先级区间，31 个 bit，每一个 bit 都表示一个优先级，如果有多个 bit 则表示这一类型支持批处理，各种类型的区间不会重合（除了 NonIdleLanes）；

- 其中 InputDiscreteLanes 表示” 用户交互 “触发的更新所拥有的优先级区间，SyncLane 表示同步更新，DefaultLanes 表示异步请求后更新；

Lane(s) 模型相较于 expirationTimes 模型更加地细粒度化，可扩展性也更强，也就很好地解决了 CPU 任务和 IO 任务的优先级区分问题。