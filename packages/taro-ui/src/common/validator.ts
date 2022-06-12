import Schema from 'async-validator';
import { ComponentClass } from 'React'
import { Rules } from 'async-validator/dist-types/interface'

export default class Validator extends Schema{
  context: ComponentClass<any, any>

  constructor (descriptor: Rules, context: ComponentClass<any, any>) {
    console.log('constructor')
    super(descriptor);
    this.context = context
    // @ts-ignore
    if (this.context.state.errors && Object.prototype.toString.call(this.context.state.errors) === '[object Object]') {
      // @ts-ignore
      const errors = this.context.state.errors
      Object.keys(descriptor).forEach(key => {
        // @ts-ignore
        errors[key] = ''
      })
      // @ts-ignore
      this.context.setState({
        errors: errors
      })
    }
  }

  validateForm (form: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.validate(form, (errors, fields) => {
        if (errors) {
          // validation failed, errors is an array of all errors
          // fields is an object keyed by field name with an array of
          // errors per field
          // @ts-ignore
          if (this.context.state.errors && Object.prototype.toString.call(this.context.state.errors) === '[object Object]') {
            // @ts-ignore
            const err = this.context.state.errors
            Object.keys(fields).forEach(key => {
              console.log('1')
              if (Array.isArray(fields[key]) && fields[key].length > 0) {
                err[key] = fields[key][0].message
              }
            })
            console.log('this.context1', this.context)
            // @ts-ignore
            this.context.setState({
              errors: err
            })
          }
          reject({errors, fields})
        } else {
          resolve()
        }
      })
    })
  }
}
