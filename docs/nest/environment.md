## 环境安装

```js
 // 使用CLI安装
 npm i -g @nestjs/cli
 nest new project-name
 // 使用git安装
 git clone https://github.com/nestjs/typescript-starter.git project
 cd project
 npm install
 npm run start
 // 手动创建
 npm i --save @nestjs/core @nestjs/common rxjs reflect-metadata
```

## 相关指令

#### 创建 Module

```js
 // 创建一个 User 模块
 nest g module user server
```

脚手架工具会自动在 src/server/user 文件夹下创建一个 user.module.ts，这是 Nest 的模块文件，Nest 用它来组织整个应用程序的结构。

```js
// user.module.ts
import { Module } from "@nestjs/common";
@Module({})
export class UserModule {}
```

同时还会在根模块 app.module.ts 中引入 UserModule 这个模块

#### 创建 Controller

```js
 // 在 Nest 中，controller 就类似前端的「路由」，负责处理「客户端传入的请求」和「服务端返回的响应」。
 nest g controller user server
```

举个例子，我们如果要通过 http://localhost:3000/user/users 获取所有的用户信息，那么我们可以在 UserController 中创建一个 GET 方法，路径为 users 的路由，这个路由负责返回所有的用户信息。

```js
 // user.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get('users')
  findAll(): string {
    return "All User's Info"; // [All User's Info] 暂时代替所有用户的信息
  }
}
```

### 创建 Provider

```js
 // 在 Nest 中，controller 就类似前端的「路由」，负责处理「客户端传入的请求」和「服务端返回的响应」。
 nest g service user server
```
provider 「服务的提供者」。


nest相关资料 [点击跳转](https://blog.csdn.net/xgangzai/article/details/109252492)