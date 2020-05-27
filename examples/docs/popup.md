<!--
 * @Author: your name
 * @Date: 2020-05-18 17:27:55
 * @LastEditTime: 2020-05-18 17:28:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.FrontWebe:\github\od-ui\examples\docs\Popup.vue
--> 

## Popup 弹出层
### 介绍

弹出层容器，用于展示弹窗、信息提示等内容，支持多个弹出层叠加展示

### 使用指南

```js
import { Popup } from "od-ui";
Vue.use(Popup);
```

### 代码演示

#### 基础用法

```html
<od-drawer v-model="drawerVisible">
  <div slot="content">asdf</div>
  <div slot="footer">
    <od-button type="info" @click="drawerVisible=!drawerVisible">
	  默认按钮</od-button>
    <od-button type="primary">主要按钮</od-button>
  </div>
</od-drawer>
```

#### 弹出位置
通过position属性设置弹出位置，默认居中弹出，可以设置为top、bottom、left、right

```html
<od-popup v-model="show" position="top" :style="{ height: '30%' }" />
```