import React from 'react'
import { View } from '@tarojs/components'
import { AgInput, Validator } from '@agent/taro-ui'
import './index.scss'

export default class Input extends React.Component<{},any> {

  public constructor (props) {
    super(props)
    this.state = {
      value1: '哈哈哈',
      show: false,
      rules: {
        name: {
          type: 'string', required: true, message: '不能为空!'
        },
        email: [
          { type: 'string', required: true, message: '不能为空'},
          { type: 'email', required: true, message: '必须为邮箱格式'},
        ],
        age: [
          { type: 'number', required: true, message: '不能为空'},
          { type: 'number', message: '必须为数字', min: 10, max: 20},
        ]
      },
      form: {
        name: '',
        email: '',
        age: null,
      },
      errors: {},
      validator: null
    }
  }

  componentDidMount () {
    this.setState({
      validator: new Validator(this.state.rules, this)
    })
  }

  private onChange = (value, name) => {
    console.log('value', value)
    const { form } = this.state
    form[name] = value
    this.setState({
      form: form
    })
  }

  private showTip = (value) => {
    this.setState({
      show: value
    })
  }

  private valid () {
    const { form } = this.state
    this.state.validator.validateForm(form).catch(err => console.log(err))
  }


  public render (): JSX.Element {
    const {
      show,
      value1,
      form,
      errors
    } = this.state
    return (
      <View className='index'>
        <View>基本用法</View>
        <AgInput
          name='name'
          label='名字'
          value={form.name}
          onChange={this.onChange}
          required
          clearable
          error={errors.name}
        />

        <AgInput
          name='email'
          label='邮箱'
          value={form.email}
          clearable
          align='top'
          required
          onChange={this.onChange}
          renderError={
            errors.email && <View>{errors.email}</View>
          }
        />
        <AgInput
          name='age'
          label='年龄'
          value={form.age}
          clearable
          align='top'
          required
          onChange={this.onChange}
          renderError={
            errors.age && <View>{errors.age}</View>
          }
        />

        <AgInput
          name='c'
          label='密码'
          type='password'
          clearable
          align='top'
          required
          onChange={this.onChange}
          renderError={
            show && <View>提示</View>
          }
        />

        <AgInput
          name='a'
          label='自定义右侧'
          value={value1}
          onChange={this.onChange}
          required
          clearable
          renderRight={
            <View>自定义右侧</View>
          }
          renderError={
            show && <View>提示</View>
          }
        />

        <AgInput
          name='a'
          value={value1}
          onChange={this.onChange}
          required
          clearable
          customLabel
          renderLabel={
            <View>自定义Label</View>
          }
          renderError={
            show && <View>提示</View>
          }
        />

        <View onTouchEnd={() => this.showTip(true)}>显示提示</View>
        <View onTouchEnd={() => this.showTip(false)}>影藏提示</View>

        <View onTouchEnd={() => this.valid()}>校验</View>

      </View>
    )
  }
}
