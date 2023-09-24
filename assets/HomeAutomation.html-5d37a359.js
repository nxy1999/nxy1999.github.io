import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as i,a as e,b as o,d as s,e as l}from"./app-e5b1720e.js";const h={},c=e("p",null,"智能家居是家庭自动化最基础的一部分。之前一直偷懒直接用米家，但当我想把传感器与电脑联接起时，就开始了研究 Home Assistant 和 Node-RED。",-1),d=e("h2",{id:"home-assistant",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#home-assistant","aria-hidden":"true"},"#"),o(" Home Assistant")],-1),_=e("p",null,"Home Assistant 是开源的家庭自动化平台，可自定义集中管理各品牌的智能家居设备。",-1),f=e("p",null,"Home Assistant 原生支持的米家设备较少，需要使用 hacs 下的集成 Xiaomi Miot Auto。默认 Docker 容器不带 hacs，需要手动部署。",-1),u={href:"https://github.com/hacs/integration/releases/",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,"重启 Home Assistant 容器后，在集成中搜索 hacs，安装时按要求提供 github 账户授权。",-1),p=e("li",null,[o("选择「HACS」>「集成」>「浏览并下载存储库」，下载 Xiaomi Miot Auto 并重启 Home Assistant 容器。"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})])],-1),b=e("p",null,"Home Assistant 虽然一直被吹得很厉害，但即时性的传感器可能不能及时触发，使用时需要注意这点。",-1),k={href:"https://home.miot-spec.com/s/lumi.gateway.mgl03",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/AlexxIT/XiaomiGateway3",target:"_blank",rel:"noopener noreferrer"},A=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote2"},"[2]"),e("a",{class:"footnote-anchor",id:"footnote-ref2"})],-1),H=e("h2",{id:"node-red",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-red","aria-hidden":"true"},"#"),o(" Node-RED")],-1),x={href:"https://github.com/node-red/node-red",target:"_blank",rel:"noopener noreferrer"},w={href:"https://bbs.iobroker.cn/t/topic/1165",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,[o("部署 Node-RED 时，Node-RED 对存储文件夹的读写权限要求较高，Docker 部署的话需修改 data 的文件夹权限，为避免麻烦，我给了最高权限 "),e("code",null,"chmod 777 /volume1/docker/nodered/data"),o("。")],-1),N={href:"https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/#prerequisites",target:"_blank",rel:"noopener noreferrer"},E=e("ul",null,[e("li",null,"选择「设置」>「节点管理」>「控制板」>「安装」，点击右侧刷新按钮，加载节点目录，第一次加载要比较长时间，不用关闭网页。"),e("li",null,"搜索并安装「node-red-contrib-home-assistant-websocket」。")],-1),R=e("li",null,"选择「Home Assistant」>「HACS」>「集成」>「浏览并下载存储库」，下载 Node-RED Companion。",-1),T=e("li",null,"选择「Home Assistant」>「配置」>「设备与服务」>「集成」，添加集成 Node-RED Companion，然后重启 Home Assistant 容器。",-1),v={href:"https://zachowj.github.io/node-red-contrib-home-assistant-websocket/guide/#configuration",target:"_blank",rel:"noopener noreferrer"},z=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote3"},"[3]"),e("a",{class:"footnote-anchor",id:"footnote-ref3"})],-1),C=l('<h3 id="常用节点" tabindex="-1"><a class="header-anchor" href="#常用节点" aria-hidden="true">#</a> 常用节点</h3><ul><li>inject: 定时启动，周期性触发执行。</li><li>call service：改变智能设备状态，比如开灯。 <ul><li>Domain：触发方式</li><li>Service：触发命令</li><li>Device：设备与服务</li><li>Entity：设备执行模块</li></ul></li></ul><h2 id="自动化场景" tabindex="-1"><a class="header-anchor" href="#自动化场景" aria-hidden="true">#</a> 自动化场景</h2><ul><li>记录主卧关灯时间，默认其为睡眠时间，但实际关掉是关电源，不会在智能后端记录。或者用明暗度测试记录，每天最后暗的时候，记录为睡眠时间。</li><li>书房检测到没人时，对电脑发送暂停视频的快捷键。这步卡在硬件，需要有个硬件能被 Node-RED 识别并给电脑发送按键。</li></ul><h2 id="智能硬件" tabindex="-1"><a class="header-anchor" href="#智能硬件" aria-hidden="true">#</a> 智能硬件</h2><h3 id="zigbee2mqtt" tabindex="-1"><a class="header-anchor" href="#zigbee2mqtt" aria-hidden="true">#</a> Zigbee2MQTT</h3>',6),M={href:"https://www.youtube.com/watch?v=R_CikjR7tiw",target:"_blank",rel:"noopener noreferrer"},j=e("p",null,"不过，我的设备都是米家系，暂时用不到开源网关，等买了其他品牌的设备，再考虑 Zigbee2MQTT。",-1),q=e("h3",{id:"智趣盒子",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#智趣盒子","aria-hidden":"true"},"#"),o(" 智趣盒子")],-1),y={href:"https://item.taobao.com/item.htm?id=635639747170",target:"_blank",rel:"noopener noreferrer"},S=e("blockquote",null,[e("p",null,"盒子基于 arm 的 linux 的 debian 系统上运行 docker，在 docker 的基础上构建了 supervisor 版本，跟 homeassistant 开发官方的 hassos 的最大差异就是打开了 root 的权限，可以在底层进行操作。这些比较适合国内的使用环境（网络改善，装第三方工具等）.")],-1),I=e("p",null,"不过与 NAS 相比，智趣这类硬件盒子同样是 Docker 容器，除了能直连网关和想象中的简便攻略，并没什么其他优势。",-1),Q=e("h3",{id:"其他硬件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#其他硬件","aria-hidden":"true"},"#"),o(" 其他硬件")],-1),V={href:"https://item.taobao.com/item.htm?id=631865647089",target:"_blank",rel:"noopener noreferrer"},X={href:"https://item.taobao.com/item.htm?id=675107124036",target:"_blank",rel:"noopener noreferrer"},B=e("hr",{class:"footnotes-sep"},null,-1),Z={class:"footnotes"},G={class:"footnotes-list"},L={id:"footnote1",class:"footnote-item"},P={href:"https://baijiahao.baidu.com/s?id=1721932088542289661",target:"_blank",rel:"noopener noreferrer"},F=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),J={id:"footnote2",class:"footnote-item"},K={href:"https://github.com/al-one/hass-xiaomi-miot/issues/100#issuecomment-909031222",target:"_blank",rel:"noopener noreferrer"},O=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),U={id:"footnote3",class:"footnote-item"},W={href:"https://zhuanlan.zhihu.com/p/456741817",target:"_blank",rel:"noopener noreferrer"},Y=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function $(ee,oe){const t=a("ExternalLinkIcon");return r(),i("div",null,[c,d,_,f,e("ol",null,[e("li",null,[o("下载 "),e("a",u,[o("hacs"),s(t)]),o("，将其解压到 Home Assistant 配置的 config\\custom_components\\hacs 文件夹下。")]),m,p]),b,e("blockquote",null,[e("p",null,[o("对于人体传感器、门磁、无线开关类设备，它们的状态通常为瞬时状态 (即：事件)，部分型号支持获取最后一次事件触发的时间，且默认轮询时长为 15 秒，对于无法获取最后触发事件的设备，即使修改轮询时间到 1 秒，也可能无法获取正确的状态。因此此类设备通过本插件集成后不太推荐用于触发实时自动化，仅适合作为如几分钟无人移动关灯这类自动化的条件。如果需要实时更新状态，推荐使用"),e("a",k,[o("多模网关"),s(t)]),o("配合 "),e("a",g,[o("XiaomiGateway3"),s(t)]),o(" 集成。"),A])]),H,e("p",null,[e("a",x,[o("Node-RED"),s(t)]),o(" 是本地版的 IFTTT，能与 Home Assistant 打通，实现本地化的互联。新手推荐 "),e("a",w,[o("node-red 的入门教程集合"),s(t)]),o("。")]),e("ol",null,[D,e("li",null,[o("Node-RED 上安装 "),e("a",N,[o("node-red-contrib-home-assistant-websocket"),s(t)]),o("。 "),E]),R,T,e("li",null,[o("进入 nodered 页面，配置 "),e("a",v,[o("home assistant websocket"),s(t)]),o("，点击右上角的部署。"),z])]),C,e("p",null,[e("a",M,[o("Zigbee2MQTT"),s(t)]),o(" 是开源的智能网关，支持大部分的智能设备。其辐射范围更大，能同时联接 200 个设备，它的插网线版更稳定不易掉线。")]),j,q,e("p",null,[e("a",y,[o("智趣盒子"),s(t)]),o("集成了 Home Assistant 和 Node-RED 的 Docker，Home Assistant 能部署 Addons、supervisor，能直接插开源网关。")]),S,I,Q,e("ul",null,[e("li",null,[e("a",V,[o("远程键盘控制器"),s(t)]),o("：基于易微联的第三方产品，手机通过 APP 远程控制电脑按键，不过只能按一个按键或者连续 6 个的自定义键值。不确定是否支持 HA。")]),e("li",null,[e("a",X,[o("MQTT 转 usb 虚拟键盘鼠标注入器"),s(t)]),o("：通过 wifi 来控制，店家不清楚 HA。")])]),B,e("section",Z,[e("ol",G,[e("li",L,[e("p",null,[e("a",P,[o("从零开始，基于群晖轻松玩转开源 homeassistant 智能家居前期搭建"),s(t)]),o(),F])]),e("li",J,[e("p",null,[e("a",K,[o("为什么设备状态会有延迟？如何减小延迟？"),s(t)]),o(),O])]),e("li",U,[e("p",null,[e("a",W,[o("树莓派 HomeAssistant 系列（四）NodeRed 安装配置"),s(t)]),o(),Y])])])])])}const ne=n(h,[["render",$],["__file","HomeAutomation.html.vue"]]);export{ne as default};
