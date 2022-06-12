import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { ActionSheetHeaderProps } from '../../../../types/action-sheet'

export default class ActionSheetHeader extends React.Component<
  ActionSheetHeaderProps
> {
  public render (): JSX.Element {
    const rootClass = classNames(
      'ag-action-sheet__header',
      this.props.className
    )

    return <View className={rootClass}>{this.props.children}</View>
  }
}
