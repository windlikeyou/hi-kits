import DataGridComponent from './DataGrid.vue'
import { withInstall } from '@moonwind-ui/utils'
import type { Plugin } from 'vue'

import type {
  DataGridProps,
  DataGridInstance,
  DataGridColumn,
  PaginationConfig,
  FetchResult,
  RowSelection,
} from './types'

// 使用 withInstall 包装主组件和子组件，添加明确的类型注释
const MDataGrid: typeof DataGridComponent & Plugin = withInstall(DataGridComponent)

export {
  MDataGrid,
  type DataGridProps,
  type DataGridInstance,
  type DataGridColumn,
  type PaginationConfig,
  type FetchResult,
  type RowSelection,
}

// 默认导出支持全局安装的组件
export default MDataGrid
