import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as n,c as i,a as o,b as e,d as c,f as t,e as l}from"./app-e5b1720e.js";const p={},h=o("code",null,"docker-compose.yml",-1),m={href:"http://ttrss.henry.wang/zh/#%E9%80%9A%E8%BF%87-docker-compose-%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},u=l('<p>操作步骤如下：</p><ol><li>打开「控制面板」，选择「终端机和 SNMP」，并开启 SSH 功能。</li><li>使用 putty 或其他 SSH 客户端连接到群晖，并导航到 <code>docker-compose.yml</code> 文件的所在目录，例如：<code>cd /volume3/storage</code>。</li><li>在该目录下，执行 <code>sudo docker-compose up -d</code> 并稍等片刻以完成部署过程。</li><li>为了系统安全，完成操作后不要忘记关闭 SSH 功能。</li></ol><p>注意：root 用户需在命令前添加 <code>sudo</code>，否则可能遇到 <code>Permission denied</code> 的提示。另外，可以使用 <code>sudo -i</code> 来直接获得 root 权限。</p><h2 id="部署问题" tabindex="-1"><a class="header-anchor" href="#部署问题" aria-hidden="true">#</a> 部署问题</h2><h3 id="路径对照" tabindex="-1"><a class="header-anchor" href="#路径对照" aria-hidden="true">#</a> 路径对照</h3><p>虽然你可以轻易地采用我所分享的 compose 设置进行安装，但对于 volumes 部分，你需要重点关注本地存储的路径选择。拿 emby 作例，电视剧路径配置可以为 <code>/volume1/tvshows:/data/tvshows</code>。</p><p>在这里，<code>/data/tvshows</code> 是 Docker 的固定内部路径，不能修改。而 <code>/volume1/tvshows</code> 则是你可以根据实际情况自由定义的本地路径。</p><h3 id="用户与组身份" tabindex="-1"><a class="header-anchor" href="#用户与组身份" aria-hidden="true">#</a> 用户与组身份</h3><p>UID 和 GID 分别代表用户身份和组身份标识。在启动 Docker 容器时，默认情况下，容器进程是以 root 用户（UID 0）运行。然而，从安全的角度出发，非 root 的运行模式会更加安全，因为这可以在容器受到攻击时，降低攻击者获取主机高权限的风险。在常规的设置中，UID 和 GID 通常被设置为 1000。但例如在群晖系统中，第一个用户的 UID 实际为 1026，而 GID 则为 100。</p><p>值得注意的是，当外部系统的用户标识与 NAS 上的 UID/GID 存在不匹配的情况时，可能会出现权限不一致的问题，进而影响到文件的正常访问权限。</p><h3 id="文件夹访问权限" tabindex="-1"><a class="header-anchor" href="#文件夹访问权限" aria-hidden="true">#</a> 文件夹访问权限</h3><p>对于如 Emby 这类依赖外部存储资源的 Docker 服务，文件夹的访问权限是不可或缺的。一个直接的解决方案是将文件夹的权限设置为“所有人”（Everyone）。然而，这样的做法在安全性上存在隐患。一旦有人获得 Docker 的操作权限，相关文件夹很可能会被擅自更改，这只能作为一个短期的权宜之计。</p><p>下图以 Emby 服务中的电视节目存储路径 <code>/volume1/tvshows</code> 为实例，为了确保正常运行，我们可以临时为该文件夹授权“所有人”权限，但建议后续寻求更安全的权限管理策略。</p><figure><img src="https://img.newzone.top/2023-09-16-08-42-22.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14),_={class:"catalog-display-container"};function f(k,D){const r=a("ExternalLinkIcon"),d=a("AutoCatalog");return n(),i("div",null,[o("p",null,[e("网络附加存储（NAS）日益重要，它提供了一个平台，可以部署各种 Docker 服务，进而完成个人的自动化工作流程。而使用 "),h,e(" 文件进行 Docker 部署无疑是其中最为便捷的方法。具体如何使用 docker-compose，可以参考 "),o("a",m,[e("TTRSS docker-compose 的教程"),c(r)]),e("。")]),u,t(" markdownlint-disable MD033 "),o("div",_,[c(d,{base:"/services/dockers-on-nas/"})]),t(" markdownlint-enable MD033 ")])}const b=s(p,[["render",f],["__file","index.html.vue"]]);export{b as default};
