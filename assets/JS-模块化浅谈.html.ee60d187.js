import{_ as t,r as o,o as p,c,a as n,b as s,F as l,d as i,e}from"./app.70d9e8a7.js";const r={},u=i(`<h1 id="javascript\u6A21\u5757\u5316\u6D45\u8C08" tabindex="-1"><a class="header-anchor" href="#javascript\u6A21\u5757\u5316\u6D45\u8C08" aria-hidden="true">#</a> JavaScript\u6A21\u5757\u5316\u6D45\u8C08</h1><h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u524D\u7AEF\u5DE5\u7A0B\u590D\u6742\u5EA6\u968F\u7740\u9879\u76EE\u9700\u6C42\u53D8\u5316\u65E5\u76CA\u589E\u957F\uFF0C\u539F\u59CB\u7684\u5F00\u53D1\u65B9\u5F0F\u5E26\u6765\u7684\u547D\u540D\u51B2\u7A81\u3001\u4F9D\u8D56\u52A0\u8F7D\u3001\u7F51\u7EDC\u8BF7\u6C42\u7B49\u95EE\u9898\u5C42\u51FA\u4E0D\u7A77\u3002\u5728\u8FD9\u79CD\u6761\u4EF6\u4E0B\u652F\u6301<code>javascript</code>\u6A21\u5757\u5316\u7F16\u7A0B\u6210\u4E3A\u8FEB\u5207\u7684\u9700\u6C42\u3002</p><h2 id="\u6A21\u5757\u5316\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#\u6A21\u5757\u5316\u89C4\u8303" aria-hidden="true">#</a> \u6A21\u5757\u5316\u89C4\u8303</h2><h3 id="commonjs" tabindex="-1"><a class="header-anchor" href="#commonjs" aria-hidden="true">#</a> CommonJS</h3><p><code>CommonJS</code>\u662F2009\u5E74\u6B63\u5F0F\u542F\u52A8\u7684\u6A21\u5757\u5316\u6807\u51C6\uFF0C\u5728\u5F53\u65F6\u4E3B\u8981\u662F\u5BF9<code>Node</code>\u670D\u52A1\u7AEF<code>JavaScript</code>\u5E94\u7528\u7A0B\u5E8F\u8FDB\u884C\u652F\u6301\u3002 \u5728<code>CommonJS</code>\u4E2D\uFF0C\u6BCF\u4E00\u4E2A\u6587\u4EF6\u662F\u5177\u6709\u81EA\u5DF1\u72EC\u7ACB\u4F5C\u7528\u57DF\u7684\u6A21\u5757\uFF0C\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\u5B9A\u4E49\u7684\u53D8\u91CF\u3001\u51FD\u6570\u3001\u7C7B\u90FD\u662F\u79C1\u6709\u7684\uFF0C\u5BF9\u5176\u4ED6\u6587\u4EF6\u5E76\u4E0D\u53EF\u89C1\u3002 <strong>\u5728\u670D\u52A1\u7AEF\uFF0C\u8FD9\u4E9B\u6A21\u5757\u7684\u52A0\u8F7D\u65F6\u540C\u6B65\u7684\uFF1B\u800C\u5728\u6D4F\u89C8\u5668\u7AEF\uFF0C\u6A21\u5757\u52A0\u8F7D\u524D\u9700\u8981\u8FDB\u884C\u7F16\u8BD1\u6253\u5305\u5904\u7406</strong>\u3002</p><h4 id="\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u66B4\u9732\u6A21\u5757</span>
<span class="token comment">//hello.js</span>
<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function-variable function">sayHello</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;hello, &quot;</span> <span class="token operator">+</span> name <span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports<span class="token punctuation">.</span>sayHi <span class="token operator">=</span> sayHello<span class="token punctuation">;</span>
</code></pre></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C<code>module</code>\u4EE3\u8868\u5F53\u524D\u6A21\u5757\uFF0C\u8FD9\u4E2A\u6A21\u5757\u7684<code>exports</code>\u5C5E\u6027\u662F\u5BF9\u5916\u7684\u63A5\u53E3\uFF0C\u52A0\u8F7D\u6478\u4E00\u4E2A\u6A21\u5757\uFF0C\u5176\u5B9E\u52A0\u8F7D\u7684\u5C31\u662F\u8BE5\u6A21\u5757\u7684<code>module.exports</code>\u5C5E\u6027\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5F15\u5165\u6A21\u5757</span>
<span class="token keyword">const</span> heloo <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./hello.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

heloo<span class="token punctuation">.</span><span class="token function">sayHi</span><span class="token punctuation">(</span><span class="token string">&quot;Tom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><code>require</code>\u547D\u4EE4\u7528\u4E8E\u52A0\u8F7D\u6A21\u5757\uFF0C\u8BFB\u53D6\u5E76\u6267\u884C\u4E00\u4E2A<code>javascript</code>\u6587\u4EF6\uFF0C\u7136\u540E\u8BFB\u53D6\u5E76\u8FD4\u56DE\u8BE5\u6A21\u5757\u7684<code>exports</code>\u5BF9\u8C61\u3002<code>require</code>\u547D\u4EE4\u7B2C\u4E00\u6B21\u52A0\u8F7D\u8BE5\u811A\u672C\u5C31\u4F1A\u6267\u884C\u6574\u4E2A\u811A\u672C\uFF0C\u7136\u540E\u4F1A\u5728\u5185\u5B58\u4E2D\u751F\u6210\u4E00\u4E2A\u5BF9\u8C61\u3002\u5373\u4F7F\u518D\u6B21\u6267\u884C<code>require</code>\u547D\u4EE4\uFF0C\u4E5F\u4E0D\u4F1A\u518D\u6267\u884C\u8BE5\u6A21\u5757\uFF0C\u800C\u662F\u5230\u7F13\u5B58\u4E2D\u53BB\u53D6\u503C\u3002</p><h4 id="\u52A0\u8F7D\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u52A0\u8F7D\u673A\u5236" aria-hidden="true">#</a> \u52A0\u8F7D\u673A\u5236</h4><p><code>CommonJS</code>\u6A21\u5757\u7684\u52A0\u8F7D\u673A\u5236\u662F<strong>\u8F93\u51FA\u7684\u503C\u662F\u8F93\u5165\u7684\u503C\u7684\u62F7\u8D1D</strong>\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u65E6\u8F93\u51FA\u4E00\u4E2A\u503C\uFF0C\u6A21\u5757\u5185\u90E8\u503C\u5F97\u53D8\u5316\u5C31\u4E0D\u4F1A\u5F71\u54CD\u5230\u8FD9\u4E2A\u503C\u3002</p><h4 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h4><ul><li>\u6240\u6709\u4EE3\u7801\u90FD\u4F1A\u8FD0\u884C\u518D\u72EC\u7ACB\u7684\u4F5C\u7528\u57DF\uFF0C\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u3002</li><li>\u540C\u6B65\u52A0\u8F7D\u65B9\u5F0F\u4F1A\u5BFC\u81F4\u8BFB\u53D6\u7F13\u6162\u3002</li><li>\u5360\u7528\u5185\u5B58\u8FDB\u884C\u7F13\u5B58\u7684\u65B9\u5F0F\u4E0D\u9002\u7528\u4E8E\u6D4F\u89C8\u5668\u7AEF\u3002</li></ul><h3 id="amd-asynchronous-module-definition" tabindex="-1"><a class="header-anchor" href="#amd-asynchronous-module-definition" aria-hidden="true">#</a> AMD(Asynchronous Module Definition)</h3><p><code>AMD</code>\u5B9A\u4E49\u4E86\u4E00\u79CD\u7528\u4E8E\u5F02\u6B65\u52A0\u8F7D\u6A21\u5757\u548C\u4F9D\u8D56\u9879\u7684\u673A\u5236\uFF0C\u8FD9\u4F7F\u5F97\u5B83\u7279\u522B\u9002\u7528\u4E8E\u90A3\u4E9B\u540C\u6B65\u52A0\u8F7D\u5BFC\u81F4\u7684\u6027\u80FD\u3001\u53EF\u7528\u6027\u3001\u8C03\u8BD5\u548C\u8DE8\u6BB5\u65B9\u6848\u5BFC\u81F4\u51FA\u73B0\u95EE\u9898\u7684\u6D4F\u89C8\u5668\u73AF\u5883\u3002 <code>AMD</code>\u518D\u6240\u6709\u4F9D\u8D56\u52A0\u8F7D\u5B8C\u6210\u540E\u4E00\u56DE\u8C03\u51FD\u6570\u7684\u65B9\u5F0F\u6267\u884C\u4EE3\u7801\u3002</p><h4 id="\u5982\u4F55\u4F7F\u7528-1" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528-1" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//AMD\u5B9A\u4E49\u6A21\u5757</span>
<span class="token function">define</span><span class="token punctuation">(</span>id<span class="token operator">?</span><span class="token punctuation">,</span> dependencies<span class="token operator">?</span><span class="token punctuation">,</span> factory<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>id\uFF1A\u6A21\u5757\u7684\u540D\u5B57\uFF0C\u5982\u679C\u6CA1\u6709\u63D0\u4F9B\u8BE5\u53C2\u6570\uFF0C\u6A21\u5757\u7684\u540D\u5B57\u5E94\u8BE5\u9ED8\u8BA4\u4E3A\u6A21\u5757\u52A0\u8F7D\u5668\u8BF7\u6C42\u7684\u6307\u5B9A\u811A\u672C\u7684\u540D\u5B57</li><li>dependencies\uFF1A\u6A21\u5757\u7684\u4F9D\u8D56\uFF0C\u5DF2\u88AB\u6A21\u5757\u5B9A\u4E49\u7684\u6A21\u5757\u6807\u8BC6\u7684\u6570\u7EC4\u5B57\u9762\u91CF\u3002\u4F9D\u8D56\u53C2\u6570\u662F\u53EF\u9009\u7684\uFF0C\u5982\u679C\u5FFD\u7565\u6B64\u53C2\u6570\uFF0C\u5B83\u5E94\u8BE5\u9ED8\u8BA4\u4E3A\xA0<code>[&quot;require&quot;, &quot;exports&quot;, &quot;module&quot;]</code>\u3002\u7136\u800C\uFF0C\u5982\u679C\u5DE5\u5382\u65B9\u6CD5\u7684\u957F\u5EA6\u5C5E\u6027\u5C0F\u4E8E3\uFF0C\u52A0\u8F7D\u5668\u4F1A\u9009\u62E9\u4EE5\u51FD\u6570\u7684\u957F\u5EA6\u5C5E\u6027\u6307\u5B9A\u7684\u53C2\u6570\u4E2A\u6570\u8C03\u7528\u5DE5\u5382\u65B9\u6CD5\u3002</li><li>factory\uFF1A\u6A21\u5757\u7684\u5DE5\u5382\u51FD\u6570\uFF0C\u6A21\u5757\u521D\u59CB\u5316\u8981\u6267\u884C\u7684\u51FD\u6570\u6216\u5BF9\u8C61\u3002\u5982\u679C\u4E3A\u51FD\u6570\uFF0C\u5B83\u5E94\u8BE5\u53EA\u88AB\u6267\u884C\u4E00\u6B21\u3002\u5982\u679C\u662F\u5BF9\u8C61\uFF0C\u6B64\u5BF9\u8C61\u5E94\u8BE5\u4E3A\u6A21\u5757\u7684\u8F93\u51FA\u503C\u3002</li></ul><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span>module<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><ul><li>module\uFF0C\u662F\u4E00\u4E2A\u6570\u7EC4\uFF0C\u91CC\u9762\u7684\u6210\u5458\u662F\u8981\u52A0\u8F7D\u7684\u6A21\u5757\u3002</li><li>callback\u662F\u52A0\u8F7D\u5B8C\u6210\u540E\u7684\u56DE\u8C03\u51FD\u6570\uFF0C\u56DE\u8C03\u51FD\u6570\u4E2D\u53C2\u6570\u5BF9\u5E94\u6570\u7EC4\u4E2D\u7684\u6210\u5458\uFF08\u6A21\u5757\uFF09\u3002</li></ul><p>\u4E0B\u9762\u662F\u5B9A\u4E49\u4E00\u4E2A\u6A21\u5757\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5B9A\u4E49\u51FD\u6570</span>
<span class="token comment">//\u4F9D\u8D56\u4E8Emodule1\u548Cmodule2</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;module1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;module2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m1<span class="token punctuation">,</span> m2</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token keyword">return</span> \u6A21\u5757 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u7136\u540E\u5F15\u7528\u5B83\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;module1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;module2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">m1<span class="token punctuation">,</span> m2</span><span class="token punctuation">)</span><span class="token punctuation">{</span> \u4F7F\u7528m1<span class="token operator">/</span>m2 <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h4 id="\u7279\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9-1" aria-hidden="true">#</a> \u7279\u70B9</h4><ul><li>\u6A21\u5757\u5B9A\u4E49\u7684\u65B9\u6CD5\u975E\u5E38\u6E05\u6670</li><li>\u4E0D\u4F1A\u6C61\u67D3\u5168\u5C40\u73AF\u5883</li><li>\u80FD\u591F\u6E05\u695A\u5730\u663E\u793A\u4F9D\u8D56\u5173\u7CFB</li><li>\u4E0D\u652F\u6301\u6309\u9700\u52A0\u8F7D\uFF0C\u5F00\u53D1\u6210\u672C\u8F83\u5927</li></ul><h3 id="cmd-common-module-definition" tabindex="-1"><a class="header-anchor" href="#cmd-common-module-definition" aria-hidden="true">#</a> CMD(Common Module Definition)</h3><p><code>CMD</code>\u662F\u7ED3\u5408\u4E86<code>AMD</code>\u5F02\u6B65\u52A0\u8F7D\u7684\u7279\u70B9\u548C<code>CommonJS</code>\u7279\u70B9\u7ED3\u5408\u800C\u6210\uFF0C<strong>AMD\u63A8\u5D07\u4EE5\u6765\u524D\u7F6E\uFF0C\u63D0\u524D\u6267\u884C\uFF0C\u800CCMD\u5219\u63A8\u5D07\u5C31\u8FD1\u3001\u5EF6\u8FDF\u6267\u884C</strong>\u3002\u56E0\u6B64\uFF0CCMD\u662F\u652F\u6301\u6309\u9700\u52A0\u8F7D\u7684\u3002</p><h4 id="\u5982\u4F55\u4F7F\u7528-2" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528-2" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h4><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5B9A\u4E49\u66B4\u9732\u6A21\u5757</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">require<span class="token punctuation">,</span> exports<span class="token punctuation">,</span> module</span><span class="token punctuation">)</span><span class="token punctuation">{</span> 
	exports<span class="token punctuation">.</span>xxx <span class="token operator">=</span> value<span class="token punctuation">;</span>
	module<span class="token punctuation">.</span>exports <span class="token operator">=</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5F15\u5165\u6A21\u5757</span>
<span class="token function">define</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">require</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> m1 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./module1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">var</span> m4 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./module4&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	m1<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	m4<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u7279\u70B9-2" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9-2" aria-hidden="true">#</a> \u7279\u70B9</h4><ul><li>\u652F\u6301\u5F02\u6B65\u52A0\u8F7D</li><li>\u5C31\u8FD1\u4F9D\u8D56</li><li>\u6A21\u5757\u89E3\u6790\u4E3A\u5B57\u7B26\u4E32\u6D88\u8017\u4E00\u5B9A\u7684\u6027\u80FD</li></ul><h3 id="es-moudle" tabindex="-1"><a class="header-anchor" href="#es-moudle" aria-hidden="true">#</a> ES Moudle</h3><p><strong>ES \u6A21\u5757\u7684\u8BBE\u8BA1\u601D\u60F3\u662F\u5C3D\u91CF\u7684\u9759\u6001\u5316\uFF0C\u4F7F\u5F97\u7F16\u8BD1\u65F6\u5C31\u80FD\u786E\u5B9A\u6A21\u5757\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4EE5\u53CA\u8F93\u5165\u548C\u8F93\u51FA\u7684\u53D8\u91CF</strong>\u3002CommonJS \u548C AMD \u6A21\u5757\uFF0C\u90FD\u53EA\u80FD\u5728\u8FD0\u884C\u65F6\u786E\u5B9A\u8FD9\u4E9B\u4E1C\u897F\u3002</p><h4 id="\u5982\u4F55\u4F7F\u7528-3" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4F7F\u7528-3" aria-hidden="true">#</a> \u5982\u4F55\u4F7F\u7528</h4><p><code>export</code>\u547D\u4EE4\u7528\u4E8E\u89C4\u5B9A\u6A21\u5757\u7684\u5BF9\u5916\u63A5\u53E3\uFF0C<code>import</code>\u547D\u4EE4\u7528\u4E8E\u8F93\u5165\u5176\u4ED6\u6A21\u5757\u63D0\u4F9B\u7684\u529F\u80FD\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5BFC\u51FA\u6A21\u5757</span>
<span class="token keyword">const</span> age <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hi&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> say<span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>
	age<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6A21\u5757\u9ED8\u8BA4\u8F93\u51FA, \u5176\u4ED6\u6A21\u5757\u52A0\u8F7D\u8BE5\u6A21\u5757\u65F6\uFF0C<code>import</code>\u547D\u4EE4\u53EF\u4EE5\u4E3A\u8BE5\u533F\u540D\u51FD\u6570\u6307\u5B9A\u4EFB\u610F\u540D\u5B57\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//\u5F15\u5165\u6A21\u5757</span>
<span class="token keyword">import</span> say<span class="token punctuation">,</span> <span class="token punctuation">{</span>age<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./say.js&#39;</span><span class="token punctuation">;</span>
<span class="token function">say</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9664\u4E86\u4E0A\u9762\u7684\u7528\u6CD5\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u76F4\u63A5\u5C06\u66B4\u9732\u7684\u6240\u6709\u63A5\u53E3\u7EDF\u4E00\u653E\u5230\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token operator">*</span>  <span class="token keyword">from</span> <span class="token string">&#39;./say.js&#39;</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>\u76F8\u6BD4\u8D77CommonJS\uFF0CES Moudle\u6A21\u5757\u8F93\u51FA\u7684\u662F\u503C\u7684\u5F15\u7528\uFF0C\u5E76\u4E14ES Module\u662F\u5728\u7F16\u8BD1\u65F6\u8F93\u51FA\u63A5\u53E3</strong>\u3002\u9664\u6B64\u4E4B\u5916\uFF0CES6 \u6A21\u5757\u7684\u8FD0\u884C\u673A\u5236\u4E0E CommonJS \u4E0D\u4E00\u6837\u3002<strong>ES6 \u6A21\u5757\u662F\u52A8\u6001\u5F15\u7528\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u7F13\u5B58\u503C\uFF0C\u6A21\u5757\u91CC\u9762\u7684\u53D8\u91CF\u7ED1\u5B9A\u5176\u6240\u5728\u7684\u6A21\u5757</strong>\u3002</p><h4 id="\u7279\u70B9-3" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9-3" aria-hidden="true">#</a> \u7279\u70B9</h4><ul><li>\u52A8\u6001\u5F15\u7528</li><li>\u9759\u6001\u5316\u7684\u52A0\u8F7D</li><li>\u66F4\u597D\u7684\u6A21\u5757\u5316\u529F\u80FD\u548C\u4F7F\u7528\u65B9\u6CD5</li><li>\u672C\u8EAB\u5BF9ES\u8BED\u8A00\u6807\u51C6\u7684\u652F\u6301</li></ul><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>`,48),d={href:"https://segmentfault.com/a/1190000039375332",target:"_blank",rel:"noopener noreferrer"},k=e("# Javascript\u6A21\u5757\u5316\u8BE6\u89E3"),h={href:"https://segmentfault.com/a/1190000023711059",target:"_blank",rel:"noopener noreferrer"},m=e("#\u3010\u6DF1\u5EA6\u5168\u9762\u3011\u524D\u7AEFJavaScript\u6A21\u5757\u5316\u89C4\u8303\u8FDB\u5316\u8BBA"),g={href:"https://juejin.cn/post/6844903744518389768",target:"_blank",rel:"noopener noreferrer"},f=e("# \u524D\u7AEF\u6A21\u5757\u5316\u8BE6\u89E3(\u5B8C\u6574\u7248)"),v={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules",target:"_blank",rel:"noopener noreferrer"},b=e("# JavaScript \u6A21\u5757"),x={href:"https://github.com/amdjs/amdjs-api/blob/master/AMD.md",target:"_blank",rel:"noopener noreferrer"},j=e("# amd.js");function _(y,S){const a=o("ExternalLinkIcon");return p(),c(l,null,[u,n("ul",null,[n("li",null,[n("a",d,[k,s(a)])]),n("li",null,[n("a",h,[m,s(a)])]),n("li",null,[n("a",g,[f,s(a)])]),n("li",null,[n("a",v,[b,s(a)])]),n("li",null,[n("a",x,[j,s(a)])])])],64)}var w=t(r,[["render",_],["__file","JS-\u6A21\u5757\u5316\u6D45\u8C08.html.vue"]]);export{w as default};
