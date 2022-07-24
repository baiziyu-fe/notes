import{_ as t,r as p,o,c,a as n,b as a,F as l,d as r,e}from"./app.70d9e8a7.js";const i={},u=r(`<h1 id="react\u4E2D\u5982\u4F55\u66F4\u597D\u7684\u4F7F\u7528mobx" tabindex="-1"><a class="header-anchor" href="#react\u4E2D\u5982\u4F55\u66F4\u597D\u7684\u4F7F\u7528mobx" aria-hidden="true">#</a> React\u4E2D\u5982\u4F55\u66F4\u597D\u7684\u4F7F\u7528MobX</h1><p>\u5728\u4E4B\u524D\u7684\u6587\u7AE0\u4E2D\u6211\u4EEC\u8BB2\u89E3\u4E86<code>MobX</code>\u7684\u57FA\u672C\u4F7F\u7528\u4EE5\u53CA<code>MobX</code>\u7684\u4E00\u4E9B\u7279\u70B9\u3002\u672C\u7BC7\u6587\u7AE0\u5C06\u7ED3\u5408<code>React</code>\u8BB2\u89E3\u5982\u4F55\u5728<code>React</code>\u4E2D\u66F4\u597D\u7684\u4F7F\u7528<code>MobX</code>\u3002</p><h2 id="\u5173\u4E8Ereact-mobx\u96C6\u6210\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u5173\u4E8Ereact-mobx\u96C6\u6210\u9009\u62E9" aria-hidden="true">#</a> \u5173\u4E8E<code>React</code> MobX\u96C6\u6210\u9009\u62E9</h2><p><code>MobX</code>\u672C\u8EAB\u662F\u53EF\u4EE5\u72EC\u7ACB\u4E8E<code>React</code>\u6267\u884C\uFF0C\u5E76\u4E14\u5F88\u591A\u5185\u5BB9\u53EF\u4EE5\u81EA\u4E3B\u9009\u62E9\u3002\u5728\u8FD9\u91CC\u53EF\u4EE5\u9009\u62E9<code>mobx-react</code>\u548C<code>mobx-react-lite</code>\u4E24\u4E2A\u5305\u3002<code>mobx-react-lite</code>\u66F4\u52A0\u8F7B\u91CF\uFF0C\u4F46\u662F\u5B83\u53EA\u652F\u6301<code>React</code>\u51FD\u6570\u5F0F\u7EC4\u4EF6\u3002</p><h2 id="\u5982\u4F55\u7BA1\u7406\u6211\u4EEC\u7684state" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u7BA1\u7406\u6211\u4EEC\u7684state" aria-hidden="true">#</a> \u5982\u4F55\u7BA1\u7406\u6211\u4EEC\u7684<code>state</code></h2><h3 id="props\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#props\u4F7F\u7528" aria-hidden="true">#</a> props\u4F7F\u7528</h3><p>\u5728\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u5916\u90E8\u7684<code>Observable</code> State\u540E\uFF0C\u6211\u4EEC\u9664\u4E86\u76F4\u63A5\u4F7F\u7528\uFF08\u5168\u5C40\u53D8\u91CF\uFF09\u5916\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528<code>React</code>\u7EC4\u4EF6\u53C2\u6570\u4F20\u9012\u6765\u5B9E\u73B0\u6211\u4EEC\u7684\u529F\u80FD\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> myTimer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// See the Timer definition above.  </span>
  
<span class="token keyword">const</span> TimerView <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> timer <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Seconds passed: </span><span class="token punctuation">{</span>timer<span class="token punctuation">.</span>secondsPassed<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>  
  
<span class="token comment">// \u901A\u8FC7props\u4F20\u9012myTimer.  </span>
<span class="token keyword">const</span> <span class="token function-variable function">TimerApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TimerView</span></span> <span class="token attr-name">timer</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>myTimer<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u7ED3\u5408context\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5408context\u4F7F\u7528" aria-hidden="true">#</a> \u7ED3\u5408<code>Context</code>\u4F7F\u7528</h3><p>\u65E2\u7136\u8FD9\u662F\u4E00\u79CD\u72B6\u6001\uFF0C\u90A3\u4E48\u5F53\u6211\u4EEC\u9700\u8981\u5168\u5C40\u7BA1\u7406\u6216\u8005\u8DE8\u5C42\u4F20\u9012\u4F7F\u7528\u65F6\uFF0C\u4F7F\u7528<code>React Context</code>\u662F\u4E00\u79CD\u66F4\u597D\u7684\u9009\u62E9\u3002\u6211\u4EEC\u53EF\u4EE5\u5C06\u6211\u4EEC\u7684<code>Observable</code>State\u4F5C\u4E3A<code>context</code>\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> TimerContext <span class="token operator">=</span> createContext<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Timer</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">()  
  
const TimerView = observer(() =&gt; </span><span class="token punctuation">{</span>  
<span class="token comment">// \u4ECEcontext\u4E2D\u83B7\u53D6timer.  </span>
<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>TimerContext<span class="token punctuation">)</span> <span class="token comment">// \u53EF\u4EE5\u5728\u4E0A\u9762\u67E5\u770B Timer\u7684\u5B9A\u4E49\u3002  </span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>  
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Seconds passed: </span><span class="token punctuation">{</span>timer<span class="token punctuation">.</span>secondsPassed<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>  
	<span class="token punctuation">)</span>  
<span class="token punctuation">}</span><span class="token plain-text">)  
  
const TimerApp = () =&gt; (  
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TimerContext.Provider</span></span> <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">  
	</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">TimerView</span></span> <span class="token punctuation">/&gt;</span></span><span class="token plain-text">  
</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">TimerContext.Provider</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
)
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u4F7F\u7528uselocalobservable" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528uselocalobservable" aria-hidden="true">#</a> \u4F7F\u7528<code>useLocalObservable</code></h3><p>\u901A\u8FC7\u4F7F\u7528<code>useLocalObservable</code>\u53EF\u4EE5\u4E3A\u6211\u4EEC\u5B9E\u73B0<code>const [store] = useState(() =&gt; observable({ /* something */}))</code>\u8FD9\u6837\u7684\u529F\u80FD\u3002</p><div class="language-jsx ext-jsx line-numbers-mode"><pre class="language-jsx"><code><span class="token keyword">const</span> TimerView <span class="token operator">=</span> <span class="token function">observer</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>  
<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">useLocalObservable</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>  
		<span class="token literal-property property">secondsPassed</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>  
		<span class="token function">increaseTimer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  
			<span class="token keyword">this</span><span class="token punctuation">.</span>secondsPassed<span class="token operator">++</span>  
		<span class="token punctuation">}</span>  
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  
	<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Seconds passed: </span><span class="token punctuation">{</span>timer<span class="token punctuation">.</span>secondsPassed<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>  
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h2><ul><li><code>observer</code>\xA0\u4F1A\u81EA\u52A8\u7684\u4F7F\u7528\xA0<code>memo</code>, \u6240\u4EE5\xA0<code>observer</code>\xA0\u4E0D\u9700\u8981\u518D\u5305\u88F9\xA0<code>memo</code>\u3002\xA0<code>memo</code>\xA0\u4F1A\u88AB observer \u7EC4\u4EF6\u5B89\u5168\u7684\u4F7F\u7528\uFF0C\u56E0\u4E3A\u4EFB\u4F55\u5728props\u4E2D\u7684\u6539\u53D8(\u5F88\u6DF1\u7684) \u90FD\u4F1A\u88AB<code>observer</code>\u54CD\u5E94\u3002</li><li>\u665A\u4E00\u70B9\u4F7F\u7528\u95F4\u63A5\u5F15\u7528\u503C\u3002\u63A8\u8350\u5C3D\u53EF\u80FD\u665A\u7684\u4F7F\u7528\u95F4\u63A5\u5F15\u7528\u503C\u3002 \u8FD9\u662F\u56E0\u4E3A\u5F53\u4F7F\u7528 observable \u95F4\u63A5\u5F15\u7528\u503C\u65F6 MobX \u4F1A\u81EA\u52A8\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u3002 \u5982\u679C\u95F4\u63A5\u5F15\u7528\u503C\u53D1\u751F\u5728\u7EC4\u4EF6\u6811\u7684\u5C42\u7EA7\u8D8A\u6DF1\uFF0C\u90A3\u4E48\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7684\u7EC4\u4EF6\u5C31\u8D8A\u5C11\u3002</li><li>\u4E0D\u8981\u4F7F\u7528\u6570\u7EC4\u7684\u7D22\u5F15\u4F5C\u4E3A key</li></ul><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,17),k={href:"https://zh.mobx.js.org/react-integration.html",target:"_blank",rel:"noopener noreferrer"},d=e("# \u96C6\u6210React\uFF08react-integration\uFF09"),b={href:"https://zh.mobx.js.org/react-optimizations.html",target:"_blank",rel:"noopener noreferrer"},m=e("# React \u4F18\u5316 {\u{1F680}}");function h(g,x){const s=p("ExternalLinkIcon");return o(),c(l,null,[u,n("ul",null,[n("li",null,[n("a",k,[d,a(s)])]),n("li",null,[n("a",b,[m,a(s)])])])],64)}var _=t(i,[["render",h],["__file","FE-React\u4E2D\u5982\u4F55\u66F4\u597D\u7684\u4F7F\u7528MobX.html.vue"]]);export{_ as default};
