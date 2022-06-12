import React from 'react'

export default class App extends React.Component {
  // this.props.children 是将要会渲染的页面
  render () {
    return this.props.children
  }
}
