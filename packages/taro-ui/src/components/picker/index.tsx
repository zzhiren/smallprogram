import React from 'react'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import {View, Canvas, Image, ITouchEvent} from '@tarojs/components'
import { PickerProps, PickerStates, TouchImageRelative } from '../../../types/picker'

export default class Picker extends React.Component<PickerProps, PickerStates> {
  public static defaultProps: PickerProps
  public static propTypes: InferProps<PickerProps>

  public constructor(props: PickerProps) {
    super(props);
    this.state = {

    }
  }

  public render (): JSX.Element {
    const {
      className
    } = this.props
    const rootClass = classNames('ag-image-cropper', className)


    return (
      <View className={rootClass}>

      </View>
    )
  }
}

Picker.defaultProps = {
  className: ''
}

Picker.propTypes = {
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
