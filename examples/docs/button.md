## Button 按钮

### 使用指南

```js
import { Button } from "od-ui";
Vue.use(Button);
```

### 代码演示

#### 按钮类型

支持`default`、`primary`、`info`、`warning`、`danger`五种类型，默认为`default`

```html
<od-button type="default">默认按钮</od-button>
<od-button type="primary">主要按钮</od-button>
<od-button type="info">信息按钮</od-button>
<od-button type="warning">警告按钮</od-button>
<od-button type="danger">危险按钮</od-button>
```

#### 水波纹

通过 `ripple` 属性将按钮设置为水波纹按钮。

```html
<od-button ripple>水波纹</od-button>
```

#### 图标

通过 `icon` 属性将按钮设置为图标钮。

```html
<od-button icon="search"></od-button>
```

#### 圆角

通过 `round` 属性将按钮设置为圆角按钮。

```html
<od-button type="primary" shadow round>主要按钮</od-button>
<od-button type="success" shadow round>信息按钮</od-button>
<od-button type="warning" shadow round>警告按钮</od-button>
<od-button type="danger" shadow round>危险按钮</od-button>
```
#### 块级

通过 `block` 属性将按钮设置为块级按钮。

```html
<od-button type="primary" shadow round block>块级按钮</od-button>
```