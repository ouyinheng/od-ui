<!--
 * @Author: your name
 * @Date: 2020-05-12 14:41:08
 * @LastEditTime: 2020-05-18 16:41:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \1.FrontWebe:\github\od-ui\examples\docs\quickstart.md
--> 
## 快速上手

本节将介绍如何在项目中使用 ODUI。

### 引入 ODUI

你可以引入整个 ODUI。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import ODUI from 'od-ui';
import 'od-ui/lib/od-ui.css';
import App from './App.vue';

Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 ODUI。 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

```
没有
```


### 开始使用

至此，一个基于 Vue 和 OdUI 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。

