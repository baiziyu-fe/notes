import{_ as t,r as e,o as p,c as o,a as n,b as c,F as l,e as s,d as u}from"./app.70d9e8a7.js";const r={},i={id:"\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32","aria-hidden":"true"},"#",-1),b=s(),d={href:"https://leetcode.cn/problems/longest-substring-without-repeating-characters/",target:"_blank",rel:"noopener noreferrer"},m=s("\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32"),h=u(`<h2 id="\u9898\u76EE\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u9898\u76EE\u63CF\u8FF0" aria-hidden="true">#</a> \u9898\u76EE\u63CF\u8FF0</h2><p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684\xA0\u6700\u957F\u5B50\u4E32\xA0\u7684\u957F\u5EA6\u3002</p><p></p><ul><li>\u793A\u4F8B\xA01:</li></ul><p>\u8F93\u5165: s = &quot;abcabcbb&quot; \u8F93\u51FA: 3 \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;abc&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002</p><ul><li>\u793A\u4F8B 2:</li></ul><p>\u8F93\u5165: s = &quot;bbbbb&quot; \u8F93\u51FA: 1 \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F &quot;b&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 1\u3002</p><ul><li>\u793A\u4F8B 3:</li></ul><p>\u8F93\u5165: s = &quot;pwwkew&quot; \u8F93\u51FA: 3 \u89E3\u91CA: \u56E0\u4E3A\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32\u662F\xA0&quot;wke&quot;\uFF0C\u6240\u4EE5\u5176\u957F\u5EA6\u4E3A 3\u3002 \u8BF7\u6CE8\u610F\uFF0C\u4F60\u7684\u7B54\u6848\u5FC5\u987B\u662F \u5B50\u4E32 \u7684\u957F\u5EA6\uFF0C&quot;pwke&quot;\xA0\u662F\u4E00\u4E2A\u5B50\u5E8F\u5217\uFF0C\u4E0D\u662F\u5B50\u4E32\u3002</p><h3 id="\u63D0\u793A" tabindex="-1"><a class="header-anchor" href="#\u63D0\u793A" aria-hidden="true">#</a> \u63D0\u793A\uFF1A</h3><p>0 &lt;= s.length &lt;= 5 * 104 s\xA0\u7531\u82F1\u6587\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7B26\u53F7\u548C\u7A7A\u683C\u7EC4\u6210</p><blockquote><p>\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1Ahttps://leetcode.cn/problems/longest-substring-without-repeating-characters \u8457\u4F5C\u6743\u5F52\u9886\u6263\u7F51\u7EDC\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u5B98\u65B9\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002</p></blockquote><h2 id="\u89E3\u9898\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u89E3\u9898\u601D\u8DEF" aria-hidden="true">#</a> \u89E3\u9898\u601D\u8DEF</h2><h3 id="\u6ED1\u52A8\u7A97\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6ED1\u52A8\u7A97\u53E3" aria-hidden="true">#</a> \u6ED1\u52A8\u7A97\u53E3</h3><p>\u9996\u5148\u521B\u5EFA\u4E00\u4E2A\u7A97\u53E3<code>temp</code>\uFF0C\u7136\u540E\u5728\u904D\u5386\u5B57\u7B26\u4E32\u7684\u6BCF\u4E00\u4E2A\u5B57\u7B26\u3002\u5F53\u5B57\u7B26\u5B58\u5728\u4E8E<code>temp</code>\u4E2D\u65F6\uFF0C\u79FB\u52A8<code>temp</code>(<strong>\u4E5F\u5C31\u662F\u79FB\u52A8\u5230<code>temp</code>\u4E2D\u91CD\u590D\u5143\u7D20\u7684\u4E0B\u4E00\u4F4D\uFF0C\u5E76\u4E14\u6DFB\u52A0\u5F53\u524D\u904D\u5386\u7684\u5143\u7D20</strong>)\u3002\u7136\u540E\u7528<code>max</code>\u5B58\u50A8\u6BCF\u6B21\u7A97\u53E3\u7684\u6700\u5927\u957F\u5EA6\uFF0C\u5E76\u4E14\u8FDB\u884C\u548C\u81EA\u8EAB\u7684\u6BD4\u8F83\u5373\u53EF\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**

 * @param <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>

 * @return <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>

 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLongestSubstring</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> index <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span> 
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token parameter">index <span class="token operator">&gt;=</span> <span class="token number">0</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            temp <span class="token operator">=</span> temp<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
        max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,16);function _(f,g){const a=e("ExternalLinkIcon");return p(),o(l,null,[n("h1",i,[k,b,n("a",d,[m,c(a)])]),h],64)}var q=t(r,[["render",_],["__file","LEETCODE-\u65E0\u91CD\u590D\u5B57\u7B26\u7684\u6700\u957F\u5B50\u4E32.html.vue"]]);export{q as default};
