import React from 'react'
import { View, Image } from '@tarojs/components'
import { AgImageCropper } from '@agent/taro-ui'
import './index.scss'

interface StateTypes {
  imgUrl: string
}

export default class ImageCropper extends React.Component<null, StateTypes> {

  public constructor(props) {
    super(props)
    this.state = {
      imgUrl:''
    }
  }

  private onSuccess = (res): void => {
    const context = this
    context.setState({
      imgUrl: res.tempFilePath
    })
  }

  public render (): JSX.Element {
    const { imgUrl } = this.state
    return (
      <View>
        <Image src={imgUrl} mode='aspectFill' />
        <AgImageCropper
          success={this.onSuccess}
          size='60%'
        />
      </View>
    )
  }
}
