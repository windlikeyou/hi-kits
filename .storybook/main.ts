import type { StorybookConfig } from '@storybook/vue3-vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

const config: StorybookConfig = {
  stories: [
    '../packages/moonwind-ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  typescript: {
    check: false
  },
  viteFinal: async (config) => {
    // 确保 Vue 插件存在
    const hasVuePlugin = config.plugins?.some(plugin =>
      plugin && typeof plugin === 'object' && 'name' in plugin && plugin.name === 'vite:vue'
    )

    if (!hasVuePlugin) {
      config.plugins = config.plugins || []
      config.plugins.push(vue())
    }

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          '@': resolve(__dirname, '../packages/components/src'),
          'moonwind-ui': resolve(__dirname, '../packages/moonwind-ui/src'),
          '@moonwind-ui/components': resolve(__dirname, '../packages/components/src'),
          '@moonwind-ui/utils': resolve(__dirname, '../packages/utils/src'),
          '@moonwind-ui/hooks': resolve(__dirname, '../packages/hooks/src'),
          '@moonwind-ui/styles': resolve(__dirname, '../packages/styles/src')
        }
      }
    }
  }
}

export default config