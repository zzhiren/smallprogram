import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import Component from './base'

export interface ActionSheetProps extends Component {
  /**
   * 是否展示元素
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 取消按钮的内容
   */
  cancelText?: string
  /**
   * 元素被关闭触发的事件
   */
  onClose?: (event?: CommonEvent) => void
  /**
   * 点击了底部取消按钮触发的事件
   */
  onCancel?: (event?: CommonEvent) => void
}

export interface ActionSheetState {
  _isOpened: boolean
}

export type ActionSheetHeaderProps = Component

export interface ActionSheetFooterProps extends Component {
  onClick?: Function
}

export type ActionSheetBodyProps = Component

export interface ActionSheetItemProps extends Component {
  /**
   * 点击 Item 触发的事件
   */
  onClick?: (event?: CommonEvent) => void
}

declare const ActionSheetItem: ComponentClass<ActionSheetItemProps>

declare const ActionSheet: ComponentClass<ActionSheetProps>

export default ActionSheet

export { ActionSheetItem }
