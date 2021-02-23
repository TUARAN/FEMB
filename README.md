# FEBM

## 缘起

做前端开发至今，收藏过不少网站链接作为浏览器书签。随着时间的推移，收集的链接越来越多，书签的整理难度越来越大，冗余和不规范也越来越多。

回首一看，已收集了上千书签链接。

让人不禁思考，能不能做点什么,来规范在[前端路径](https://roadmap.sh/frontend)学习过程中收集的书签？

1. 可以让自己在路径学习中更加系统化。
2. 遇到问题可以快速定位到一个解决链接（也能快速地分享给同伴）。
3. 一串简单的 URL，就能将你传送到一个新的世界，打开视野。

之前在掘金上发布过一篇文章[作为一个卑微的前端仔，我收集了哪些网站链接？](https://juejin.im/post/5d786039e51d45621320319f)。每隔一段时间，都会新增一两个赞，让我想兑现结语的那段话

>后续仍会持续更新，您的点赞是我坚持下去的动力。或将更改展现形式，以期梳理自我和方便大家。期待交流和建议！

一个人的力量实在太小，且水平有限，只得抛砖引玉。

最终希望实现：前端工程师们可以将各自浏览器书签添加到这个项目中，共同努力，做一个规范、有效的“前端书签”网站。

TODO：
1. 根据前端 roadmap 整理生成二级目录。
2. 每个子目录将有链接单元，暂定要素包括：图表、标题、描述。
3. 提供全局搜索功能。
4. 增加排序功能或热榜列表。
5. 增加个人中心。
6. 更多......

## 项目安装

```
npm install
```

## 项目运行
你可以将你的浏览器书签导出，然后替换 /data/bm.html 这个文件，再运行以下命令即可。
```
npm run febm
```

## 开发日志
### Vuecli3
利用脚手架 Vue cli3 搭建
### vue-router
新增路由
### scss
新增scss
### 实现二级目录
### 页面滑动
```
npm install swiper vue-awesome-swiper --save
```
### bookmark-file-parser（重要）
nodeReadBM.js 将从浏览器导出的书签把内容写入到项目中，并且匹配到对应的二级目录（已实现）
### npm run 
npm run 同时执行多行命令，调整node.js的目录
### 多页面配置
配置 vue.config.js 入口，启用多页面
### icon-svg
新增 icon-svg
### style
样式调整

// 2021.2.23 更新
吻你千万，赠予前端的万个书签整理
# 前言
## 缘起

### 意义？
很喜欢李宗盛《山丘》里的一句歌词：“说不定我一生涓滴意念，侥幸汇成河”。

我们一生中有很多散乱的意念，有的人能侥幸将其汇聚成河，有的人则随风将其遗忘在了时间里。

意义或许就是没有意义，只是觉得自己该这么去做！

# 一、开发日常
## 社区博客
### 技术社区

国内
* [https://juejin.im](https://juejin.im) 掘金：**代码不止  掘金不停**。👍👍👍👍👍
* [https://www.csdn.net](https://www.csdn.net) CSDN：中国最大的程序员社区。👍👍👍👍👍
* [https://www.cnblogs.com](https://www.cnblogs.com) 博客园：老一代博客中心。👍👍👍👍
* [https://segmentfault.com](https://segmentfault.com) 思否：中国的 stackoverflow。👍👍👍👍
* [https://www.v2ex.com](https://www.v2ex.com) V站：V 站上面多大佬，多有各类洁癖。👍👍👍👍
* [https://www.jianshu.com/](https://www.jianshu.com/) 简书：好文章还是有不少。👍👍👍👍
* [https://www.oschina.net](https://www.oschina.net) 开源中国：最大开源社区。👍👍👍👍
* [https://www.infoq.cn](https://www.infoq.cn) InfoQ：知识与创新。👍👍👍👍
* [https://www.51cto.com](https://www.51cto.com) 51CTO：谁又不想成为 CTO 呢？👍👍👍
* [https://toutiao.io](https://toutiao.io) 👍👍👍
* [http://www.jobbole.com](http://www.jobbole.com) 👍👍👍
* [https://gitbook.cn](https://gitbook.cn) 👍👍👍
* [https://www.iteye.com](https://www.iteye.com) 👍👍👍

国外
* [https://stackoverflow.com/](https://stackoverflow.com/) 无需多言，技术问答社区第一，IT 圈的Google。👍👍👍👍👍
* [https://medium.com](https://medium.com) 内容创作平台，本瓜常看。👍👍👍👍👍
* [news.ycombinator.com](news.ycombinator.com) 黑客新闻。👍👍👍👍
* [https://www.quora.com/](https://www.quora.com/) 国外知乎。👍👍👍👍
* [https://www.reddit.com](https://www.reddit.com) 国外天涯。👍👍👍👍
* [https://dev.to](https://dev.to) 国外掘金。👍👍👍👍
* [https://simpleprogrammer.com](https://simpleprogrammer.com) 我也只是一个简单的程序员。👍👍👍👍
* [https://www.sitepoint.com/web/](https://www.sitepoint.com/web/) 前端仔可看。👍👍👍👍
* [https://developers.google.com](https://developers.google.com) 想要权威的官方的，看这里。👍👍👍👍👍
* [https://www.daniweb.com](https://www.daniweb.com) 质量比较高的问答平台。👍👍👍 
* [https://www.dreamincode.net](https://www.dreamincode.net) 国外博客园。👍👍👍

### 个人博客
* [http://www.ruanyifeng.com/](http://www.ruanyifeng.com/blog/) 阮一峰。👍👍👍👍👍
* [https://www.zhangxinxu.com/](https://www.zhangxinxu.com/wordpress/) 张鑫旭。👍👍👍👍
* [https://www.yinwang.org](https://www.yinwang.org) 王垠。👍👍👍👍
* [https://coolshell.cn](coolshell.cn/) 👍👍👍👍
* [http://zh.lucida.me](http://zh.lucida.me) 👍👍👍👍
* [https://blog.codingnow.com](https://blog.codingnow.com) 云风的 BLOG， **思绪来得快去得也快，偶尔会在这里停留** 我很喜欢这句话。👍👍👍👍
* [https://yuguo.us](https://yuguo.us) 余果的博客。 👍👍👍👍

### 其它社区


## 浏览器
### 浏览器原理
* [一文看懂Chrome浏览器运行机制](https://zhuanlan.zhihu.com/p/102149546) 译文加上作者理解，写的又全又棒，**推荐**。👍👍👍👍👍
* [从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://juejin.im/post/6844903553795014663) 👍👍👍👍

## 交互设计
### 交互网站
### 设计平台
* [https://dribbble.com](https://dribbble.com) Discover the world’s top designers & creatives.👍👍👍👍👍
* [https://www.awwwards.com](https://www.awwwards.com) **awwwards**：对网页设计进行评分，专业。👍👍👍👍👍
* [https://www.uisdc.com](https://www.uisdc.com) **优设**：为设计师发声、替好作品说话。👍👍👍👍
* [https://www.zcool.com.cn](https://www.zcool.com.cn) **站酷**：国内没有哪个做设计的不知道吧。👍👍👍👍
* [https://www.ui.cn](https://www.ui.cn) UI 中国，主打图形界面设计。👍👍👍👍
* [https://uispace.net](https://uispace.net) 炫酷设计。👍👍👍
* [https://www.shejidaren.com](https://www.shejidaren.com) **设计达人**：老牌设计网，还附有 JS 代码。👍👍👍👍
### UI 灵感
* [http://collectui.com/](http://collectui.com/) 优秀 UI 范例，每日更新。👍👍👍👍
* [https://bm.s5-style.com](https://bm.s5-style.com) 日系 WEB UI，大气简约。👍👍👍👍👍
* [http://lapa.ninja/](http://lapa.ninja/) 灵感来源。👍👍👍
* [https://muz.li](https://muz.li) chrome 扩展，收录知名网站，每天都有新发现。👍👍👍👍
### 配色
* [https://coolors.co](https://coolors.co) 只是浏览示例配色就很舒服。👍👍👍👍
* [https://webgradients.com](https://webgradients.com) 想要 WEB 渐变色看这里。👍👍👍👍
### 图片素材
* [https://unsplash.com/](https://unsplash.com/) 无著作权的高清图片，免费商用。👍👍👍👍👍
* [https://www.pinterest.com](https://www.pinterest.com) 图像主题收集。👍👍👍👍

# 二、技术语言
## JavaScript
### Webpack
* [webpack原理](https://juejin.im/entry/6844903614469636103) 👍👍👍👍
* [webpack 之 loader 和 plugin 简介](https://juejin.im/post/6844903489458405390) 👍👍👍
* [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/6844903576309858318) 👍👍👍👍
* [Tree Shaking](https://webpack.docschina.org/guides/tree-shaking/) 👍👍👍
* [如何开发webpack plugin](https://juejin.im/post/6844903504872472583) 👍👍👍

## Vue
### 响应式原理

# 三、生活杂录
## 佳文阅读
### 房子
* [广州深圳的房子，都被哪里的人买了？](https://www.huxiu.com/article/374955.html) 👍👍👍👍


# 四、职场二三
## 面试
### 初级前端
### 中级前端
* [50行javaScript代码实现简单版的 call , apply ,bind](https://segmentfault.com/a/1190000020044435) 👍👍👍👍
* [js基础-面试官想知道你有多理解call,apply,bind？](https://juejin.im/post/6844903906279964686) 👍👍👍👍
* [JS节流和防抖函数的理解和实现](https://blog.csdn.net/tinfengyee/article/details/105429619) 👍👍👍
* [小技巧:使用Array.reduce创建Promise回调链](https://juejin.im/post/6844903582450319373) 👍👍👍
* [JavaScript 运行机制详解：再谈Event Loop](https://www.ruanyifeng.com/blog/2014/10/event-loop.html) 👍👍👍👍

* 掘金用户可移步本瓜的收藏集看更多关于[中级前端工程师](https://juejin.im/collection/6859248983764811783)

### 高级前端


## 职业规划
### 规划
* [五级工程师](http://www.dwring.com/other/2018/02/04/career.html) 👍👍👍👍
### 职场阅读
* [小米十周年-雷军演讲](https://www.cnbeta.com/articles/tech/1014473.htm) 👍👍👍👍
* [程序员如何跑得比别人更快？微博研发总监李庆丰访谈](https://mp.weixin.qq.com/s/q6wXmGZeBw-_7FIHsaXPRw) 👍👍👍

# 五、工作空间

# 总结

## 这是一个终结吗？

这会是一个终结吗？不会。我能想象到这些奇妙的书签再汇聚成十万个、百万个。

### 白皮书

### 求赞

## 说明

### 撰文说明
1. 每个网站都是本瓜或多或少亲自体验过的，承诺不存在无脑平行搬运的情况。
2. 👍点赞是本瓜结合体验的主观判断，仅作参考。从三个赞到六个赞可依次理解为：不错、很好、太棒了、我佛了。
3. 我不否认对于链接分类会存在认知偏差，如有意见可反馈讨论。

### 格式说明
1. 平台类型的书签格式是：链接 + 平台名 + 备注 + 评赞。
2. 文章类型的书签格式是：文章名 + 备注 + 评赞。
3. 平台名、备注为非必填项。

### 板块说明



### 参考声明
* [技术博客网站推荐](https://github.com/csarron/ITBlogs)
* [分享 10个我常逛的国外技术社区，真的受益匪浅！](https://cloud.tencent.com/developer/article/1644743)
* [中国十大技术社区你都知道哪些？](https://juejin.im/post/6844903634967199757)
* [十個常用的ui靈感及工具網站](https://medium.com/as-a-product-designer/十個常用的ui靈感及工具網站-4b21d4c0a5ac)
