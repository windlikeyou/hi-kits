# DataGrid 数据表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。

## 基础用法

基础的表格展示用法。

<preview path="../components/demos/data-grid-basic.vue" />

## 分页

支持分页功能。

<preview path="../components/demos/data-grid-pagination.vue" />

## 排序

对表格进行排序，可快速查找或对比数据。

<preview path="../components/demos/data-grid-sort.vue" />

## 筛选

对表格进行筛选，可快速查找数据。

<preview path="../components/demos/data-grid-filter.vue" />

## 自定义列

自定义列的显示内容。

<preview path="../components/demos/data-grid-custom.vue" />

## 工具栏

显示工具栏，提供额外的操作功能。

<preview path="../components/demos/data-grid-toolbar.vue" />

## 行选择

支持行选择功能。

<preview path="../components/demos/data-grid-selection.vue" />

## 远程数据

通过 `fetch` 属性配置远程数据获取。

<preview path="../components/demos/data-grid-fetch.vue" />

## API

### Props

| 属性名       | 说明             | 类型               | 默认值 |
| ------------ | ---------------- | ------------------ | ------ |
| columns      | 列配置           | DataGridColumn[]   | []     |
| dataSource   | 数据源           | any[]              | []     |
| fetch        | 远程数据获取函数 | Function           |        |
| pagination   | 分页配置         | PaginationConfig   |        |
| rowSelection | 行选择配置       | RowSelectionConfig |        |
| toolbar      | 工具栏配置       | ToolbarConfig      |        |
| loading      | 加载状态         | boolean            | false  |
| height       | 表格高度         | string / number    |        |

### Events

| 事件名           | 说明                 | 回调参数           |
| ---------------- | -------------------- | ------------------ |
| row-click        | 行点击事件           | (row: any)         |
| selection-change | 选择项发生变化时触发 | (selection: any[]) |
| page-change      | 页码改变时触发       | (page: number)     |
| page-size-change | 每页条数改变时触发   | (pageSize: number) |

### Methods

| 方法名          | 说明             | 参数 |
| --------------- | ---------------- | ---- |
| refresh         | 刷新表格数据     |      |
| clearSelection  | 清空选择         |      |
| getSelectedRows | 获取选中的行数据 |      |

## DataGridColumn

| 属性名     | 说明       | 类型    | 默认值 |
| ---------- | ---------- | ------- | ------ |
| field      | 列字段名   | string  |        |
| headerName | 列标题     | string  |        |
| width      | 列宽度     | number  |        |
| sortable   | 是否可排序 | boolean | false  |
| filter     | 是否可筛选 | boolean | false  |
| hide       | 是否隐藏   | boolean | false  |
