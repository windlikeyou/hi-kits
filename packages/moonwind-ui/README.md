# Moonwind UI

<p align="center">
  <img src="https://img.shields.io/npm/v/moonwind-ui" alt="npm version">
  <img src="https://img.shields.io/npm/dm/moonwind-ui" alt="npm downloads">
  <img src="https://img.shields.io/github/license/windlikeyou/hi-kits" alt="license">
</p>

一个现代化的 Vue 3 组件库，基于 TypeScript 构建。

## ✨ 特性

- 🎨 精美的组件设计
- 📦 开箱即用的高质量组件
- 🔷 使用 TypeScript 编写，提供完整的类型定义
- 🎯 支持按需引入
- 📚 详细的文档和示例
- 🌍 支持国际化

## 📦 安装

\\\ash
# 使用 npm
npm install moonwind-ui

# 使用 pnpm
pnpm add moonwind-ui

# 使用 yarn
yarn add moonwind-ui
\\\

## 🔨 使用

### 完整引入

\\\	ypescript
import { createApp } from 'vue'
import MoonwindUI from 'moonwind-ui'
import 'moonwind-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(MoonwindUI)
app.mount('#app')
\\\

### 按需引入

\\\ue
<template>
  <m-button type="primary">按钮</m-button>
  <m-data-grid :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
import { MButton, MDataGrid } from 'moonwind-ui'
import 'moonwind-ui/dist/style.css'

const columns = [
  { field: 'name', headerName: '姓名' },
  { field: 'age', headerName: '年龄' }
]

const data = [
  { name: '张三', age: 25 },
  { name: '李四', age: 30 }
]
</script>
\\\

## 📖 文档

访问 [在线文档](https://windlikeyou.github.io/hi-kits/) 查看完整的组件列表和使用示例。

## 🔗 链接

- [文档站点](https://windlikeyou.github.io/hi-kits/)
- [GitHub 仓库](https://github.com/windlikeyou/hi-kits)
- [更新日志](./CHANGELOG.md)
- [发布指南](./PUBLISHING.md)

## 🤝 贡献

欢迎贡献代码！请查看 [贡献指南](./DEVELOPMENT.md)。

## 📄 许可证

[MIT](./LICENSE)

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！
