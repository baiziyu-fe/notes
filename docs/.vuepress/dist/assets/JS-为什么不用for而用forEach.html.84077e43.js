import{_ as s,r as e,o as p,c as r,a as n,e as o,F as c,d as t,b as l}from"./app.07af11fc.js";const i={},u=t(`<h1 id="\u4E3A\u4EC0\u4E48\u4E0D\u7528for\u800C\u7528foreach" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u4E0D\u7528for\u800C\u7528foreach" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u4E0D\u7528<code>for</code>\u800C\u7528<code>forEach</code></h1><h2 id="\u4F5C\u7528\u533A\u5206" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u533A\u5206" aria-hidden="true">#</a> \u4F5C\u7528\u533A\u5206</h2><p>\u9996\u5148\u5728\u5F00\u59CB\u4E4B\u524D\u6211\u4EEC\u5148\u4E86\u89E3\u4E0B\u5728<code>javascript</code>\u4E2D<code>for</code>\u548C<code>forEach</code>\u7684\u533A\u522B\uFF1A</p><ul><li><code>for</code>\uFF1A\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u5FAA\u73AF\uFF0C\u53EF\u4EE5\u7528\u4E8E<strong>\u904D\u5386</strong>\u5BF9\u8C61\u3002</li><li><code>forEach</code>\uFF1A\u6302\u8F7D\u5728\u5BF9\u8C61\u539F\u578B\u4E0A\u53EF<strong>\u8FED\u4EE3</strong>\u7684\u65B9\u6CD5\u3002</li></ul><p>\u90A3\u4E48\u770B\u5230\u8FD9\u91CC\u6211\u4EEC\u5C31\u4F1A\u6709\u5F88\u591A\u95EE\u9898\uFF0C\u904D\u5386\u548C\u8FED\u4EE3\u6709\u533A\u522B\u5417\uFF1F\u522B\u8BF4\uFF0C\u533A\u522B\u5F88\u5927\u3002</p><ul><li>\u904D\u5386\uFF1A\u5BF9\u6570\u636E\u7ED3\u6784\u5185\u7684\u6210\u5458\u8FDB\u884C\u89C4\u5F8B\u7684\u8BBF\u95EE</li><li>\u8FED\u4EE3\uFF1A\u5229\u7528\u8FED\u4EE3\u5668\u63D0\u4F9B\u7684\u65B9\u5F0F\u5BF9\u5BF9\u8C61\u8FDB\u884C\u9012\u5F52\u7684\u8BBF\u95EE\u3002</li></ul><h2 id="\u8001\u89C4\u77E9-\u8DD1\u4E2A\u5206\u770B\u770B" tabindex="-1"><a class="header-anchor" href="#\u8001\u89C4\u77E9-\u8DD1\u4E2A\u5206\u770B\u770B" aria-hidden="true">#</a> \u8001\u89C4\u77E9\uFF08\u8DD1\u4E2A\u5206\u770B\u770B\uFF09</h2><p>\u4ECE\u5927\u8303\u56F4\u6765\u8BB2\uFF0C\u5176\u5B9E\u8FED\u4EE3\u65F6\u5C5E\u4E8E\u904D\u5386\u4E2D\u7684\u4E00\u79CD\u3002\u90A3\u4E48\u4ED6\u4EEC\u7684\u6027\u80FD\u5DEE\u8DDD\u5927\u5417\uFF1F</p><p>\u9996\u5148\u6211\u4EEC\u521B\u5EFA\u4E00\u4E2A\u6570\u7EC4\uFF0C\u7ED9\u4ED6\u585E\u51E0\u4E2A\u5143\u7D20\u610F\u601D\u610F\u601D\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">generateTestArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1000000</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> i<span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token literal-property property">r</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u7136\u540E\u6211\u4EEC\u6BD4\u8F83\u4E0B\u9762\u76846\u4E2A\u51FD\u6570\u7684\u6267\u884C\u901F\u5EA6\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function() {
    array.forEach((x) =&gt; {
        x.r = x.a + x.b;
    });
}

function() {
    for (const obj of array) {
        obj.r = obj.a + obj.b;
    }
}

function() {
    for (let i = 0; i &lt; array.length; ++i) {
        array[i].r = array[i].a + array[i].b;
    }
}

function() {
    const len = array.length;
    for (let i = 0; i &lt; len; ++i) {
        array[i].r = array[i].a + array[i].b;
    }
}

function() {
    for (let i = 0; i &lt; array.length; ++i) {
        const x = array[i];
        x.r = x.a + x.b;
    }
}

function() {
    const len = array.length;
    for (let i = 0; i &lt; len; ++i) {
        const x = array[i];
        x.r = x.a + x.b;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u6700\u7EC8\u6211\u4EEC\u5F97\u5230\u4E86\u8FD9\u6837\u7684\u7ED3\u679C\uFF08\u5176\u4E2D<strong>\u6A2A\u8F74\u4EE3\u8868\u51FD\u6570\u6267\u884C\u65F6\u95F4</strong>\uFF09\uFF1A</p><p><img src="https://leanylabs.com/c3c272e1aeeed21f5a97eda0c3fe8c1a/forEach.svg" alt="Array.forEach \u4E0E for \u548C for..of"></p><blockquote><p>\u5FAA\u73AF\u7684\u5FAE\u4F18\u5316\u5BF9<code>for</code>JavaScript \u4E2D\u7684\u6570\u7EC4\u6CA1\u6709\u610F\u4E49\u3002V8 \u5DF2\u7ECF\u505A\u5F97\u5F88\u597D\uFF0C\u751A\u81F3\u53EF\u80FD\u8FD8\u6D88\u9664\u4E86\u8FB9\u754C\u68C0\u67E5\u3002</p></blockquote><p>\u4E8B\u5B9E\u6765\u770B\uFF0C<strong>\u867D\u7136<code>for</code>\u4E0D\u662F\u6700\u5DEE\u7684\uFF0C\u4F46\u662F\u548C<code>forEach</code>\u5DEE\u8DDD\u5DE8\u5927</strong>\u3002</p><p><code>forEach</code>\u4E3A\u4EC0\u4E48\u5FEB\uFF1F\u5176\u5B9E\u8FD9\u4E2A\u95EE\u9898\u4E0D\u5355\u5355\u662F<code>forEach</code>\uFF0C\u5305\u542B\u5728\u5185\u7684<code>map</code>\uFF0C<code>reduce</code>\u7B49\u8FED\u4EE3\u5668\u4E5F\u662F\u540C\u6837\u7684\u4F18\u79C0\u3002<strong>\u7A76\u5176\u539F\u56E0\uFF0C\u5176\u5B9E\u662F\u548C<code>Array</code>\u7B49\u8FD9\u4E9B\u53EF\u8FED\u4EE3\u7684\u5BF9\u8C61\u6709\u5173\uFF0C\u7531\u4E8E\u4ED6\u4EEC\u5305\u542B<code>[Symbol.iterator]</code>\u65B9\u6CD5\uFF0C\u4F7F\u5F97\u4ED6\u4EEC\u652F\u6301\u5929\u7136\u7684\u53EF\u8FED\u4EE3</strong>\u3002</p><p>\u90A3\u4E48\u4EC0\u4E48\u662F\u8FED\u4EE3\u5668\u5462\uFF1F\u8FD9\u91CC\u5176\u5B9E\u662F\u548C\u53E6\u4E00\u4E2A\u6982\u5FF5\u751F\u6210\u5668(Generator)\u6709\u5173\uFF0C\u5B83\u63D0\u4F9B\u4E00\u4E2A\u7C7B\u4F3C\u94FE\u8868\u8282\u70B9\u7684<code>.next()</code>\u65B9\u6CD5\uFF0C\u8FD9\u6837\u7684\u914D\u7F6E\u4F7F\u5F97\u5B83\u4F7F\u7528\u8FD9\u79CD<code>.next()</code>\u7684\u65B9\u6CD5\u8BBF\u95EE\u4E0B\u4E00\u4E2A\u5143\u7D20\u65F6\u4E0D\u7528\u4ECE\u5934\u5F00\u59CB\uFF0C\u5E76\u4E14\u901A\u8FC7\u8FD4\u56DE\u7684\u503C\u6765\u63A7\u5236\u5E76\u4EE5\u6B64\u8FED\u4EE3\u5185\u90E8\u7684\u503C\u3002</p><p>\u987A\u4FBF\u4E00\u63D0\uFF0C\u5176\u5B9E<code>for\u2026\u2026of\u2026\u2026</code>\u539F\u7406\u4E5F\u5C31\u662F\u5982\u6B64\u3002</p><h2 id="\u8BB2\u70B9\u5B9E\u5728\u7684" tabindex="-1"><a class="header-anchor" href="#\u8BB2\u70B9\u5B9E\u5728\u7684" aria-hidden="true">#</a> \u8BB2\u70B9\u5B9E\u5728\u7684</h2><blockquote><p>(Talk is cheap, show me your code!!!)</p></blockquote><p>\u65E2\u7136\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u4E86\u539F\u7406\uFF0C\u90A3\u4E48\u6211\u4EEC\u7528\u4E00\u4E0B\u770B\u770B\u5457~</p><blockquote><p>\u6E29\u99A8\u63D0\u793A\uFF1A\u4E0B\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u8FD0\u884C\u54C8\uFF0C\u5982\u679C\u89C9\u5F97\u6E05\u695A\uFF0C\u53EF\u4EE5\u6253\u5370\u4E0B<code>iterator.next</code>\u4E00\u63A2\u7A76\u7ADF</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">]</span>
<span class="token comment">// \u751F\u6210\u8FED\u4EE3\u5668\u5BF9\u8C61</span>
<span class="token keyword">const</span> iterator <span class="token operator">=</span> arr<span class="token punctuation">[</span>Symbol<span class="token punctuation">.</span>iterator<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// {value: 1, done: false}</span>

iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//{value: 3, done: false}</span>

iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">//{value: 5, done: false}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u770B\u5230\uFF0C\u8FED\u4EE3\u5668\u5BF9\u8C61\u7684\u8C03\u7528\u7684\u65F6\u5019\u901A\u8FC7\u5185\u90E8\u7684<code>next()</code>\u65B9\u6CD5\u6765\u8BBF\u95EE\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u6BD5\u7ADF\u5728<code>javascript</code>\u4E2D\u7684\u6570\u7EC4\u5176\u5B9E\u662F\u4E00\u4E2A<code>\u4F2A\u94FE\u8868</code>,\u57FA\u672C\u4E0A\u5230\u8FD9\u91CC\u6211\u4EEC\u4E5F\u5C31\u5927\u81F4\u6E05\u695A\u4E86<code>forEach</code>\u548C<code>for</code>\u7684\u4E0D\u540C\u3002</p>`,25),b=n("p",null,"\u53C2\u8003\uFF1A",-1),d={href:"https://leanylabs.com/blog/js-forEach-map-reduce-vs-for-for_of/#arrayforeach-vs-for-and-forof",target:"_blank",rel:"noopener noreferrer"},m=l("Performance of JavaScript .forEach, .map and .reduce vs for and for..of");function k(f,h){const a=e("ExternalLinkIcon");return p(),r(c,null,[u,n("blockquote",null,[b,n("p",null,[n("a",d,[m,o(a)])])])],64)}var x=s(i,[["render",k],["__file","JS-\u4E3A\u4EC0\u4E48\u4E0D\u7528for\u800C\u7528forEach.html.vue"]]);export{x as default};
