import{_ as c,r as d,o as a,c as n,a as e,b as r,F as i,d as s,e as l}from"./app.70d9e8a7.js";const p={},t=s('<h1 id="\u9501\u7248\u672C\u7684\u90A3\u4E9B\u4E8B" tabindex="-1"><a class="header-anchor" href="#\u9501\u7248\u672C\u7684\u90A3\u4E9B\u4E8B" aria-hidden="true">#</a> \u9501\u7248\u672C\u7684\u90A3\u4E9B\u4E8B</h1><h2 id="\u4E3A\u4EC0\u4E48\u8981\u9501\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u8981\u9501\u7248\u672C" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u8981\u9501\u7248\u672C</h2><p>\u4E86\u89E3\u9501\u7248\u672C\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u9996\u5148\u4E86\u89E3\u4E0B<code>package.json</code>\u4E2D\u5FC5\u4E0D\u53EF\u5C11\u7684<code>dependencies</code>\u5B57\u6BB5\u4EE5\u53CA<code>devDependencies</code>\u4E24\u4E2A\u7684\u533A\u522B\uFF1A</p><ul><li><code>dependencies</code>\uFF1A\u6307\u5B9A\u9879\u76EE\u8FD0\u884C\u6240\u4F9D\u8D56\u7684\u6A21\u5757\uFF0C\u5B89\u88C5\u4F7F\u7528<code>--save</code>\u547D\u4EE4</li><li><code>devDependencies</code>\uFF1A\u6307\u5B9A\u9879\u76EE\u5F00\u53D1\u6240\u9700\u8981\u7684\u6A21\u5757\uFF0C\u5B89\u88C5\u4F7F\u7528<code>--save-dev</code></li></ul><p>\u5B83\u4EEC\u7684\u503C\u90FD\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002\u8BE5\u5BF9\u8C61\u7684\u5404\u4E2A\u6210\u5458\uFF0C\u5206\u522B\u7531\u6A21\u5757\u540D\u548C\u5BF9\u5E94\u7684\u7248\u672C\u8981\u6C42\u7EC4\u6210\uFF0C\u8868\u793A\u4F9D\u8D56\u7684\u6A21\u5757\u53CA\u5176\u7248\u672C\u8303\u56F4\u3002</p><blockquote><p>\u5BF9\u5E94\u7684\u7248\u672C\u53EF\u4EE5\u52A0\u4E0A\u5404\u79CD\u9650\u5B9A\uFF0C\u4E3B\u8981\u6709\u4EE5\u4E0B\u51E0\u79CD\uFF1A</p><ul><li>\u6307\u5B9A\u7248\u672C\uFF1A\u6BD4\u5982 <code>1.2.2</code> \uFF0C\u9075\u5FAA\u201C\u5927\u7248\u672C.\u6B21\u8981\u7248\u672C.\u5C0F\u7248\u672C\u201D\u7684\u683C\u5F0F\u89C4\u5B9A\uFF0C\u5B89\u88C5\u65F6\u53EA\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u3002</li><li>\u6CE2\u6D6A\u53F7\uFF08<code>tilde</code>\uFF09+\u6307\u5B9A\u7248\u672C\uFF1A\u6BD4\u5982 <code>~1.2.2</code> \uFF0C\u8868\u793A\u5B89\u88C5 <code>1.2.x</code> \u7684\u6700\u65B0\u7248\u672C\uFF08\u4E0D\u4F4E\u4E8E<code>1.2.2</code>\uFF09\uFF0C\u4F46\u662F\u4E0D\u5B89\u88C5 <code>1.3.x</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5B89\u88C5\u65F6\u4E0D\u6539\u53D8\u5927\u7248\u672C\u53F7\u548C\u6B21\u8981\u7248\u672C\u53F7\u3002</li><li>\u63D2\u5165\u53F7\uFF08<code>caret</code>\uFF09+\u6307\u5B9A\u7248\u672C\uFF1A\u6BD4\u5982 <code>\u02C61.2.2</code>\uFF0C\u8868\u793A\u5B89\u88C5 <code>1.x.x</code> \u7684\u6700\u65B0\u7248\u672C\uFF08\u4E0D\u4F4E\u4E8E <code>1.2.2</code>\uFF09\uFF0C\u4F46\u662F\u4E0D\u5B89\u88C5 <code>2.x.x</code>\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5B89\u88C5\u65F6\u4E0D\u6539\u53D8\u5927\u7248\u672C\u53F7\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u5982\u679C\u5927\u7248\u672C\u53F7\u4E3A 0\uFF0C\u5219\u63D2\u5165\u53F7\u7684\u884C\u4E3A\u4E0E\u6CE2\u6D6A\u53F7\u76F8\u540C\uFF0C\u8FD9\u662F\u56E0\u4E3A\u6B64\u65F6\u5904\u4E8E\u5F00\u53D1\u9636\u6BB5\uFF0C\u5373\u4F7F\u662F\u6B21\u8981\u7248\u672C\u53F7\u53D8\u52A8\uFF0C\u4E5F\u53EF\u80FD\u5E26\u6765\u7A0B\u5E8F\u7684\u4E0D\u517C\u5BB9\u3002</li><li>latest\uFF1A\u5B89\u88C5\u6700\u65B0\u7248\u672C\u3002</li></ul><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u6BD4\u5982 <code>npm install package -save</code> \u5B89\u88C5\u4E00\u4E2A\u4F9D\u8D56\u5305\u65F6\uFF0C\u7248\u672C\u662F\u63D2\u5165\u53F7\u5F62\u5F0F\u3002\u8FD9\u6837\u6BCF\u6B21\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u5305 <code>npm install</code> \u65F6\u201D\u6B21\u8981\u7248\u672C\u201C\u548C\u201C\u5C0F\u7248\u672C\u201D\u662F\u4F1A\u62C9\u53D6\u6700\u65B0\u7684\u3002</p></blockquote><p>\u6B63\u662F\u56E0\u4E3A\u5982\u6B64\uFF0C\u5BFC\u81F4\u6211\u4EEC\u5728\u540C\u4E00\u4EFD<code>package.json</code>\u4F7F\u7528<code>npm i</code>\u547D\u4EE4\u4F1A\u83B7\u53D6\u5230\u4E0D\u540C\u7684\u4F9D\u8D56\u7248\u672C\uFF0C\u5BFC\u81F4\u4E86\u5404\u79CD\u5404\u6837\u7684\u95EE\u9898\uFF0C\u6240\u4EE5\u9700\u8981\u6211\u4EEC\u8FDB\u884C\u4F9D\u8D56\u7684\u7248\u672C\u9501\u5B9A\u3002\u4FD7\u79F0&quot;\u9501\u7248\u672C&quot;</p><h2 id="\u600E\u4E48\u9501\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u9501\u7248\u672C" aria-hidden="true">#</a> \u600E\u4E48\u9501\u7248\u672C</h2><blockquote><p>\u9996\u5148\u8981\u8BF4\u7684\u662F\uFF0C\u5F88\u591A\u540C\u5B66\u53EF\u80FD\u4E60\u60EF\u4F7F\u7528<code>cnpm</code>\uFF0C\u56E0\u4E3A\u5B89\u88C5\u901F\u5EA6\u786E\u5B9E\u6BD4<code>npm</code>\u5FEB\u4E0D\u5C11\uFF0C\u4F46\u5728\u7248\u672C\u4F9D\u8D56\u9501\u5B9A\u65B9\u6848\u4E2D\uFF0C\u6700\u57FA\u7840\u7684\u4E00\u6761\u5C31\u662F\uFF1A\u4E0D\u8981\u4F7F\u7528<code>cnpm</code>\uFF0C\u56E0\u4E3A<code>cnpm</code>\uFF0C\u662F\u4E0D\u652F\u6301\u4F9D\u8D56\u7248\u672C\u9501\u5B9A\u7684\u3002</p></blockquote><h3 id="_1-package-json-\u9501\u5B9A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_1-package-json-\u9501\u5B9A\u7248\u672C" aria-hidden="true">#</a> 1. <code>package.json</code> \u9501\u5B9A\u7248\u672C</h3><p>\u4E5F\u5C31\u662F\u53BB\u9664<code>package.json</code>\u7248\u672C\u524D\u9762\u7684\u4FEE\u9970\u7B26\u53F7\uFF0C\u5B89\u88C5\u65F6\u5019\u518D\u52A0\u4E0A<code>--save-exact</code>\u53C2\u6570\uFF0C\u4F46\u662F\u8FD9\u6837\u4E0D\u80FD\u5BF9\u4E8E\u4F9D\u8D56\u672C\u8EAB\u4F9D\u8D56\u7684\u5176\u4ED6\u4F9D\u8D56\u8FDB\u884C\u9501\u5B9A\uFF0C\u6240\u4EE5\u60C5\u51B5\u975E\u5E38\u6709\u9650\u3002</p><h3 id="_2-npm-package-lock-json" tabindex="-1"><a class="header-anchor" href="#_2-npm-package-lock-json" aria-hidden="true">#</a> 2. <code>npm</code>+<code>package-lock.json</code></h3><p>\u7B2C\u4E00\u6B21<code>npm i</code>\u7684\u65F6\u5019\u4F1A\u6839\u636E\u5F53\u524D<code>node_modules</code>\u76EE\u5F55\u751F\u6210\u4E00\u4E2A\u56FA\u5B9A\u7248\u672C\u53F7\u7684<code>package-lock.json</code>\u6587\u4EF6\uFF0C\u540E\u9762\u5982\u679C\u5B89\u88C5\u65B0\u589E\u7684\u4F9D\u8D56\uFF0C\u4F1A\u81EA\u52A8\u66F4\u65B0\u8FD9\u4E2A\u6587\u4EF6\u3002\u4F46\u5982\u679C\u9700\u8981\u66F4\u65B0\u5F53\u524D\u67D0\u4E2A\u4F9D\u8D56\u7684\u7248\u672C\u53F7\u5E76\u9501\u5B9A\u5230<code>package-lock.json</code>\u4E2D\uFF0C\u9700\u8981\u624B\u52A8\u4FEE\u6539<code>package.json</code>\u4E2D\u5BF9\u5E94\u7684\u7248\u672C\u6216\u8005\u6307\u5B9A\u4F9D\u8D56\u7684\u7248\u672C\u53F7\u5B89\u88C5\uFF1A<code>npm i xxx@x.x.x</code>\u3002</p><h3 id="_3-yarn-yarn-lock-json" tabindex="-1"><a class="header-anchor" href="#_3-yarn-yarn-lock-json" aria-hidden="true">#</a> 3. <code>yarn</code>+<code>yarn-lock.json</code></h3><p><code>yarn-lock.json</code>\u4E0E<code>package-lock.json</code>\u539F\u7406\u7C7B\u4F3C\uFF0C\u4E60\u60EF\u7528yarn\u547D\u4EE4\u7684\u53EF\u4EE5\u91C7\u53D6\u8FD9\u79CD\u65B9\u5F0F\u3002</p><h3 id="\u66F4\u597D\u7684\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66F4\u597D\u7684\u65B9\u6CD5" aria-hidden="true">#</a> \u66F4\u597D\u7684\u65B9\u6CD5</h3><h4 id="_1-npm-ci" tabindex="-1"><a class="header-anchor" href="#_1-npm-ci" aria-hidden="true">#</a> 1. <code>npm ci</code></h4><p><code>npm ci</code>\u5728\u6267\u884C\u65F6\u4F1A\u8FDB\u884C<code>lock</code>\u6587\u4EF6\u7684\u68C0\u67E5\uFF0C\u5E76\u4E14\u5BF9\u4E8E\u4F9D\u8D56\u9879\u4E0D\u5339\u914D\u7684\u60C5\u51B5\u4F1A\u9000\u51FA\u5E76\u663E\u793A\u9519\u8BEF\uFF0C<strong>\u4F46\u662F\u8FD9\u4E2A\u547D\u4EE4\u65E0\u6CD5\u5355\u72EC\u5B89\u88C5\u4F9D\u8D56</strong>\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u5411<code>package.json</code>\u8FDB\u884C\u5199\u5165\u3002</p><h3 id="_2-yarn-frozen-lockfile" tabindex="-1"><a class="header-anchor" href="#_2-yarn-frozen-lockfile" aria-hidden="true">#</a> 2. <code>yarn --frozen-lockfile</code></h3><p><code>yarn --frozen-lockfile</code>\u548C<code>npm ci</code>\u7C7B\u4F3C\uFF0C\u9700\u8981\u5B58\u5728<code>yarn-lock.json</code>\u6587\u4EF6\u3002</p><blockquote><p>\u4E3A\u4EC0\u4E48\u8FD9\u91CC\u6CA1\u6709\u8BB2\u89E3<code>npm-shrinkwrap</code>\u8FD9\u79CD\u65B9\u6CD5\u5462\uFF1F\u4E3B\u8981\u662F\u56E0\u4E3A\u8FD9\u4E2A\u65B9\u6CD5\u662F<code>npm 5</code>\u4E4B\u524D\u7684\u65B9\u6CD5\uFF0C\u6BCF\u6B21\u4F9D\u8D56\u6709\u65B0\u589E\u6216\u8005\u7248\u672C\u66F4\u65B0\u4E4B\u540E\uFF0C\u8981\u624B\u52A8\u81EA\u884C<code>npm shrinkwrap</code>\u6765\u751F\u6210\u6216\u8005\u66F4\u65B0\u7248\u672C\u9501\u5B9A\u6587\u4EF6\u3002</p></blockquote>',21),h=e("p",null,"\u53C2\u8003\uFF1A",-1),k={href:"https://juejin.cn/post/6960928446826741796",target:"_blank",rel:"noopener noreferrer"},_=l("\u8BF7\u5C06\u4F60\u7684npm\u4F9D\u8D56\u7248\u672C\u9501\u5B9A");function u(m,x){const o=d("ExternalLinkIcon");return a(),n(i,null,[t,e("blockquote",null,[h,e("p",null,[e("a",k,[_,r(o)])])])],64)}var j=c(p,[["render",u],["__file","FE-\u9501\u7248\u672C\u7684\u90A3\u4E9B\u4E8B.html.vue"]]);export{j as default};
