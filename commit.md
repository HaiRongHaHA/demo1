---
# 主题列表：juejin, github, smartblue, cyanosis, channing-cyan, fancy, hydrogen, condensed-night-purple, greenwillow, v-green, vue-pro, healer-readable, mk-cute, jzman, geek-black, awesome-green, cyanosis
# 贡献主题：https://github.com/xitu/juejin-markdown-themes
theme: healer-readable
highlight:
---
# 前言
最近心血来潮打算用vue3+ts写一个背诗的h5（为满足自己的背诗习惯）。工欲善其事，必先利其器。先搭个架子啦！虽然是自己一个人写的项目，但是该有的开发规范也是要有的哦！在弄commit规范和自动生成changlog的时候，因为我想要提交表情开头的commit格式而踩尽无数坑！！！故写此文纪念~ 哦！不~ 是归纳总结分享给身边所有想踩坑的人们儿~ 好啦！废话不多说，正式开始我的表演~

# Commit 规范格式说明
首先，规范的commit信息能让人一眼清晰明的知道该提交属于什么类型、修改范围、具体改动，提高团队协作。也方便我们日后找bug，提高团队协作。

第一步，让我们先来了解下git提交信息的格式

## Commit messge 格式

Commit message 包括 Header、Body、Footer 三个部分。

不管是哪一个部分，任何一行都不得超过72个字符（或100个字符）。

- Header 必填 不能换行（换行后不是粗体加黑显示的）

- Body 选填 可以换行

- Footer 选填 可以换行

为了让大家看的更明白，请看下图：


这个提交格式是git的提交信息格式哦，基于这个格式上咱们可以再添砖加瓦。下面让我们先来了解下多数人都在用的angluar的git提交规范加的砖和瓦。

## Angluar commit message 规范

目前大家使用规范较多的是[Angular团队规范](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)，它的格式如下：

```
<type>(<scope>): <subject> // 这一行是Header
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
### Header部分

该规范将 header 分为 type、scope、subject 三部分。

> type

type指本次提交的类型，为必填项，必须为以下之一：

- feat: 一项新功能
- fix: 一个错误修复
- docs: 仅文档更改
- style: 不影响代码含义的更改（空白，格式，缺少分号等）
- refactor: 既不修正错误也不增加功能的代码更改（重构）
- perf: 改进性能的代码更改
- test: 添加缺失或更正现有测试
- chore: 更改构建过程或辅助工具和库，例如文档生成

> scope

scope指本次提交的影响范围，为可选项，可以是指定提交更改位置的任何内容。我一般都写更改部分的模块名或者文件名。

当更改影响的范围不止一个范围时，可以使用星号(*)。当然也可以不填写。

> subject

subject指本次提交的简要描述，它有如下两个规则。

- 不要大写第一个字母
- 末尾没有点（.）

### Body部分 选填 指本次提交的具体描述

### Footer部分 选填 可以包含以下两种情况
- 是否产生了破坏性修改

如果当前代码与上一个版本不兼容，如版本升级、接口参数减少、接口删除、迁移等就是破坏性修改。

如果是破坏性修改则 Footer 部分会以BREAKING CHANGE开头，后面是对变动的描述、以及变动理由和迁移方法。如下：

```
BREAKING CHANGE: 变动的描述\理由\迁移方法
```

- 关闭 Issue
如果当前 commit 针对某个 issue，那么可以在 Footer 部分关闭这个 issue，也可以关闭多个 issue。填写格式如下：

```
Close #ISSUE_ID
Closes #ISSUE_ID, #ISSUE_ID
```
如果你使用jira，也可以填写本次修改所影响的JIRA_ID，但是要开启该功能需要先集成 [jira与gitlab集成](https://docs.gitlab.com/ee/user/project/integrations/jira.html) & [jira与github集成](https://support.atlassian.com/jira-cloud-administration/docs/integrate-with-github/)。填写格式如下：

```
re #JIRA_ID // re是关于的意思
fix #JIRA_ID
```

按照以上的格式提交到git上显示如下：


以上是Angular团队的commit规范，大家也可以根据自己团队的习惯去自定义commit规范。

## 自定义 commit message 规范
这部分我就给大家介绍下，我在这次项目里想要自定义的提交格式，大家可以举一反三。

我想自定义的规范是基于Angluar规范的，只是在它的基础上加个表情gitmoji字段在最打头的位置。格式如下：

```
:gitmoji: <type>(<scope>): <subject> // 这一行是Header
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

其中gitmoji项是必填的，值只能为[gitmoji提供的](https://gitmoji.dev/)表情列表中的表情。

按照我想要的格式提交到git上显示如下：


这里先说一下，Angluar规范里也可以写表情，但是要借助 git-cz 是在subject打头显示的，跟我想要的效果不符合。

到这里，commit规范格式也讲的差不多啦！是时候开干了！！！

# Commit 规范实现

## Angluar版

## 自定义表情版

# Commit 强制校验

## Commit message

## 代码规范校验 & 跑测试

# CHANGELOG 自动生成

> conventional-changelog

> standard-version

# 参考文献

[好朋友lyx的博客](https://lyxdream.github.io)

[Angular官方comit规范说明](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines)

[百度到的素不相识空谷先生的语雀文章](https://www.yuque.com/arvinxx-fe/workflow/e25c3948-dbae-4fc2-94af-661e883a2ef5)

以及各个工具的文档和源码