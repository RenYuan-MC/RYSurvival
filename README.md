# 任渊生存服务端
Minecraft生存服务端整合包,适用于1.19.3/1.19.4版本  
<br>
klpbbs 链接: https://klpbbs.com/thread-4196-1-1.html  
mcbbs 链接: https://www.mcbbs.net/thread-1322237-1-1.html  
minebbs 链接: https://www.minebbs.net/resources/4131/  
其他冷门论坛的服务端宣传贴请 [点击这查看](https://github.com/RenYuan-MC/RYSurvival/blob/main/bbs.md)  
<br>
**最新版本:**  
[V1.8.2 分支](https://github.com/RenYuan-MC/RYSurvival/tree/ver/1.8.2) (1.20.1)  
**过时版本:**  
[V1.8 分支](https://github.com/RenYuan-MC/RYSurvival/tree/ver/1.8) (1.19.4)  
[V1.7 分支](https://github.com/RenYuan-MC/RYSurvival/tree/ver/1.7) (1.19.3)  
[V1.6 分支](https://github.com/RenYuan-MC/RYSurvival/tree/legacy/1.6) (1.19.2)  
[V1.5 分支](https://github.com/RenYuan-MC/RYSurvival/tree/legacy/1.5) (1.19.2)  
[V1.4 分支](https://github.com/RenYuan-MC/RYSurvival/tree/legacy/1.4) (1.18.2)  
[V1.3 分支](https://github.com/RenYuan-MC/RYSurvival/tree/legacy/1.3) (1.17.1)  
**远古版本:**  
[V1.2 分支](https://github.com/RenYuan-MC/RYSurvival/tree/legacy/1.2) (1.16.5)  
<br>
QQ 交流群：[1029946156](https://jq.qq.com/?_wv=1027&k=DN77Hlfh)  
# Folia测试版本
[Folia 分支](https://github.com/RenYuan-MC/RYSurvival/tree/test/folia) (1.19.4)  
* Folia是Paper的新分支,其为服务器添加了"区域化多线程"(regionised multithreading)   
* Folia可以调用CPU的全部核心,但是插件兼容性为0,需要单独兼容  
* 这是一个实验性版本,在Folia稳定前不会有发布版本,目前以可用性为主,不考虑玩法兼容 

 
# 已知问题
* 主城系统商店失效 (故意删除的,因为定价不合理,短期内不会修复)
* 仍有部分粘液科技材质错乱
* 其他问题请查看 [Issues](https://github.com/RenYuan-MC/RYSurvival/issues)
# 如何下载
* 方法一:  
前往[官网](https://rymc.ltd)下载(感谢SHIJIATONG制作的网站)  
* 方法二:  
添加QQ群[1029946156](https://jq.qq.com/?_wv=1027&k=DN77Hlfh),群内下载  
# 自行构建版本  
首先将 [RYTools](https://github.com/RenYuan-MC/RYSurvival-Tools) 和 [本仓库](https://github.com/RenYuan-MC/RYSurvival) Clone至同一文件夹  
然后找到RYTools中的tools文件夹打开 [打包模式.bat](https://github.com/RenYuan-MC/RYSurvival-Tools/tree/main/tools) 即可  
<br>
注意事项：     
* 你所选择的分支版本即为打包后的版本,请提前调整到你希望构建的分支上  
* 在1.4以前的版本不支持构建   
* 打包完成后的文件在build文件夹  
* 你可以通过此方式获取到最新的版本,但是可能会遇到其他未解决的问题  
# 数据统计
* 服务端目前正依靠RenYuan-Core进行数据统计,同时使用了bstats和cstats  
cstats: https://cstats.iroselle.com/plugin/bukkit/RenYuan-Core  
bstats: https://bstats.org/plugin/bukkit/RenYuan-Survival/16814  
bstats(两年前的旧统计): https://bstats.org/plugin/bukkit/RenYuanServerPackBstats/12099  
* **由于最早使用的是cstats,所以bstats统计到的数据不全**  
顺便给大家踩个坑,不要用cstats!太多问题了,功能也不如bstats  
* 下方是bstats的数据统计 (不放数据更多的cstats是因为cstats不支持)  
  
[![](https://bstats.org/signatures/bukkit/RenYuan-Survival.svg)](https://bstats.org/plugin/bukkit/RenYuan-Survival/16814)
