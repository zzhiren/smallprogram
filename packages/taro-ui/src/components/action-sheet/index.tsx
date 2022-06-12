import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import {
  ActionSheetProps,
  ActionSheetState
} from '../../../types/action-sheet'
import ActionSheetBody from './body/index'
import ActionSheetFooter from './footer/index'
import ActionSheetHeader from './header/index'

export default class ActionSheet extends React.Component<
  ActionSheetProps,
  ActionSheetState
> {
  public static defaultProps: ActionSheetProps
  public static propTypes: InferProps<ActionSheetProps>

  public constructor (props: ActionSheetProps) {
    super(props)
    const { isOpened } = props

    this.state = {
      _isOpened: isOpened
    }
  }

  public UNSAFE_componentWillReceiveProps (nextProps: ActionSheetProps): void {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })

      !isOpened && this.handleClose()
    }
  }

  private handleClose = (): void => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  private handleCancel = (): void => {
    if (typeof this.props.onCancel === 'function') {
      return this.props.onCancel()
    }
    this.close()
  }

  private close = (): void => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    )
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
    e.preventDefault()
  }

  public render (): JSX.Element {
    const { title, cancelText, className } = this.props
    const { _isOpened } = this.state

    const rootClass = classNames(
      'ag-action-sheet',
      {
        'ag-action-sheet--active': _isOpened
      },
      className
    )

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View onClick={this.close} className='ag-action-sheet__overlay' />
        <View className='ag-action-sheet__container'>
          {title && <ActionSheetHeader>{title}</ActionSheetHeader>}
          <ActionSheetBody>{this.props.children}</ActionSheetBody>
          {cancelText && (
            <ActionSheetFooter onClick={this.handleCancel}>
              {cancelText}
            </ActionSheetFooter>
          )}
        </View>
      </View>
    )
  }
}

ActionSheet.defaultProps = {
  title: '',
  cancelText: '',
  isOpened: false
}

ActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  isOpened: PropTypes.bool.isRequired,
  cancelText: PropTypes.string
}
