## 时间

### 1.安装 silly-datetime 模块

```js
 npm i silly-datetime --save
```

### 2.示例代码

```js
var sd = require("silly-datetime");

// silly-datetime 当前时间格式化
console.log(sd.format(new Date(), "YYYY-MM-DD HH:mm"));
// 2019-10-28 12:41
console.log(sd.format(new Date(), "YYYY-MM-DD HH:mm:ss"));
// 2019-10-28 12:41:14

// 通过时间戳拼接 格式化时间
var date = new Date(new Date().getTime());
Y = date.getFullYear() + "-";
M =
  (date.getMonth() + 1 < 10
    ? "0" + (date.getMonth() + 1)
    : date.getMonth() + 1) + "-";
D = (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
h = (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
m =
  (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) + ":";
s = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
console.log(Y + M + D + h + m + s);
// 2019-10-28 12:41:14

// 获取当前时间戳
console.log(new Date().getTime());
// 1572237674282
console.log(new Date().valueOf());
// 1572237674283
console.log(Date.parse(new Date()));
// 1572237674000

// 将指定时间转化成时间戳
var newDate = new Date(sd.format(new Date(), "YYYY-MM-DD HH:mm:ss"));
console.log(newDate.getTime());
```

## 爬虫

## http 服务

1. 框架 Express

2. 热更新 nodemon

3. 依赖注入 awilix

4. 数据持久化 sequelize

5. 部署 pm2

## 系统

## 文件

## node 自动化 simple-git 的使用

::: tip simple-git
simple-git 是一个轻量级接口，它使得在 node 应用中也可以操作 git，执行各种 git 命令。（官网解释哈：A light weight interface for running git commands in any node.js application.）
:::

```js
npm: npm install simple-git

yarn: yarn add simple-git
```

查看详情 [simple-git](https://www.npmjs.com/package/simple-git)

## 检出 git 仓库指定目录的模块

### 1.安装 silly-datetime 模块

```js
 npm i zl-gitckt-specdir -S
```

### 2.示例代码

```js
let gitcktSpecdir = require("zl-gitckt-specdir");
// 从如下gitUrl地址拉取项目目录indexDB-demo
gitcktSpecdir({
  gitUrl: "", //git地址
  dirName: "", // 文件名称
  saveDir: "", //保存至的目录地址 默认为当前目录
});
```

## uniapp 中如何把通过 uni.chooseImage 上传的图片转换成 base64 格式

### 1.安装 silly-datetime 模块

```js
//下载包
npm i image-tools --save
//在需要使用的地方引入
import { pathToBase64, base64ToPath } from 'image-tools'

```

### 2.示例代码

```js
uni.chooseImage({
	count: 1, //默认9
	sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
	sourceType: ['camera'], //从相册选择
	success: res=> {
			console.log("[选择图片]",res)
			this.imgToBase64(res.tempFilePaths[0]).then(base64=>{
					console.log("[转换成base64]",base64)
			})
	 }
});
//把图片转换成base64
imgToBase64(data){
	return new Promise((resolve,reject)=>{
			pathToBase64(data).then(base64 => {
				resolve(base64)
			 }).catch(error => {
				console.error(error)
				reject(error)
			})
	})
}
```
