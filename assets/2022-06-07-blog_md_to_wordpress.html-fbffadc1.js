import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as s,c as a,a as e,b as o,d as n,e as i}from"./app-e5b1720e.js";const l={},c=e("h2",{id:"博客探索",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#博客探索","aria-hidden":"true"},"#"),o(" 博客探索")],-1),h=e("p",null,"2005 年，我开始用博客记录感想，发布在 MSN space 平台和短命的 Google Sidewiki 上。六年后，MSN space 关闭，博客被转移到 WordPress 托管，我改用 Blogger，没多久就暂停了博客。​",-1),p={href:"https://jekyllrb.com/",target:"_blank",rel:"noopener noreferrer"},u=i('<p>到了 2021 年，<strong>随着文章和发布渠道的增多，文章的修改和管理变得愈加困难</strong>。慢慢地，我开始习惯本地 Markdown 只做初稿排版，更新则只在外部平台上进行。​</p><p>我的文章都是工具教程类，要随着工具的更新而修改，有时甚至要对几年前发布的文章进行更新。因此，针对少量平台更新的策略，带来了文章版本混乱，让博客偏离了知识记录的初衷。为了保证文章版本统一，我把博客从 Jekyll 迁移到 WordPress，准备以 WordPress 作为统一版。</p><figure><img src="https://img.newzone.top/20210128124408.png?imageMogr2/thumbnail/400x" alt="Jekyll 博客" tabindex="0" loading="lazy"><figcaption>Jekyll 博客</figcaption></figure><p>然而，WordPress 方案很快就被放弃了。原因除了 WordPress 糟糕的编辑体验，更重要的是，我遇到了 Notion。其界面美观，编辑方便，支持对外展示，能导出为 Markdown、HTML 文件。​</p><p>可是，没什么平台是完美的。Notion 不支持同步本地 markdown 内容，图床不能在站外使用，国内访问速度成谜。这令 <strong>Notion 只适合个人分享，而非博客网站</strong>。我用 Notion，纯属垂涎美色。​</p><p>2022 年，由于疫情被封控在家两个月。时间多了，我继续折腾博客，希望找到一个界面美观，能自动发布且具备本地管理功能的博客方案。</p><h2 id="博客方案" tabindex="-1"><a class="header-anchor" href="#博客方案" aria-hidden="true">#</a> 博客方案</h2><p>最初，我幻想着修改一篇文章同步到多个平台，但找了许久也没有合适的。网上所谓的一键分发软件，实际上是通过网页操作来完成发布，并不能自动修改更新。​</p><p>剔除掉这类不现实的想法后，新的博客方案以 Markdown 版本为主，自动同步 WordPress，最后手动同步主要分发平台。​</p><p><strong>最终方案</strong>如下：​</p><ol><li><p>初稿：Markdown 本地编辑文章，使用七牛云自建图床。​</p></li><li><p>发布：同步本地 Markdown 文本，自动发布，保持主要平台内容为最新。​</p></li><li><p>管理：本地更新修改 Markdown 文件，docsify 页面整合文本内容，博客后台管理文章版本。​</p></li><li><p>订阅：用户能通过 RSS、邮件或微信来订阅博客更新。</p></li></ol><h2 id="wp-发布工具" tabindex="-1"><a class="header-anchor" href="#wp-发布工具" aria-hidden="true">#</a> WP 发布工具</h2><h3 id="工具说明" tabindex="-1"><a class="header-anchor" href="#工具说明" aria-hidden="true">#</a> 工具说明</h3>',13),_={href:"https://github.com/zhaoolee/WordPressXMLRPCTools",target:"_blank",rel:"noopener noreferrer"},g={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,"基于 WordPressXMLRPCTools，我做了三点修改：​",-1),f=i("<li><p>发布设置：修改 <code>main.py</code> 文件。</p><ul><li>修复无法覆盖更新文章的 bug。</li><li>调整项目页的时间格式。</li><li>页首添加文章编辑时间，默认为格林尼治标准时间，比北京晚 8 小时。</li><li>将文章页尾部的本文永久更新地址从标题格式调整为常规字母。</li></ul></li><li><p>草稿箱：<code>_post</code> 路径内新建 <code>TEMP</code> 文件夹，用于存放文章草稿。WordPress 推送程序会忽略 <code>_post</code> 子文件夹的内容，换言之，<code>TEMP</code> 文件夹不会发布到 WordPress 网站。</p></li>",2),m=e("code",null,".nojekyll",-1),k=e("code",null,"index.html",-1),w=e("code",null,"_sidebar.md",-1),P={href:"https://rockbenben.github.io/Blog_WP/",target:"_blank",rel:"noopener noreferrer"},y=e("figure",null,[e("img",{src:"https://img.newzone.top/2022-05-26-20-12-56.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"docsify 页面效果")],-1),x=e("h3",{id:"使用流程",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#使用流程","aria-hidden":"true"},"#"),o(" 使用流程")],-1),W={href:"https://github.com/rockbenben/Blog_WP",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,[o("回到你新建的 repo，删除 _post 文件夹中的所有文件，参照主目录下 "),e("code",null,"example_article.md"),o(" 的格式编辑文章。注意：md 文件名不能包含大写字母。")],-1),E={href:"https://github.com/zhaoolee/WordPressXMLRPCTools#%E7%94%A8github-actions%E5%86%99markdown%E6%96%87%E7%AB%A0%E8%87%AA%E5%8A%A8%E6%9B%B4%E6%96%B0%E5%88%B0wordpress",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[o("修改主目录下的 "),e("code",null,"index.html"),o(" 和 "),e("code",null,"_sidebar.md"),o(" 文件，调整 docsify 网页设置。 "),e("ul",null,[e("li",null,[e("code",null,"index.html"),o(" 修改 docsify 网页标题、描述和关键词。")]),e("li",null,[e("code",null,"_sidebar.md"),o(" 修改 docsify 网页侧边栏，加入博客文章的标题和位置。")])])],-1),z=i('<h2 id="wp-发布常见问题" tabindex="-1"><a class="header-anchor" href="#wp-发布常见问题" aria-hidden="true">#</a> WP 发布常见问题</h2><h3 id="文章发布不成功" tabindex="-1"><a class="header-anchor" href="#文章发布不成功" aria-hidden="true">#</a> 文章发布不成功</h3><p><code>_post</code> 文件夹添加了文档，但同步后，<code>README.md</code> 和 WordPress 并没有添加文章。</p><p>检查以下两点：</p><ul><li><p>文章后缀必须为「.md」，不支持「.markdown」或其他后缀格式。</p></li><li><p>进入 repo 页面中的 <code>Actions</code>，检查最近一次的 update 是否正确。根据报错代码，寻找错误原因。</p><figure><img src="https://img.newzone.top/2022-05-26-20-36-56.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li></ul><h3 id="error-git-denied-to-github-actions-bot" tabindex="-1"><a class="header-anchor" href="#error-git-denied-to-github-actions-bot" aria-hidden="true">#</a> Error: git denied to github-actions[bot]</h3><p>遇到 GitHub Actions 报错：<code>git denied to github-actions[bot]</code> 或 <code>Process completed with exit code 128</code>。</p><p>点击该 repository 的「Setting」&gt;「Code and automation」&gt;「Actions」&gt;「General」，然后在 Workflow permissions 中开启「Read and write permissions」。</p><h3 id="error-process-completed-with-exit-code-1" tabindex="-1"><a class="header-anchor" href="#error-process-completed-with-exit-code-1" aria-hidden="true">#</a> Error: Process completed with exit code 1</h3><p>遇到 GitHub Actions 报错：<code>Error: Process completed with exit code 1</code>，可能是文章内容触发了服务器的安全规则，拒绝了文章的同步。</p><p>如果出现该项报错，暂时关闭服务器防火墙，可解决问题。同步完成后，记得重新开启防火墙。</p><h3 id="无法覆盖更新原文章-​" tabindex="-1"><a class="header-anchor" href="#无法覆盖更新原文章-​" aria-hidden="true">#</a> 无法覆盖更新原文章 ​</h3><p>修改旧文章并同步后，WordPress 站的文章没同步修改，而是新增了一篇相同的文章。</p><ul><li>检查 md 文件名有没有出现大写字母，有没有更改文件名。</li><li>进入 WordPress 后台，点击「设置」&gt;「固定链接」，选中自定义结构，并将文章链接设为 <code>/p/%postname%</code>。</li></ul><p>如果修改版在检查后依然出现此问题，建议手动将新文章内容覆盖旧文章，然后删除新文章。​ 这个 bug 可以当作是强提醒。当 WordPress 新增了旧文章，你就被提醒要在其他平台修改该文章，让文章版本保持统一。</p><h3 id="wordpress-发布时间与实际不符-​" tabindex="-1"><a class="header-anchor" href="#wordpress-发布时间与实际不符-​" aria-hidden="true">#</a> WordPress 发布时间与实际不符 ​</h3><p>同步文章后，WordPress 显示的文章发布时间是 GitHub push 时间，而非文章真实的发布时间。​</p><p>如果你将旧文章转移到 WordPress，文章的发布时间需在 WordPress 后台手动修改，无法在 Markdown 文件中指定 WordPress 显示的发布时间。</p><h3 id="有序列表编号有误" tabindex="-1"><a class="header-anchor" href="#有序列表编号有误" aria-hidden="true">#</a> 有序列表编号有误</h3><p>文章中设定的编号是 <code>3</code>，但同步到 WordPress 后，变成了 <code>1</code>。</p><p>有序列表中穿插了图片、段落，编号就会重置到 <code>1</code>。去除图片与旧序列的空行，就能识别正确编号。</p><h3 id="无序列表只有一个层级" tabindex="-1"><a class="header-anchor" href="#无序列表只有一个层级" aria-hidden="true">#</a> 无序列表只有一个层级</h3><p>Markdown 转 WordPRess 文章时，默认规则无法识别缩进级别。多层级列表只会显示一个层级，其他层级的列表都被提到第一层级。</p><h2 id="本地管理-markdown-文章" tabindex="-1"><a class="header-anchor" href="#本地管理-markdown-文章" aria-hidden="true">#</a> 本地管理 Markdown 文章</h2><p>如果用 Windows 资源管理器管理 Markdown 文章，会存在 3 个问题：</p><ul><li>资源管理器的视觉效果非常难看。</li><li>Markdown 文件名称不能展示关键信息，较难定位文档。文章越多，管理越困难。</li><li>无法对文章内容进行本地检索，只能通过文件名称猜测内容。</li></ul><figure><img src="https://img.newzone.top/2022-05-30-19-00-15.png" alt="" tabindex="0" loading="lazy"><figcaption>难以管理的本地文档</figcaption></figure><p>为解决这些问题，我借助飞书表格、RunAny 和 docsify 重构本地文章管理方案。</p><h3 id="飞书文档管理" tabindex="-1"><a class="header-anchor" href="#飞书文档管理" aria-hidden="true">#</a> 飞书文档管理</h3><p>飞书文档功能与 Notion、Airtable 类似，可将文字、链接、图片聚合在同一页面，操作便捷。</p><p>打开飞书多维表格，填入本地 Markdown 文章的标题、本地位置、链接、标签和封面，即可聚合本地文章的关键信息。将表格视图切换为「画册视图」，文档管理界面更达到 90% 的 Notion 视觉效果。</p><figure><img src="https://img.newzone.top/2022-05-06-12-43-36.png" alt="" tabindex="0" loading="lazy"><figcaption>飞书表格视图</figcaption></figure><figure><img src="https://img.newzone.top/2022-05-06-12-28-41.png" alt="" tabindex="0" loading="lazy"><figcaption>飞书画册视图</figcaption></figure><h3 id="runany-文档直达-​" tabindex="-1"><a class="header-anchor" href="#runany-文档直达-​" aria-hidden="true">#</a> RunAny 文档直达 ​</h3><p>在线文档中，无法像打开超链接一样直接打开本地文件。若要节省中间打开时间，可以使用 RunAny。​</p>',35),v={href:"https://hui-zz.gitee.io/runany/#/",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"Code.exe",-1),R=e("code",null,"notepad++.exe",-1),N=i(`<div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token comment">;将 Runany 主目录下的 RunAny.ini 文件内的「编辑」模块替换为下方命令</span>
-编辑(&amp;Edit)
 --编程|cmd bat md ahk html js css json yml yaml py
 vscode|Code.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docsify-全文检索" tabindex="-1"><a class="header-anchor" href="#docsify-全文检索" aria-hidden="true">#</a> docsify 全文检索</h3>`,2),G={href:"https://docsify.js.org/#/",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/rockbenben/Blog_WP",target:"_blank",rel:"noopener noreferrer"},C=e("code",null,"docsify serve",-1),T=e("code",null,"http://localhost:3000/",-1),L=e("figure",null,[e("img",{src:"https://img.newzone.top/2022-05-30-20-03-19.png?imageMogr2/format/webp",alt:"docsify 本地运行",tabindex:"0",loading:"lazy"}),e("figcaption",null,"docsify 本地运行")],-1),J={href:"https://rockbenben.github.io/Blog_WP/",target:"_blank",rel:"noopener noreferrer"},j=e("h2",{id:"订阅管理-wordpress",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#订阅管理-wordpress","aria-hidden":"true"},"#"),o(" 订阅管理：WordPress")],-1),H=e("p",null,"40% 的网站基于 WordPress 架构，因此 WordPress 有超多的主题和插件，可以实现你想要的功能，比如 RSS、Newsletter。",-1),X={href:"https://substack.com/",target:"_blank",rel:"noopener noreferrer"},V={href:"https://zhubai.love/",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"后续",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#后续","aria-hidden":"true"},"#"),o(" 后续")],-1),I=e("p",null,"比起原来的 Jekyll，新方案的配置要复杂些，但使用并不难，推荐稿件多的人采用。",-1),U=e("p",null,"折腾新方案的过程中，我发现了篇 2021 年初写的文章。当时，稿子写到 90%，我就去忙其他事，忘了这篇文章。等到这次被发现，它已经在草稿箱待了一年半。",-1),O=e("p",null,"用了新方案，稿件管理会变得很简单，稿件遗忘、找不到的情况也会减少许多。最近我出稿速度大增，也都跟这有关，都是从草稿箱捡回来的半成品。",-1),q=e("p",null,"写完这篇稿子，疫情封控也正好结束，终于可以出门了，希望永远别再给「免费假期」了。",-1);function F(K,Q){const r=d("ExternalLinkIcon");return s(),a("div",null,[c,h,e("p",null,[o("2018 年，我偶然接触到 "),e("a",p,[o("Jekyll"),n(r)]),o("，被其简洁的界面和便捷性打动，重新恢复了博客记录。博客方向从感想记录转变到知识整理输出。Jekyll 方案需要首先在本地用 Markdown 编辑排版，然后同步到 github 发布，最后以 Markdown 格式手动分发到各个渠道。当文章较少时，这套方案的体验感特别好。​")]),u,e("p",null,[e("a",_,[o("WordPressXMLRPCTools"),n(r)]),o(" 能用 Markdown 生成博客，推送更新到 Github 后，通过 Github Actions 自动将文章更新到 WordPress，并将 WordPress 网站的文章索引更新到 Github 仓库的 "),e("a",g,[o("README.md"),n(r)]),o("，供搜索引擎收录，方便 Windows 用户使用。iOS 用户有更成熟的发布工具，无需代码即可到同步 WordPress，比如 @ern 推荐的 MWeb/Ulysses。")]),b,e("ul",null,[f,e("li",null,[e("p",null,[o("文章聚合页：主路径添加 "),m,o("、"),k,o(" 和 "),w,o(" 三个文件，引入了文档生成工具 docsify，使得博客文章能聚合在一个页面，方便快速定位和位置管理。示例："),e("a",P,[o("https://rockbenben.github.io/Blog_WP/"),n(r)]),o("。")]),y])]),x,e("ol",null,[e("li",null,[o("进入 "),e("a",W,[o("项目页面"),n(r)]),o("，点击「Use this template」，复制模板文件。")]),M,e("li",null,[o("按 "),e("a",E,[o("WordPressXMLRPCTools 安装步骤"),n(r)]),o(" 执行，如遇报错，查看下方使用问题。注意检查 WordPress 登录授权和 Github Actions secret，这两步极易遗漏。")]),A]),z,e("p",null,[e("a",v,[o("RunAny"),n(r)]),o(" 是基于 AutoHotkey 的一键启动软件。按下方配置后，点击飞书表格中的「本地位置」，即可使用默认编辑器打开 md 文件。如果你的默认编辑器是 notepad++，则将下方命令中的 "),B,o(" 替换为 "),R,o("。")]),N,e("p",null,[o("飞书表格可以搜索关键元素，但不能对检索全文。这时，我们需要使用 "),e("a",G,[o("docsify"),n(r)]),o("，一款能将 markdown 文档自动生成网站的工具，相当于轻量级的 GitBook。​")]),e("p",null,[o("docsify 使用简单，如果使用了前文我修改过的"),e("a",S,[o("发布工具"),n(r)]),o("，则无需配置。在发布工具文件夹内的空白区域，右键打开终端，执行命令"),C,o("即可生成全文检索网页，默认管理链接为 "),T,o("。")]),L,e("p",null,[o("如果你设置了 Github Pages，项目会默认启动在线 docsify 网页，页面链接取决于 Github 的设置。比如我的用户名是 rockbenben，项目名是 Blog_WP，所以 docsify 管理页面就是 "),e("a",J,[o("https://rockbenben.github.io/Blog_WP/"),n(r)]),o("。")]),j,H,e("p",null,[o("如果你拥有较多的粉丝，可以使用 "),e("a",X,[o("Substack"),n(r)]),o(" 和"),e("a",V,[o("竹白"),n(r)]),o("来分发博客。这两者都支持 Newsletter 付费订阅。只针对国内用户的话，竹白可支持微信订阅。")]),D,I,U,O,q])}const $=t(l,[["render",F],["__file","2022-06-07-blog_md_to_wordpress.html.vue"]]);export{$ as default};
