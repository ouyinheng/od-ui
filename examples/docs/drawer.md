<!--
 * @Author: your name
 * @Date: 2020-05-15 14:26:13
 * @LastEditTime: 2020-05-18 16:32:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1.Webe:\github\od-ui\examples\docs\drawer.md
-->

## Button 按钮

### 使用指南

```js
import { Drawer } from "od-ui";
Vue.use(Drawer);
```

### 代码演示

#### 抽屉类型

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
