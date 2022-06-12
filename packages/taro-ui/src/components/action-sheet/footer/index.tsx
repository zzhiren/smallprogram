import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { ActionSheetFooterProps } from '../../../../types/action-sheet'

export default class ActionSheetFooter extends React.Component<
  ActionSheetFooterProps
> {
  public static defaultProps: ActionSheetFooterProps
  public static propTypes: InferProps<ActionSheetFooterProps>

  private handleClick = (...args: any[]): void => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(...args)
    }
  }

  public render (): JSX.Element {
    const rootClass = classNames(
      'ag-action-sheet__footer',
      this.props.className
    )

    return (
      <View onClick={this.handleClick} className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

ActionSheetFooter.propTypes = {
  onClick: PropTypes.func
}
