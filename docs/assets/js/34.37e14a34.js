(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{526:function(s,t,n){"use strict";n.r(t);var e=n(6),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("我们用vue搭的项目，会自动(默认hash路由模式)加一个#在路由里，如果我们不想要#，可以把路由模式改成h5 history模式：")]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v(" mode"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'history'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这样在部署单页面应用的时候就会出现问题，hash路由只用于页面定位，所以不会请求后台，但history模式会，路由改变后会去服务器请求路由对应的文件，而由于是单页面应用没有这个东西，更详细可以看一下"),n("code",[s._v("vue官方文档")]),s._v("。所以页面就会报404，解决的办法也很简单，在"),n("code",[s._v("nginx")]),s._v("配置文件中加一条配置：")]),s._v(" "),n("div",{staticClass:"language-json line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[s._v("  location / "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ..do sth")]),s._v("\n      try_files $uri $uri/ /index.html;\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("匹配路由，没有对应文件就返回index.html文件。")])])}),[],!1,null,null,null);t.default=a.exports}}]);