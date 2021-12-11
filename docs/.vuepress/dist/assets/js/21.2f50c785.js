(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{398:function(s,t,a){"use strict";a.r(t);var e=a(51),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"环境安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境安装"}},[s._v("#")]),s._v(" 环境安装")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用CLI安装")]),s._v("\n npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g @nestjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("cli\n nest "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("project")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("name\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用git安装")]),s._v("\n git clone https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("nestjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("typescript"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("starter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git project\n cd project\n npm install\n npm run start\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 手动创建")]),s._v("\n npm i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save @nestjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("core @nestjs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("common rxjs reflect"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("metadata\n")])])]),a("h2",{attrs:{id:"相关指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关指令"}},[s._v("#")]),s._v(" 相关指令")]),s._v(" "),a("h4",{attrs:{id:"创建-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-module"}},[s._v("#")]),s._v(" 创建 Module")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个 User 模块")]),s._v("\n nest g module user server\n")])])]),a("p",[s._v("脚手架工具会自动在 src/server/user 文件夹下创建一个 user.module.ts，这是 Nest 的模块文件，Nest 用它来组织整个应用程序的结构。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// user.module.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"@nestjs/common"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserModule")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("同时还会在根模块 app.module.ts 中引入 UserModule 这个模块")]),s._v(" "),a("h4",{attrs:{id:"创建-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-controller"}},[s._v("#")]),s._v(" 创建 Controller")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 Nest 中，controller 就类似前端的「路由」，负责处理「客户端传入的请求」和「服务端返回的响应」。")]),s._v("\n nest g controller user server\n")])])]),a("p",[s._v("举个例子，我们如果要通过 http://localhost:3000/user/users 获取所有的用户信息，那么我们可以在 UserController 中创建一个 GET 方法，路径为 users 的路由，这个路由负责返回所有的用户信息。")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// user.controller.ts")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" Controller"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" Get "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@nestjs/common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Controller")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'user'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserController")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'users'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("findAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" string "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"All User\'s Info"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [All User's Info] 暂时代替所有用户的信息")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h3",{attrs:{id:"创建-provider"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-provider"}},[s._v("#")]),s._v(" 创建 Provider")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在 Nest 中，controller 就类似前端的「路由」，负责处理「客户端传入的请求」和「服务端返回的响应」。")]),s._v("\n nest g service user server\n")])])]),a("p",[s._v("provider 「服务的提供者」。")]),s._v(" "),a("p",[s._v("nest相关资料 "),a("a",{attrs:{href:"https://blog.csdn.net/xgangzai/article/details/109252492",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击跳转"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);