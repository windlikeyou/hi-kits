# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

<preview path="../components/demos/button-basic.vue" />

## 不同类型

按钮有五种类型：默认按钮、主要按钮、成功按钮、警告按钮和危险按钮。

<preview path="../components/demos/button-basic.vue" />

## 禁用状态

按钮不可用状态。

<preview path="../components/demos/button-disabled.vue" />

## 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

<preview path="../components/demos/button-loading.vue" />

## 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<preview path="../components/demos/button-size.vue" />

## 圆角按钮

通过 `round` 属性来设置圆角按钮。

<preview path="../components/demos/button-round.vue" />

## 圆形按钮

通过 `circle` 属性来设置圆形按钮。

<preview path="../components/demos/button-circle.vue" />

## API

### Props

| 属性名   | 说明           | 类型    | 可选值                                         | 默认值  |
| -------- | -------------- | ------- | ---------------------------------------------- | ------- |
| type     | 类型           | string  | default / primary / success / warning / danger | default |
| size     | 尺寸           | string  | large / default / small                        | default |
| disabled | 是否禁用       | boolean |                                                | false   |
| loading  | 是否加载中状态 | boolean |                                                | false   |
| round    | 是否圆角按钮   | boolean |                                                | false   |
| circle   | 是否圆形按钮   | boolean |                                                | false   |

### Events

| 事件名 | 说明           | 回调参数            |
| ------ | -------------- | ------------------- |
| click  | 点击按钮时触发 | (event: MouseEvent) |

### Slots

| 插槽名  | 说明     |
| ------- | -------- |
| default | 按钮内容 |
