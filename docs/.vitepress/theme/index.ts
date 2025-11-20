import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import MoonwindUI from 'moonwind-ui'
import '@moonwind-ui/styles'
import { h } from 'vue'

// 演示预览组件
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

// 自定义组件
import ComponentShowcase from './components/ComponentShowcase.vue'
import HomeCanvas from './components/HomeCanvas.vue'

// 自定义样式
import './custom.css'

// 滚动效果
import { initEffects } from './scroll-effects.js'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomeCanvas)
    })
  },
  enhanceApp({ app }) {
    // 全量安装 moonwind-ui
    app.use(MoonwindUI)

    // 注册演示预览组件
    app.component('preview', ElementPlusContainer)
    // 兼容旧命名（部分页面可能使用 <demo-preview>）
    app.component('demo-preview', ElementPlusContainer)

    // 注册自定义组件
    app.component('ComponentShowcase', ComponentShowcase)

    // 初始化滚动效果
    if (typeof window !== 'undefined') {
      initEffects()
    }
  }
} satisfies Theme