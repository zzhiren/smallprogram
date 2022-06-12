import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { ActionSheetBodyProps } from '../../../../types/action-sheet'

export default class ActionSheetBody extends React.Component<
  ActionSheetBodyProps
> {
  public render (): JSX.Element {
    const rootClass = classNames('ag-action-sheet__body', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
