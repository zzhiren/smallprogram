import React from 'react';
import { View } from '@tarojs/components';
import $router from '../../router';
// import { MnImageCropper } from '@agent/taro-ui'


export default class Index extends React.Component<any, any> {

  constructor (props) {
    super(props);
    this.state = {
      route: ''
    };
  }
  componentDidMount () {
    console.log();
  }

  private getRoute = () => {
    const route = $router.route;
    this.setState({
      route
    });
  }

  public render (): JSX.Element {
    const { route } = this.state;
    return (
      <View className="index">
        <View onClick={this.getRoute}>点击获取当前route对象</View>
        <View>{JSON.stringify(route)}</View>
      </View>
    );
  }
}
