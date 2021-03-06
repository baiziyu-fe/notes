# `BrowserRouter`和`HashRouter`的区别



## 前端路由的基本特点

1. **不刷新页面的情况下修改`URL`**
2. **监听链接的变化渲染匹配的组件**



## `BrowserRouter`

> 使用 `HTML5` 提供的 `history API` (`pushState`, `replaceState` 和 `popstate` 事件) 来保持 UI 和 URL 的同步。



### 特点

1. 通过监听`histroy.pushState()`方法改变地址栏
   - `pushState`在最终效果上等同于`window.location = [[routePath]]`，在效果上他们都会在当前的`document`中创建和激活一个新的历史记录，但是`pushState`带来了更好的效果和更少的限制：
     - `window.location`在设置时只有设置锚(`#`)的时候才会是当前的URL；**`pushState`可以设置为任何当前URL同源的URL**。
     - 非强制修改URL。相反，设置 `window.location = "#foo";` 仅仅会在锚的值不是#foo情况下创建一条新的历史记录。
     - 可以在新的历史记录中关联任何数据。`window.location = "#foo"`形式的操作，你只可以将所需数据写入锚的字符串中。
     - `pushState()` 不会造成 `hashchange (en-US)` 事件调用, 即使新的URL和之前的URL只是锚的数据不同。
   - 总结：
     - 不会导致页面刷新
     - 当我们`手动输入url`或者`刷新页面`使用的url是不带`'#'(锚点)`的还是会请求服务器,当指定路径寻找不到文件/目录就会404
2. 监听`popstate`事件
   - popstate事件只有`history.go`、`history.back`、`history.forword`或者做出`浏览器动作`才会触发
   - `history.pushState`、`history.replaceState`，不会触发popstate
3. 根据当前的路由地址找到对应的组件进行重新渲染
4. 通过`histroy.pushState`或者`histroy.replaceState`，不会触发`popState`



### 核心(`pushState`，`popState`)

1. 手动改变URL （触发重定向 → `render`）
2. `Router <Link />` 、`push`、浏览器前进后退跳转（`hashChange → render`）



### 服务器部署的注意事项

当路由模式为`BrowserRouter`时部署的页面总是返回`404`

- 原因：在`BrowserRouter`的模式下，会创建一个类似`a/b/c`的真实URL，每次进行跳转的时候都会向服务器发送请求。因为是真实的URL，所以会指向真实的URL的资源路径，由于路径指向的是服务器的真实路径，当服务器的该路径下不存在对应的资源时，就会出现404。

- 如何解决：

  通过配置`nginx`将当前URL下找不到的路由全部返回`HTML`文件，这样利用`Javascript`空值对应的页面显示。

  ```nginx
  location / {
      try_files $uri /index.html; // 这里可以替换为对应的HTML文件路径
  }
  ```



## `HashRouter`

>  使用 URL 的 `hash` 部分（即 `window.location.hash`）来保持 UI 和 URL 的同步。

> 注意事项`Hash Router`不支持`location.key`或`location.state`。



### 特点

1. URL中`#`后的内容（客户端的状态）作为路径地址

   - 使用`#` 跳转页面不会请求服务器页面

   - 这部分在发生变化时，浏览器本身就不会刷新（`#`是用来指导浏览器动作的，对服务器完全无用，其值的改变不会导致浏览器发起http请求，也不会引起页面的重载）

2. 监听`hashChange`事件

   - `hashChange`: 当URL的片段标识符更改时，将触发**hashchange**事件 (**跟在`＃`符号后面的URL部分，包括`＃`符号**)

3. 根据当前的路由地址找到对应的组件重新渲染

### 核心（`HashChange`）

1. 手动改变`URL`、`Router <Link />` 、`push`跳转、浏览器前进后退触发`Hashchange`
2. 所有的跳转都是`hashChange → render`





