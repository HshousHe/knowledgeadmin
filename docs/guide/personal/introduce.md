## 在 node 中运行 cmd 命令

### 1.初始化项目

```js
 npm init

 npm install
```

### 2.child_process 的使用

::: tip child_process
在 node 中我们常常需要在主进程之外新建一个子进程来提高程序的运行效率，这时就需要使用到 node 中的 child_process 模块。child_process 模块提供了衍生子进程的功能，在默认情况下，父进程和子进程之间会建立 stdin,stdout,stderr 三个管道，数据能够以非阻塞的方式流动。
:::

查看详情 [child_process](http://nodejs.cn/api/child_process.html#child_process_child_process_exec_command_options_callback)

##### 在项目中运行一个 cmd 命令 ipconfig

```js
var child_process = require("child_process");
child_process.exec("ipconfig", function(err, stdout, stderr) {});
```

### 3.解决乱码

```js
 npm install --save iconv-lite
```

```js
var child_process = require("child_process");
var iconv = require("iconv-lite");
iconv.skipDecodeWarning = true; // 这个主要是它会警告 , 大体意思是转化编码失去精度啥的 , 对于我来说不需要, 不想看见控制台报那种一片黄色警告的就加上这句 , 不加也行
child_process.exec("ipconfig", function(err, stdout, stderr) {
  console.log(cmdcode(stdout));
});

function cmdcode(test) {
  let encoding = "cp936";
  return iconv.decode(new Buffer(test, binaryEncoding), encoding);
}
```

## 给项目配置热更新

### 1.安装 nodemon

```js
 npm install nodemon --save-dev
```

### 2.项目根目录下创建 nodemon.json 文件

```json
{
  "restartable": "rs",
  "ignore": [".git", ".svn", "node_modules/**/node_modules"],
  "verbose": true,
  "execMap": {
    "js": "node --harmony"
  },
  "watch": [],
  "env": {
    "NODE_ENV": "development"
  },
  "ext": "ejs js json"
}
```

### 3.配置package.json scripts

```json
  "scripts": {
    "dev":"nodemon ./index",//nodemon 监听文件
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### 4.重启项目

```js
  npm run dev
```

::: tip 备注
 index文件每次保存都会执行热更新
:::

