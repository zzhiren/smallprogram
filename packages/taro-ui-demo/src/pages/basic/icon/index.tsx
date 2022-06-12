import React from 'react'
import { View } from '@tarojs/components'
import { AgIcon } from '@agent/taro-ui'
import './index.scss'


export default class Icon extends React.Component<null, null> {
  public render (): JSX.Element {
    return (
      <View>
        <AgIcon value='delete' size={40} color='#333333' />
      </View>
    )
  }
}
