1. gitsubmodule 内部的 gitignore 不继承上游，需要单独定义，比如 .turbo
2. turbo 的缓存暂时不去处理 dependents，有的陈旧项目结构比较奇怪，改动比较大会破坏未来的合并（diff 太多）
3. 依赖项目扩展优先，其次添加一些不支持的功能，使其支持扩展
4. collect 和 build 不同的地方是，collect 生成的代码跟着代码仓库走
5. 多包仓库中 postinstall 不能用来执行 build 任务，因为不同的包之间对 build 存在依赖，而 pnpm 安装没有顺序
   1. 不过可以执行一些为 build 做的准备
6. dependents 中外部开源项目，clone 下来后，install 后 lint，pre-build-post，pre-test 如果正常流程不能执行就加 - 后缀，暂时忽略，后期有时间再来看，不用太过纠结
7. ~~browser 导出默认要进行压缩，因为打包器不会对 node_modules 进行压缩~~ webpack 打包最好是打成 iife，不要打包成 cjs，因为 webpack 的打包内容有很多 eval（），似乎不太好压缩，tsup 打包的内容依旧很大
   1. tsup 打包 iife 会对 node_modules 包进行处理，除了上面提到的 webpack 打包内容，其他的像 jquery 经过 tsup bundle 后也会出现奇怪的问题（remove 递归），因此建议全局导入，build 文件合并
8. 开源仓库如果存在 prebuild，postbuild 等，需要接入 turbo 系统，需要做的是增加 pre-build-post
9. 如何区分 collect 和 build
10.   collect 出来的代码需要进 git 管理，build 出来的代码不需要
11.   dev... 执行过程中，对依赖包的 copy 目标可能被其 dev:watch 首次删除，linux cp 命令会因此抛错误，所以可以用 cpy 代替
12.   一些 bundle 存在 clean 参数，会自动删除 dist 文件夹之类的，因此不同 bundle 不要共用一个目标目录，比如 sass 使用 dist-css
13.   dev 大量的 watch 十分吃内存，所以拆分为 2 个命令 dev 和 dev:watch
14.   collect 的定义，collect 命令在 build 之后，包内范围中，collect 不影响 build，build 不依赖 collect
      1. 为什么 build 不包括 collect，~~因为 collect 依赖 build，a 包 的 collect 可能从 b 包的 build 产物中进行复制~~ build 也是有依赖的，原因其实是 collect 的输入范围不仅仅是包内，假设 a 包依赖的 b 包更新了，但是 a 没有，本次 turbo 过程中，a 会跳过 build，则如果 collect 被包括在 build 中，那么 collect 就不会去拿 b 包的最新产物，本次 build 将失败
      2. > 大部分命令其实往往逻辑上都可以合并到 build 中，比如 post-every-build，pre-every-build 等等
15.   turbo 中
      1. collect 设置 cache 为 false，因为~~输入不仅限于包范围内，可能来自 node_modules 中的复制（否则是根据包和 git 上次记录的 diff 判断，如果有 inputs 会收到其约束）~~ turbo 自带模块依赖解析
      2. (为什么不设置 test 输入)test 不设置 inputs 因为测试的依赖是复杂的，无法提前描述
16.   ~~dependents 依赖不走 turbo，放弃缓存，原因是：~~ turbo 有依赖，始终会执行到 dependents，只能找时间将开源项目进行整理
      1. ~~修改不频繁~~
      2. ~~inputs，outputs 无法描述~~
17.   gen 是生成数据和 build 类似，但是它生成的数据是进 git 管理的（为什么？因为它生成的数据是源码，只是人工写和机器写的区别）
      1. 输出为 `data*/**` 因此不能和 build 命令合并，否则无法进行 turbo 管理
      2. 它和 build 的顺序应该是 gen 在前面？？
      3. gen 的输入范围在包内，因此可以开启 turbo 缓存，注意这点和 collect 不同
18.   collect 输出应该加入 gitignore 吗？
      1. 它目前就是 cp 了别的包的 build dist，他们加入了，那么 collect 也应该加入
      2. collect 目前都是往 public 中移动，public 应该属于源码
         1. 可以和 turbo 配置将输出进行缓存
      3. sourcemap 配合 dev 命令一起的，而且它应该加入忽略，总之和 collect 关系不大
      4. 结论目前是不加
19. 根目录的 gitignore 不会影响 submodule 中的项目
20. tsup 需要区分 dev 和 prod 环境选择性压缩吗？
    1.  不需要，ci 的思路，开发和生产的代码尽量保证一致性，避免出现意外的问题
    2.  并且因为现在 esbuild 和 swc 已经够快了，压缩不压缩时间都差别不大
21. 在 nextjs 中 spa 页面，似乎要 a 标签处理，否则有些逻辑不执行
22. 外部项目 clone 下来，注意 pnpm-workspace
    1.  删除
    2.  合并

!!!
turbo 破坏缓存的规则

1. 包内，除了忽略文件以外的，文件发生修改则缓存失效
   1. 和 outputs 没有任何关系！！！！！

monorepo 脚本执行流程

https://www.yuque.com/bzone/uk5gz6/aeuunfv3fmu766fa/edit?toc_node_uuid=1wnBGHjtNMlQX3Mz

# 性能指标

首屏加载时间

# 项目 target 设置为最新 es 标准前 2 年

比如今年是 2022，那么标准设置为 2020

# 开源项目 fork 流程

1. fork
2. 如果主分支为 main 需要改为 master（方便统一执行脚本命令）
3. new branch forkFrom
4. 检查格式化工具，如果不是 prettier，加入忽略
5. 检查 lint，build，test 命令，尝试执行
6. 将 build 的输出统一移动到 `dist*/**` or `lib/**` or `build/**` 目录下
   1. 检查 gitignore 文件，是否忽略内容又 build 生成，并且位于上述文件夹中；
   2. 如果 build 的输出，存在于 gitignore，但是没有存在于 turbo 配置，那么会出现可能的情况是：假设 build 输出为 lib，开发期间输出被删除了，但是执行 turbo 时候，以为命中缓存直接跳过真正执行，缓存输出的时候也没有覆盖 lib，因此 lib 就一直为空了
      1. 一些 src 中散落的 构建文件，可能是 build 生成的，也极大可能是 prebuild 或者其他命令生成的，这些如果都移动到 outputs 目录，改动太大了，我们能做的就是开发期间不要删除他们，比如 clean 命令不要包括他们（clean 应该和 build outputs 对应？？）
7. ~~将 test 的输入统一设置为 `__tests__/**`，和 6 都是为了 turbo 缓存方便~~参考 为什么不设置 test 输入

# 删除 git 忽略文件内容

// https://stackoverflow.com/questions/46273032/is-there-a-way-to-remove-all-ignored-files-from-a-local-git-working-tree
git clean -dfX

# 0-1 流程

## 初始化

cd root

pn i

## 打包

接 `初始化`

pn prebuild

pn bundle

## 测试

接 `初始化`

pn pretest

pn test

## 开发

接 `初始化`

可选 1: 开发

---

`pn dev:xxx`

> dev 里面的 watch 在第一次监听时，默认执行

---

可选 2: 生成数据

---

`pn collect:xxx`

---

## 部署

接 `初始化`

pn ci

pn start

## 重置

> 每天结束开发工作后，需要执行

pn clean

接 `初始化`

接 `部署`

# 业务词汇表

-  atomNode
   -  Node 类型（是不是可以进一步，因为 textnode 不包括在内）
   -  不包括插槽等一些辅助节点
-  atom
   -  JQuery<Node> 类型
-  handleEveryAtom
   -  注意需要幂等，可能对同一个 node 多次调用
