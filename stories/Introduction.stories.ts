import type { Meta } from '@storybook/vue3'

const meta: Meta = {
  title: '介绍',
  parameters: {
    layout: 'fullscreen'
  }
}

export default meta

export const Introduction = {
  render: () => ({
    template: `
      <div style="padding: 40px; max-width: 1200px; margin: 0 auto; font-family: system-ui, -apple-system, sans-serif;">
        <div style="text-align: center; margin-bottom: 60px;">
          <h1 style="font-size: 48px; margin-bottom: 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
            Moonwind UI
          </h1>
          <p style="font-size: 20px; color: #666; margin: 0;">现代化的 Vue 3 组件库</p>
        </div>

        <h2 style="color: #333; margin: 32px 0 16px 0;">📦 安装</h2>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 32px;">
# 使用 npm
npm install moonwind-ui

# 使用 yarn  
yarn add moonwind-ui

# 使用 pnpm
pnpm add moonwind-ui
        </pre>

        <h2 style="color: #333; margin: 32px 0 16px 0;">🔧 使用方式</h2>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
import { createApp } from 'vue'
import MoonwindUI from 'moonwind-ui'
import 'moonwind-ui/dist/style.css'

const app = createApp(App)
app.use(MoonwindUI)
app.mount('#app')
        </pre>

        <h3 style="color: #666; margin: 24px 0 12px 0;">按需引入</h3>
        <pre style="background: #f5f5f5; padding: 16px; border-radius: 8px; margin-bottom: 32px;">
import { MButton } from 'moonwind-ui'
import 'moonwind-ui/dist/style.css'
        </pre>

        <h2 style="color: #333; margin: 32px 0 16px 0;">🎨 组件预览</h2>
        <p style="color: #666; line-height: 1.6;">
          在左侧导航栏中选择组件查看详细文档和示例。
        </p>

        <h2 style="color: #333; margin: 32px 0 16px 0;">✨ 特性</h2>
        <ul style="color: #666; line-height: 2;">
          <li>🎨 精美的组件设计</li>
          <li>📦 开箱即用的高质量组件</li>
          <li>🔷 使用 TypeScript 编写，提供完整的类型定义</li>
          <li>🎯 支持按需引入</li>
          <li>📚 详细的文档和示例</li>
          <li>🌍 国际化支持</li>
        </ul>

        <h2 style="color: #333; margin: 32px 0 16px 0;">🔗 相关链接</h2>
        <ul style="color: #666; line-height: 2;">
          <li><a href="https://windlikeyou.github.io/hi-kits/" target="_blank" style="color: #667eea;">在线文档</a></li>
          <li><a href="https://github.com/windlikeyou/hi-kits" target="_blank" style="color: #667eea;">GitHub 仓库</a></li>
          <li><a href="https://www.npmjs.com/package/moonwind-ui" target="_blank" style="color: #667eea;">npm 包</a></li>
        </ul>
      </div>
    `
  })
}
