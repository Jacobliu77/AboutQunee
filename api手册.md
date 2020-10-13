<!--

 * @Author: jacob
 * @Date: 2020-10-10 16:04:53
 * @LastEditTime: 2020-10-12 14:27:49
 * @LastEditors: jacob
 * @Description:关于对qunee插件的不完全api整理
 * @copyright:北京肇煜宏泰信息科技有限公司 © algoblu
-->
## qunee插件的相关api整理
---------

总则：该文档用于对qunee的相关api的整理和一些场景应用的处理；

文档主体大致分为3块分别为
+ 常见图元、线及其他基础常用元素
+ 常见的graph画布事件及事件处理
+ 常用的场景及技术实现
-------
### 一、常见图元、线及其他基础常用元素
#### 1、常见图元元素
  

```
//在常见的图元多以这个API
var node  = graph.createNode(“node name”, x, y);
    node.image = "../img/xxx/xxx.png";
```
**优势**：因为图元的外形可以使用自己的图片，为开发提供了及其
       丰富的可能，同时该图形样式支持传统图片外还支持svg
```
graph.createNode(“node name”, x, y);
```

#### 2、常见线元素
#### 3、常见group元素
#### 4、常见textLable元素
