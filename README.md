# myweb
-------
### out package framework

### TODO

- login/register
- front-end framework
- blog
- mongo/mongoose + redis
==========================


# portal node site
===========================

#### 模块定义

```
console (控制台)
  > developer (dev)
  > resource (build)

src (官网)
 > components (通用组件)
 > page (页面)
```
#### Branch
- feature,bugfix等为开发分支；
- develop 为提测分支；
- release 为发版分支；
- master 为生产稳定分支；

1. 通过JIRA任务创建feature或bugfix等分支。
2. 提测时将feature或bugfix分支merge到develop。
3. 测试确认后，merge develop到release(如果不同步发版 只合并相应的feature,bugfix等分支到release)。 
4. 线上验收完成后，release分支合并到master。

#### Development
```
sudo nginx
$ npm run dev // start for dev.
$ npm run test // start app for test. (官网本地调试同时开启dev和test)
```

#### Build
```shell
npm run prod
```

#### Release
1. 静态资源bops
2. Jekins

#### Collaborate
1. Rename remote
```
$ git remote rename origin upstream
```
3. Add remote 
```
$ git remote add origin you-are-forked-repo-git-uri
```
4. Update local repo
```
$ git fetch upstream
$ git rebase upstream/master
```

#### Installation
1. [VS Code](https://code.visualstudio.com/)
    - [Keyboard shortcuts for macOS](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
    - [Keyboard shortcuts for windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
2. VS Code Extensions
    - [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
    - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    - [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify0)
    - [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons)
    - [stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint)
3. clone first
```shell
$ git clone http://geek.glodon.com/scm/bimface/portal-site.git
```
4. install dependecies
```shell
$ npm install 
```