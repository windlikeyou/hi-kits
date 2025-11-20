import type { Meta, StoryObj } from '@storybook/vue3'
import { MButton } from '@moonwind-ui/components'

const meta: Meta<typeof MButton> = {
  title: 'Components/Button',
  component: MButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Moonwind-UI 按钮组件，支持多种类型、尺寸和状态'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      description: '按钮类型'
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: '按钮尺寸'
    },
    disabled: {
      control: { type: 'boolean' },
      description: '是否禁用'
    },
    loading: {
      control: { type: 'boolean' },
      description: '是否加载'
    },
    onClick: { action: 'clicked' }
  },
  args: {
    onClick: () => {}
  }
}

export default meta
type Story = StoryObj<typeof meta>

// 默认按钮
export const Default: Story = {
  render: () => ({
    components: { MButton },
    template: '<MButton>Default Button</MButton>'
  })
}

// 主要按钮
export const Primary: Story = {
  render: () => ({
    components: { MButton },
    template: '<MButton type="primary">Primary Button</MButton>'
  })
}

// 成功按钮
export const Success: Story = {
  render: () => ({
    components: { MButton },
    template: '<MButton type="success">Success Button</MButton>'
  })
}

// 警告按钮
export const Warning: Story = {
  render: () => ({
    components: { MButton },
    template: '<MButton type="warning">Warning Button</MButton>'
  })
}

// 危险按钮
export const Danger: Story = {
  render: () => ({
    components: { MButton },
    template: '<MButton type="danger">Danger Button</MButton>'
  })
}

// 不同尺寸
export const Sizes: Story = {
  render: () => ({
    components: { MButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <MButton size="small">Small</MButton>
        <MButton size="medium">Medium</MButton>
        <MButton size="large">Large</MButton>
      </div>
    `
  })
}

// 禁用状态
export const Disabled: Story = {
  render: () => ({
    components: { MButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <MButton disabled>Default Disabled</MButton>
        <MButton type="primary" disabled>Primary Disabled</MButton>
        <MButton type="success" disabled>Success Disabled</MButton>
      </div>
    `
  })
}

// 加载状态
export const Loading: Story = {
  render: () => ({
    components: { MButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <MButton loading>Loading</MButton>
        <MButton type="primary" loading>Primary Loading</MButton>
        <MButton type="success" loading>Success Loading</MButton>
      </div>
    `
  })
}

// 所有类型展示
export const AllTypes: Story = {
  render: () => ({
    components: { MButton },
    template: `
      <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap;">
        <MButton>Default</MButton>
        <MButton type="primary">Primary</MButton>
        <MButton type="secondary">Secondary</MButton>
        <MButton type="success">Success</MButton>
        <MButton type="warning">Warning</MButton>
        <MButton type="danger">Danger</MButton>
      </div>
    `
  })
}

// 交互示例
export const Interactive: Story = {
  render: () => ({
    components: { MButton },
    template: '<MButton type="primary" @click="handleClick">Click me!</MButton>',
    methods: {
      handleClick() {
        alert('Button clicked!')
      }
    }
  })
}
