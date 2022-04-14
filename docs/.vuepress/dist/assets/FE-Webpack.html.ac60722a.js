import{_ as n,r as i,o as a,c as l,a as e,e as d,F as r,b as o,d as t}from"./app.07af11fc.js";const s={},p=e("h1",{id:"webpack\u6D41\u7A0B\u89E3\u6790",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webpack\u6D41\u7A0B\u89E3\u6790","aria-hidden":"true"},"#"),o(),e("code",null,"Webpack"),o("\u6D41\u7A0B\u89E3\u6790")],-1),h=o("\u672C\u8D28\u4E0A\uFF0C"),_=e("strong",null,"webpack",-1),u=o("\xA0\u662F\u4E00\u4E2A\u7528\u4E8E\u73B0\u4EE3 JavaScript \u5E94\u7528\u7A0B\u5E8F\u7684\xA0"),k=e("em",null,"\u9759\u6001\u6A21\u5757\u6253\u5305\u5DE5\u5177",-1),b=o("\u3002\u5F53 webpack \u5904\u7406\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5B83\u4F1A\u5728\u5185\u90E8\u4ECE\u4E00\u4E2A\u6216\u591A\u4E2A\u5165\u53E3\u70B9\u6784\u5EFA\u4E00\u4E2A\xA0"),m={href:"https://webpack.docschina.org/concepts/dependency-graph/",target:"_blank",rel:"noopener noreferrer"},f=o("\u4F9D\u8D56\u56FE(dependency graph)"),g=o("\uFF0C\u7136\u540E\u5C06\u4F60\u9879\u76EE\u4E2D\u6240\u9700\u7684\u6BCF\u4E00\u4E2A\u6A21\u5757\u7EC4\u5408\u6210\u4E00\u4E2A\u6216\u591A\u4E2A\xA0"),w=e("em",null,"bundles",-1),x=o("\uFF0C\u5B83\u4EEC\u5747\u4E3A\u9759\u6001\u8D44\u6E90\uFF0C\u7528\u4E8E\u5C55\u793A\u4F60\u7684\u5185\u5BB9\u3002"),y=t('<h2 id="webpack-5-x" tabindex="-1"><a class="header-anchor" href="#webpack-5-x" aria-hidden="true">#</a> Webpack 5.x</h2><h3 id="\u6D41\u7A0B\u68B3\u7406" tabindex="-1"><a class="header-anchor" href="#\u6D41\u7A0B\u68B3\u7406" aria-hidden="true">#</a> \u6D41\u7A0B\u68B3\u7406</h3><p>\u8BFB\u53D6<code>webpack</code>\u914D\u7F6E\u53C2\u6570 =&gt; \u542F\u52A8<code>webpack</code>\uFF0C\u521B\u5EFA<code>complier</code>\u5BF9\u8C61\u5F00\u59CB\u89E3\u6790\u9879\u76EE =&gt; \u89E3\u6790<code>entry</code>\uFF0C\u6784\u5EFA\u4F9D\u8D56\u5173\u7CFB\u6811 =&gt; \u7F16\u8BD1\u6587\u4EF6 =&gt; \u8F93\u51FA\u6587\u4EF6</p><h3 id="\u521D\u59CB\u5316\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u9636\u6BB5" aria-hidden="true">#</a> \u521D\u59CB\u5316\u9636\u6BB5</h3><h4 id="\u8BFB\u53D6\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BFB\u53D6\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u8BFB\u53D6\u914D\u7F6E\u53C2\u6570</h4><p>\u8FD9\u4E00\u6B65\u4F1A\u4F9D\u9760\u4E8E\u6211\u4EEC\u4F7F\u7528\u7684<code>npm scripts</code>\u547D\u4EE4\u4E2D\u6307\u5B9A\u7684<code>webpack</code>\u914D\u7F6E\u6587\u4EF6\u6765\u8BFB\u53D6\uFF0C\u5982\u4E0D\u6307\u5B9A\u9ED8\u8BA4\u4E3A\u9879\u76EE\u6839\u76EE\u5F55\u4E0B<code>webpack.config.js</code>\u3002</p><ul><li>\u5728\u6267\u884C<code>npm scripts</code>\u547D\u4EE4\u65F6\uFF0C\u5E95\u5C42\u901A\u8FC7<code>process.args</code> + \u5BF9\u5E94\u7684<code>webpack</code>\u914D\u7F6E\u6587\u4EF6\u5408\u5E76\u4E3A\u5F53\u524D\u7684\u542F\u52A8\u914D\u7F6E</li><li>\u7136\u540E\u8C03\u7528<code>validateSchema</code>\u6765\u9A8C\u8BC1\u914D\u7F6E</li><li>\u6700\u540E\u901A\u8FC7\u8C03\u7528<code>getNormalizedWebpackOptions</code> + <code>applyWebpackOptionsBaseDefaults</code>\u5408\u5E76\u6700\u7EC8\u914D\u7F6E</li></ul><h4 id="\u521B\u5EFAcomplier\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFAcomplier\u5BF9\u8C61" aria-hidden="true">#</a> \u521B\u5EFA<code>Complier</code>\u5BF9\u8C61</h4><blockquote><p><code>complier</code>\u5BF9\u8C61\u662F<code>webpack</code>\u7684\u7F16\u8BD1\u548C\u8C03\u5EA6\u4E2D\u5FC3\uFF0C\u662F\u4E00\u4E2A\u7F16\u8BD1\u5668\u5B9E\u4F8B\u3002 \u8FD9\u4E2A\u5BF9\u8C61\u4F1A\u4E00\u76F4\u5B58\u6D3B\u76F4\u5230\u6D41\u7A0B\u7ED3\u675F\u9000\u51FA\u3002 \u5728\xA0<code>webpack</code>\xA0\u7684\u6BCF\u4E2A\u8FDB\u7A0B\u4E2D\uFF0C<code>compiler</code>\xA0\u53EA\u4F1A\u751F\u6210\u4E00\u6B21</p></blockquote>',9),q=e("code",null,"Compiler",-1),S=o("\xA0\u6A21\u5757\u662F webpack \u7684\u4E3B\u8981\u5F15\u64CE\uFF0C\u5B83\u901A\u8FC7\xA0"),F={href:"https://webpack.docschina.org/api/cli",target:"_blank",rel:"noopener noreferrer"},A=o("CLI"),C=o("\xA0\u6216\u8005\xA0"),W={href:"https://webpack.docschina.org/api/node",target:"_blank",rel:"noopener noreferrer"},j=o("Node API"),E=o("\xA0\u4F20\u9012\u7684\u6240\u6709\u9009\u9879\u521B\u5EFA\u51FA\u4E00\u4E2A compilation \u5B9E\u4F8B\u3002 \u5B83\u6269\u5C55\uFF08extends\uFF09\u81EA\xA0"),N=e("code",null,"Tapable",-1),P=o("\xA0\u7C7B\uFF0C\u7528\u6765\u6CE8\u518C\u548C\u8C03\u7528\u63D2\u4EF6\u3002 \u5927\u591A\u6570\u9762\u5411\u7528\u6237\u7684\u63D2\u4EF6\u4F1A\u9996\u5148\u5728\xA0"),T=e("code",null,"Compiler",-1),v=o("\xA0\u4E0A\u6CE8\u518C\u3002"),I=t('<blockquote><p><code>Compilation</code>\xA0\u6A21\u5757\u4F1A\u88AB\xA0<code>Compiler</code>\xA0\u7528\u6765\u521B\u5EFA\u65B0\u7684 compilation \u5BF9\u8C61\uFF08\u6216\u65B0\u7684 build \u5BF9\u8C61\uFF09\u3002\xA0<code>compilation</code>\xA0\u5B9E\u4F8B\u80FD\u591F\u8BBF\u95EE\u6240\u6709\u7684\u6A21\u5757\u548C\u5B83\u4EEC\u7684\u4F9D\u8D56\uFF08\u5927\u90E8\u5206\u662F\u5FAA\u73AF\u4F9D\u8D56\uFF09\u3002 \u5B83\u4F1A\u5BF9\u5E94\u7528\u7A0B\u5E8F\u7684\u4F9D\u8D56\u56FE\u4E2D\u6240\u6709\u6A21\u5757\uFF0C \u8FDB\u884C\u5B57\u9762\u4E0A\u7684\u7F16\u8BD1(literal compilation)\u3002 \u5728\u7F16\u8BD1\u9636\u6BB5\uFF0C\u6A21\u5757\u4F1A\u88AB\u52A0\u8F7D(load)\u3001\u5C01\u5B58(seal)\u3001\u4F18\u5316(optimize)\u3001 \u5206\u5757(chunk)\u3001\u54C8\u5E0C(hash)\u548C\u91CD\u65B0\u521B\u5EFA(restore)\u3002 <code>Compilation</code>\u662F\u5355\u6B21\u7F16\u8F91\u8FC7\u7A0B\u7684\u7BA1\u7406\u5668\uFF0C\u6BD4\u5982 <code>watch = true</code> \u65F6\uFF0C\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u53EA\u6709\u4E00\u4E2A <code>compiler</code> \u4F46\u6BCF\u6B21\u6587\u4EF6\u53D8\u66F4\u89E6\u53D1\u91CD\u65B0\u7F16\u8BD1\u65F6\uFF0C\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 <code>compilation</code> \u5BF9\u8C61</p></blockquote><p>\u6839\u636E\u8BFB\u53D6\u5230\u7684\u6700\u7EC8\u914D\u7F6E(<code>options</code>)\u751F\u6210\u5BF9\u5E94\u7684<code>complier</code>\u5BF9\u8C61\u3002</p><p>\u904D\u5386\u7528\u6237\u5B9A\u4E49\u7684 <code>plugins</code> \u96C6\u5408\uFF0C\u56E0\u4E3A<strong>\u4EFB\u4F55\u4E00\u4E2A<code>webpack</code>\u63D2\u4EF6\u90FD\u662F\u4E00\u4E2A\u7C7B(\u5F53\u7136\u7C7B\u672C\u8D28\u4E0A\u90FD\u662Ffunciton\u7684\u8BED\u6CD5\u7CD6)\uFF0C\u6BCF\u4E2A\u63D2\u4EF6\u90FD\u5FC5\u987B\u5B58\u5728\u4E00\u4E2A<code>apply</code>\u65B9\u6CD5</strong>\u3002\u6267\u884C\u63D2\u4EF6\u7684 <code>apply</code> \u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u63A5\u53D7\u4E00\u4E2A<code>complier</code>\u5BF9\u8C61\uFF0C\u4E00\u6B21\u6765\u5B9E\u73B0\u63D2\u4EF6\u7684\u52A0\u8F7D\u6CE8\u5165\u3002</p><blockquote><p>\u8FD9\u91CC\u9700\u8981\u8FDB\u884C\u4EE5\u4E0B\u601D\u91CF\uFF1A <code>webpack</code>\u63D2\u4EF6<strong>\u7C7B\u4F3C\u53D1\u5E03\u8BA2\u9605\u7684\u6A21\u5F0F\uFF0C\u901A\u8FC7<code>compiler</code>\u4E0A\u76D1\u542C\u4E8B\u4EF6\u3002\u7136\u540E\u518D\u6253\u5305\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u89E6\u53D1\u76D1\u542C\u7684\u4E8B\u4EF6\u4ECE\u800C\u6DFB\u52A0\u4E00\u5B9A\u7684\u903B\u8F91\u5F71\u54CD\u6253\u5305\u7ED3\u679C</strong>\u3002 \u4F46\u662F\u8BA2\u9605\u6A21\u5F0F\u662F\u4E00\u79CD\u677E\u8026\u5408\u67B6\u6784\uFF0C\u53D1\u5E03\u5668\u53EA\u662F\u5728\u7279\u5B9A\u65F6\u673A\u53D1\u5E03\u4E8B\u4EF6\u6D88\u606F\uFF0C\u8BA2\u9605\u8005\u5E76\u4E0D\u6216\u8005\u5F88\u5C11\u4E0E\u4E8B\u4EF6\u76F4\u63A5\u53D1\u751F\u4EA4\u4E92\uFF0C\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u6211\u4EEC\u5E73\u5E38\u5728\u4F7F\u7528 HTML \u4E8B\u4EF6\u7684\u65F6\u5019\u5F88\u591A\u65F6\u5019\u53EA\u662F\u5728\u8FD9\u4E2A\u65F6\u673A\u89E6\u53D1\u4E1A\u52A1\u903B\u8F91\uFF0C\u5F88\u5C11\u8C03\u7528\u4E0A\u4E0B\u6587\u64CD\u4F5C\u3002\u800C webpack \u7684\u94A9\u5B50\u4F53\u7CFB\u662F\u4E00\u79CD\u5F3A\u8026\u5408\u67B6\u6784\uFF0C\u5B83\u5728\u7279\u5B9A\u65F6\u673A\u89E6\u53D1\u94A9\u5B50\u65F6\u4F1A\u9644\u5E26\u4E0A\u8DB3\u591F\u7684\u4E0A\u4E0B\u6587\u4FE1\u606F\uFF0C\u63D2\u4EF6\u5B9A\u4E49\u7684\u94A9\u5B50\u56DE\u8C03\u4E2D\uFF0C\u80FD\u4E5F\u53EA\u80FD\u4E0E\u8FD9\u4E9B\u4E0A\u4E0B\u6587\u80CC\u540E\u7684\u6570\u636E\u7ED3\u6784\u3001\u63A5\u53E3\u4EA4\u4E92\u4EA7\u751F <strong>\u300Cside effect\u300D</strong>\uFF0C\u8FDB\u800C\u5F71\u54CD\u5230\u7F16\u8BD1\u72B6\u6001\u548C\u540E\u7EED\u6D41\u7A0B\u3002</p></blockquote><p>\u8C03\u7528 <code>new WebpackOptionsApply().process</code> \u65B9\u6CD5\uFF0C\u52A0\u8F7D\u5404\u79CD\u5185\u7F6E\u63D2\u4EF6\u3002 \u7136\u540E\u6CE8\u5165\u5185\u7F6E\u63D2\u4EF6\u3001\u6CE8\u518C\u5404\u79CD\u6A21\u5757\u5DE5\u5382\u3001\u521D\u59CB\u5316 <code>RuleSet</code> \u96C6\u5408\u3001\u52A0\u8F7D\u914D\u7F6E\u7684\u63D2\u4EF6\u7B49\u3002</p><h3 id="\u6784\u5EFA\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA\u9636\u6BB5" aria-hidden="true">#</a> \u6784\u5EFA\u9636\u6BB5</h3><h4 id="\u89E3\u6790entry-\u6784\u5EFA\u4F9D\u8D56\u5173\u7CFB\u6811" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790entry-\u6784\u5EFA\u4F9D\u8D56\u5173\u7CFB\u6811" aria-hidden="true">#</a> \u89E3\u6790<code>Entry</code> \uFF0C\u6784\u5EFA\u4F9D\u8D56\u5173\u7CFB\u6811</h4><p><code>module</code> =&gt; <code>ast</code> =&gt; <code>dependences</code> =&gt; <code>module</code></p><p>\u5728\u8FD9\u91CC\uFF0C\u901A\u8FC7\u5185\u7F6E\u7684 <code>EntryOptionPlugin</code> \u63D2\u4EF6\uFF0C\u5904\u7406 <code>entry</code> \u914D\u7F6E\u3002 \u7136\u540E\u5229\u7528AST\u8BED\u6CD5\u6811\uFF0C\u89E3\u6790\u6BCF\u4E2A\u6A21\u5757\u4E4B\u95F4\u7684\u4F9D\u8D56\u5173\u7CFB\uFF0C\u9012\u5F52\u5206\u6790\u904D\u5386\uFF0C\u4ECE\u800C\u5F62\u6210\u5BF9\u5E94\u7684\u4F9D\u8D56\u5173\u7CFB\u6811\u3002</p><p>\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B\uFF1A</p>',10),J=e("li",null,[o("\u8C03\u7528 "),e("code",null,"handleModuleCreate"),o(" \uFF0C\u6839\u636E\u6587\u4EF6\u7C7B\u578B\u6784\u5EFA "),e("code",null,"module"),o(" \u5B50\u7C7B")],-1),M=o("\u8C03\u7528 "),V={href:"https://xie.infoq.cn/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Floader-runner",target:"_blank",rel:"noopener noreferrer"},L=o("loader-runner"),B=o(" \u4ED3\u5E93\u7684 "),D=e("code",null,"runLoaders",-1),O=o(" \u8F6C\u8BD1 "),z=e("code",null,"module",-1),H=o(" \u5185\u5BB9\uFF0C\u901A\u5E38\u662F\u4ECE\u5404\u7C7B\u8D44\u6E90\u7C7B\u578B\u8F6C\u8BD1\u4E3A JavaScript \u6587\u672C"),X=o("\u8C03\u7528 "),R={href:"https://xie.infoq.cn/link?target=https%3A%2F%2Fwww.npmjs.com%2Fpackage%2Facorn",target:"_blank",rel:"noopener noreferrer"},G=o("acorn"),K=o(" \u5C06 JS \u6587\u672C\u89E3\u6790\u4E3A AST"),Q=t("<li>\u904D\u5386 AST\uFF0C\u8BC6\u522B <code>require/ import</code> \u4E4B\u7C7B\u7684\u5BFC\u5165\u8BED\u53E5\uFF0C\u786E\u5B9A\u6A21\u5757\u5BF9\u5176\u4ED6\u8D44\u6E90\u7684\u4F9D\u8D56\u5173\u7CFB\u3002\u89E6\u53D1\u5404\u79CD\u94A9\u5B50\u5728 <code>HarmonyExportDependencyParserPlugin</code> \u63D2\u4EF6\u76D1\u542C <code>exportImportSpecifier</code> \u94A9\u5B50\uFF0C\u89E3\u8BFB JS \u6587\u672C\u5BF9\u5E94\u7684\u8D44\u6E90\u4F9D\u8D56\u8C03\u7528 <code>module</code> \u5BF9\u8C61\u7684 <code>addDependency</code> \u5C06\u4F9D\u8D56\u5BF9\u8C61\u52A0\u5165\u5230 <code>module</code> \u4F9D\u8D56\u5217\u8868\u4E2D</li><li>AST \u904D\u5386\u5B8C\u6BD5\u540E\uFF0C\u8C03\u7528 <code>module.handleParseResult</code> \u5904\u7406\u6A21\u5757\u4F9D\u8D56</li><li>\u5BF9\u4E8E <code>module</code> \u65B0\u589E\u7684\u4F9D\u8D56\uFF0C\u8C03\u7528 <code>handleModuleCreate</code> \uFF0C\u63A7\u5236\u6D41\u56DE\u5230\u7B2C\u4E00\u6B65 <code>module</code>\u5BF9\u8C61\u662F\u4EC0\u4E48: webpack \u5185\u90E8\u6240\u6709\u8D44\u6E90\u90FD\u4F1A\u4EE5<code>module</code>\u5BF9\u8C61\u5F62\u5F0F\u5B58\u5728\uFF0C\u6240\u6709\u5173\u4E8E\u8D44\u6E90\u7684\u64CD\u4F5C\u3001\u8F6C\u8BD1\u3001\u5408\u5E76\u90FD\u662F\u4EE5<code>module</code>\u4E3A\u57FA\u672C\u5355\u4F4D\u8FDB\u884C\u7684</li><li><code>id</code>\u5C5E\u6027\uFF0C\u8868\u793A\u5F53\u524D\u6A21\u5757\u9488\u5BF9\u4E8E<code>this.rootPath</code>\u7684\u76F8\u5BF9\u76EE\u5F55\u3002</li><li><code>dependencies</code>\u5C5E\u6027\uFF0C\u5B83\u662F\u4E00\u4E2A<code>Set</code>\u5185\u90E8\u4FDD\u5B58\u4E86\u8BE5\u6A21\u5757\u4F9D\u8D56\u7684\u6240\u6709\u6A21\u5757\u7684\u6A21\u5757ID\u3002</li><li><code>name</code>\u5C5E\u6027,\u5B83\u8868\u793A\u8BE5\u6A21\u5757\u5C5E\u4E8E\u54EA\u4E2A\u5165\u53E3\u6587\u4EF6\u3002</li><li><code>_source</code>\u5C5E\u6027\uFF0C\u5B83\u5B58\u653E\u6A21\u5757\u81EA\u8EAB\u7ECF\u8FC7<code>babel</code>\u7F16\u8BD1\u540E\u7684\u5B57\u7B26\u4E32\u4EE3\u7801\u3002</li>",7),U=t('<p>\u4E4B\u540E\u8C03\u7528<code>complier.run()</code>\u65B9\u6CD5\u6765\u8FDB\u884C\u7F16\u8BD1\u3002</p><h4 id="\u7F16\u8BD1\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u6587\u4EF6" aria-hidden="true">#</a> \u7F16\u8BD1\u6587\u4EF6</h4><ul><li>\u6839\u636E\u5165\u53E3\u6587\u4EF6\u8DEF\u5F84\u5206\u6790\u5165\u53E3\u6587\u4EF6\uFF0C\u5BF9\u4E8E\u5165\u53E3\u6587\u4EF6\u8FDB\u884C\u5339\u914D\u5BF9\u5E94\u7684<code>loader</code>\u8FDB\u884C\u5904\u7406\u5165\u53E3\u6587\u4EF6\u3002</li><li>\u5C06<code>loader</code>\u5904\u7406\u5B8C\u6210\u7684\u5165\u53E3\u6587\u4EF6\u4F7F\u7528<code>webpack</code>\u8FDB\u884C\u7F16\u8BD1\u3002</li><li>\u5206\u6790\u5165\u53E3\u6587\u4EF6\u4F9D\u8D56\uFF0C\u91CD\u590D\u4E0A\u8FB9\u4E24\u4E2A\u6B65\u9AA4\u7F16\u8BD1\u5BF9\u5E94\u4F9D\u8D56\u3002</li><li>\u5982\u679C\u5D4C\u5957\u6587\u4EF6\u5B58\u5728\u4F9D\u8D56\u6587\u4EF6\uFF0C\u9012\u5F52\u8C03\u7528\u4F9D\u8D56\u6A21\u5757\u8FDB\u884C\u7F16\u8BD1\u3002</li><li>\u901A\u8FC7<code>babel</code>\u5206\u6790\u4F9D\u8D56\uFF0C\u5E76\u4E14\u540C\u65F6\u5C06\u6240\u6709\u4F9D\u8D56\u7684\u8DEF\u5F84\u66F4\u6362\u4E3A\u76F8\u5BF9\u4E8E\u9879\u76EE\u542F\u52A8\u76EE\u5F55<code>options.context</code>\u7684\u8DEF\u5F84\u3002</li><li>\u5165\u53E3\u6587\u4EF6\u4E2D\u5982\u679C\u5B58\u5728\u4F9D\u8D56\u7684\u8BDD\uFF0C\u9012\u5F52\u4E0A\u8FF0\u6B65\u9AA4\u7F16\u8BD1\u4F9D\u8D56\u6A21\u5757\u3002</li><li>\u5C06\u6BCF\u4E2A\u4F9D\u8D56\u7684\u6A21\u5757\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61\u52A0\u5165<code>this.modules</code>\u3002</li><li>\u5C06\u6BCF\u4E2A\u5165\u53E3\u6587\u4EF6\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61\u52A0\u5165<code>this.entries</code>\u3002</li><li>\u9012\u5F52\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u7EC4\u88C5\u4E00\u4E2A\u4E2A\u5305\u542B\u591A\u4E2A\u6A21\u5757\u7684<code>chunk</code></li></ul><p>\u4EC0\u4E48\u662F<code>chunk</code>? <code>chunk</code> \u662F\u8F93\u51FA\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u8FD9\u4E9B <code>chunks</code> \u4E0E\u6700\u7EC8\u8F93\u51FA\u7684\u8D44\u6E90\u4E00\u4E00\u5BF9\u5E94\uFF0C\u90A3\u6309\u4E0A\u9762\u7684\u89C4\u5219\u5927\u81F4\u4E0A\u53EF\u4EE5\u63A8\u5BFC\u51FA\u4E00\u4E2A <code>entry</code> \u4F1A\u5BF9\u5E94\u6253\u5305\u51FA\u4E00\u4E2A\u8D44\u6E90\uFF0C\u800C\u901A\u8FC7\u52A8\u6001\u5F15\u5165\u8BED\u53E5\u5F15\u5165\u7684\u6A21\u5757\uFF0C\u4E5F\u5BF9\u5E94\u4F1A\u6253\u5305\u51FA\u76F8\u5E94\u7684\u8D44\u6E90\uFF0C\u6211\u4EEC\u6765\u770B\u4E2A\u793A\u4F8B\u3002</p><ul><li><code>name</code>:\u5F53\u524D\u5165\u53E3\u6587\u4EF6\u7684\u540D\u79F0</li><li><code>entryModule</code>: \u5165\u53E3\u6587\u4EF6\u7F16\u8BD1\u540E\u7684\u5BF9\u8C61\u3002</li><li><code>modules</code>: \u8BE5\u5165\u53E3\u6587\u4EF6\u4F9D\u8D56\u7684\u6240\u6709\u6A21\u5757\u5BF9\u8C61\u7EC4\u6210\u7684\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E00\u4E2A\u5143\u7D20\u7684\u683C\u5F0F\u548C<code>entryModule</code>\u662F\u4E00\u81F4\u7684\u3002</li></ul><h1 id="\u7F16\u8BD1\u5B8C\u6210\u9636\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u5B8C\u6210\u9636\u6BB5" aria-hidden="true">#</a> \u7F16\u8BD1\u5B8C\u6210\u9636\u6BB5</h1><blockquote><p>\u8FD9\u4E00\u6B65\u7684\u5173\u952E\u903B\u8F91\u662F\u5C06 <code>module</code> \u6309\u89C4\u5219\u7EC4\u7EC7\u6210 <code>chunks</code> \uFF0Cwebpack \u5185\u7F6E\u7684 <code>chunk</code> \u5C01\u88C5\u89C4\u5219\u6BD4\u8F83\u7B80\u5355\uFF1A <code>entry</code> \u53CA entry \u89E6\u8FBE\u5230\u7684\u6A21\u5757\uFF0C\u7EC4\u5408\u6210\u4E00\u4E2A <code>chunk</code> \u3002\u4F7F\u7528\u52A8\u6001\u5F15\u5165\u8BED\u53E5\u5F15\u5165\u7684\u6A21\u5757\uFF0C\u5404\u81EA\u7EC4\u5408\u6210\u4E00\u4E2A <code>chunk</code></p></blockquote><h3 id="\u8F93\u51FA\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8F93\u51FA\u6587\u4EF6" aria-hidden="true">#</a> \u8F93\u51FA\u6587\u4EF6</h3><ol><li>\u6784\u5EFA\u672C\u6B21\u7F16\u8BD1\u7684 <code>ChunkGraph</code> \u5BF9\u8C61\uFF1B</li><li>\u904D\u5386 <code>compilation.modules</code> \u96C6\u5408\uFF0C\u5C06 <code>module</code> \u6309 <code>entry/\u52A8\u6001\u5F15\u5165</code> \u7684\u89C4\u5219\u5206\u914D\u7ED9\u4E0D\u540C\u7684 <code>Chunk</code> \u5BF9\u8C61\uFF1B</li><li><code>compilation.modules</code> \u96C6\u5408\u904D\u5386\u5B8C\u6BD5\u540E\uFF0C\u5F97\u5230\u5B8C\u6574\u7684 <code>chunks</code> \u96C6\u5408\u5BF9\u8C61\uFF0C\u8C03\u7528 <code>createXxxAssets</code> \u65B9\u6CD5</li><li><code>createXxxAssets</code> \u904D\u5386 <code>module/chunk</code> \uFF0C\u8C03\u7528 <code>compilation.emitAssets</code> \u65B9\u6CD5\u5C06\u8D44 <code>assets</code> \u4FE1\u606F\u8BB0\u5F55\u5230 <code>compilation.assets</code> \u5BF9\u8C61\u4E2D</li><li>\u89E6\u53D1 <code>seal</code> \u56DE\u8C03\uFF0C\u63A7\u5236\u6D41\u56DE\u5230 <code>compiler</code> \u5BF9\u8C61</li></ol><p>\u7ECF\u8FC7\u6784\u5EFA\u9636\u6BB5\u540E\uFF0C<code>compilation</code> \u4F1A\u83B7\u77E5\u8D44\u6E90\u6A21\u5757\u7684\u5185\u5BB9\u4E0E\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4E5F\u5C31\u77E5\u9053\u201C\u8F93\u5165\u201D\u662F\u4EC0\u4E48\uFF1B\u800C\u7ECF\u8FC7 <code>seal</code> \u9636\u6BB5\u5904\u7406\u540E\uFF0C <code>compilation</code> \u5219\u83B7\u77E5\u8D44\u6E90\u8F93\u51FA\u7684\u56FE\u8C31\uFF0C\u4E5F\u5C31\u662F\u77E5\u9053\u600E\u4E48\u201C\u8F93\u51FA\u201D\uFF1A\u54EA\u4E9B\u6A21\u5757\u8DDF\u90A3\u4E9B\u6A21\u5757\u201C\u7ED1\u5B9A\u201D\u5728\u4E00\u8D77\u8F93\u51FA\u5230\u54EA\u91CC\u3002</p><p><code>seal</code> \u7ED3\u675F\u4E4B\u540E\uFF0C\u7D27\u63A5\u7740\u8C03\u7528 <code>compiler.emitAssets</code> \u51FD\u6570\uFF0C\u51FD\u6570\u5185\u90E8\u8C03\u7528 <code>compiler.outputFileSystem.writeFile</code> \u65B9\u6CD5\u5C06 <code>assets</code> \u96C6\u5408\u5199\u5165\u6587\u4EF6\u7CFB\u7EDF\uFF1A</p><ul><li>\u5C06\u6587\u4EF6\u5199\u5165\u78C1\u76D8\u524D\u8C03\u7528<code>plugin</code>\u7684<code>emit</code>\u94A9\u5B50\u51FD\u6570\u3002</li><li>\u5224\u65AD<code>output.path</code>\u6587\u4EF6\u5939\u662F\u5426\u5B58\u5728\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u901A\u8FC7<code>fs</code>\u65B0\u5EFA\u8FD9\u4E2A\u6587\u4EF6\u5939\u3002</li><li>\u5C06\u672C\u6B21\u6253\u5305\u751F\u6210\u7684\u6240\u6709\u6587\u4EF6\u540D(<code>this.assets</code>\u7684<code>key</code>\u503C\u7EC4\u6210\u7684\u6570\u7EC4)\u5B58\u653E\u8FDB\u5165<code>files</code>\u4E2D\u53BB\u3002</li><li>\u5FAA\u73AF<code>this.assets</code>\uFF0C\u5C06\u6587\u4EF6\u4F9D\u6B21\u5199\u5165\u5BF9\u5E94\u7684\u78C1\u76D8\u4E2D\u53BB\u3002</li><li>\u6240\u6709\u6253\u5305\u6D41\u7A0B\u7ED3\u675F\uFF0C\u89E6\u53D1<code>webpack</code>\u63D2\u4EF6\u7684<code>done</code>\u94A9\u5B50\u3002</li><li>\u540C\u65F6\u4E3A<code>NodeJs Webpack APi</code>\u547C\u5E94\uFF0C\u8C03\u7528<code>run</code>\u65B9\u6CD5\u4E2D\u5916\u90E8\u4F20\u5165\u7684<code>callback</code>\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\u3002</li></ul><h2 id="\u53C2\u8003\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u5185\u5BB9" aria-hidden="true">#</a> \u53C2\u8003\u5185\u5BB9</h2>',13),Y={href:"https://mp.weixin.qq.com/s/85S7i3z9pVJyMjVKqXHy6w",target:"_blank",rel:"noopener noreferrer"},Z=o("# Webapck5 \u6838\u5FC3\u6253\u5305\u539F\u7406\u5168\u6D41\u7A0B\u89E3\u6790\uFF0C\u770B\u8FD9\u4E00\u7BC7\u5C31\u591F\u4E86"),$={href:"https://juejin.cn/post/7023242274876162084",target:"_blank",rel:"noopener noreferrer"},ee=o("# \u3010\u4E07\u5B57\u3011\u900F\u8FC7\u5206\u6790 webpack \u9762\u8BD5\u9898\uFF0C\u6784\u5EFA webpack5.x \u77E5\u8BC6\u4F53\u7CFB"),oe={href:"https://juejin.cn/post/6943468761575849992",target:"_blank",rel:"noopener noreferrer"},ce=o("# \u5F53\u9762\u8BD5\u5B98\u95EEWebpack\u7684\u65F6\u5019\u4ED6\u60F3\u77E5\u9053\u4EC0\u4E48"),de={href:"https://xie.infoq.cn/article/ddca4caa394241447fa0aa3c0",target:"_blank",rel:"noopener noreferrer"},te=o("# \u4E07\u5B57\u603B\u7ED3 \u4E00\u6587\u5403\u900F Webpack \u6838\u5FC3\u539F\u7406"),ne={href:"https://webpack.docschina.org/concepts/",target:"_blank",rel:"noopener noreferrer"},ie=o("# webpack \u5B98\u65B9\u6587\u6863"),ae={href:"https://gitmind.cn/app/doc/fac1c196e29b8f9052239f16cff7d4c7",target:"_blank",rel:"noopener noreferrer"},le=o("# webpack \u77E5\u8BC6\u56FE\u8C31"),re={href:"https://juejin.cn/post/6844904000169607175",target:"_blank",rel:"noopener noreferrer"},se=o("# webpack\u6784\u5EFA\u6D41\u7A0B\u5206\u6790");function pe(he,_e){const c=i("ExternalLinkIcon");return a(),l(r,null,[p,e("blockquote",null,[e("p",null,[h,_,u,k,b,e("a",m,[f,d(c)]),g,w,x])]),y,e("p",null,[q,S,e("a",F,[A,d(c)]),C,e("a",W,[j,d(c)]),E,N,P,T,v]),I,e("ul",null,[J,e("li",null,[M,e("a",V,[L,d(c)]),B,D,O,z,H]),e("li",null,[X,e("a",R,[G,d(c)]),K]),Q]),U,e("ul",null,[e("li",null,[e("a",Y,[Z,d(c)])]),e("li",null,[e("a",$,[ee,d(c)])]),e("li",null,[e("a",oe,[ce,d(c)])]),e("li",null,[e("a",de,[te,d(c)])]),e("li",null,[e("a",ne,[ie,d(c)])]),e("li",null,[e("a",ae,[le,d(c)])]),e("li",null,[e("a",re,[se,d(c)])])])],64)}var ke=n(s,[["render",pe],["__file","FE-Webpack.html.vue"]]);export{ke as default};
