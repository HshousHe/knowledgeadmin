## IntersectionObserver API 使用教程

::: tip 用途
网页开发时，常常需要了解某个元素是否进入了"视口"（viewport），即用户能不能看到它。
:::

### 简单使用

```js
var io = new IntersectionObserver(callback, option);
// 开始观察
io.observe(document.getElementById("example"));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

查看详情 [IntersectionObserver](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)

## GIT git 流水线技巧

```ts
git stash   （将自己分支修改的内容暂存起来）
git checkout 分支名  (一般切换到主分支)
git pull origin 分支名   (一般拉取最新的主分支代码)
git checkout 自己分支名    （再切换到自己分支）
git merge 主分支名      （将主分支合并到自己分支，有冲突解决冲突）
git stash pop    (将自己改的暂存的内容放出来,有冲突解决冲突)
git add .    (缓存代码)
git commit -m'修改说明'   （修改记录日志）
git push origin 自己分支名  （将自己分支提交到git仓库）
git merge –abort 可以停止合并
git log 查看历史提交

git branch 创建新分支
没有参数时 git branch 会列出你在本地的分支 
我们也可以使用 git checkout -b (branchname) 命令来创建新分支并立即切换到该分支下，从而在该分支中操作。

删除分支命令：
git branch -d (branchname)
```

### git 如何退出 VIM 编辑器

按下esc

接着 q! 回车 :表示不保存退出

或wq! 回车 表示保存并退出

git log 按 q退出
