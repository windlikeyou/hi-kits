import ButtonComponent from './Button.vue'
import { withInstall } from '@moonwind-ui/utils'
import type { Plugin } from 'vue'

const MButton: typeof ButtonComponent & Plugin = withInstall(ButtonComponent)

export default MButton
export * from './types'
