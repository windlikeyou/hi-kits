# 快速开始

本节将介绍如何在项目中使用 Moonwind UI。

## 完整引入

在 main.ts 中引入所有组件：

```typescript
import { createApp } from "vue";
import MoonwindUI from "moonwind-ui";
import "moonwind-ui/dist/style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(MoonwindUI);
app.mount("#app");
```

## 按需引入

Moonwind UI 支持基于 ES modules 的 tree shaking，按需引入可以有效减少打包体积。

### 手动按需引入

```vue
<template>
  <m-button type="primary">按钮</m-button>
</template>

<script setup lang="ts">
import { MButton } from "moonwind-ui";
import "moonwind-ui/dist/style.css";
</script>
```

### 自动按需引入

推荐使用 unplugin-vue-components 实现自动按需引入：

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      // 自动导入 Moonwind UI 组件
      resolvers: [],
    }),
  ],
});
```

## 全局配置

在引入 Moonwind UI 时，可以传入一个全局配置对象。

```typescript
import { createApp } from "vue";
import MoonwindUI from "moonwind-ui";

const app = createApp(App);

app.use(MoonwindUI, {
  // 全局配置
  size: "default",
  zIndex: 2000,
});
```

## 开始使用

现在你可以在组件中使用 Moonwind UI 了：

```vue
<template>
  <m-button type="primary">主要按钮</m-button>
  <m-data-grid :columns="columns" :data-source="data" />
</template>

<script setup lang="ts">
import { ref } from "vue";

const columns = ref([
  { field: "name", headerName: "姓名" },
  { field: "age", headerName: "年龄" },
]);

const data = ref([
  { name: "张三", age: 25 },
  { name: "李四", age: 30 },
]);
</script>
```

如果一切正常，你应该能看到页面正常渲染。接下来就可以愉快地使用 Moonwind UI 开发你的应用了！
