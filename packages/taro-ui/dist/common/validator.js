import Schema from 'async-validator';
export default class Validator extends Schema {
    constructor(descriptor, context) {
        console.log('constructor');
        super(descriptor);
        this.context = context;
        // @ts-ignore
        if (this.context.state.errors && Object.prototype.toString.call(this.context.state.errors) === '[object Object]') {
            // @ts-ignore
            const errors = this.context.state.errors;
            Object.keys(descriptor).forEach(key => {
                // @ts-ignore
                errors[key] = '';
            });
            // @ts-ignore
            this.context.setState({
                errors: errors
            });
        }
    }
    validateForm(form) {
        return new Promise((resolve, reject) => {
            this.validate(form, (errors, fields) => {
                if (errors) {
                    // validation failed, errors is an array of all errors
                    // fields is an object keyed by field name with an array of
                    // errors per field
                    // @ts-ignore
                    if (this.context.state.errors && Object.prototype.toString.call(this.context.state.errors) === '[object Object]') {
                        // @ts-ignore
                        const err = this.context.state.errors;
                        Object.keys(fields).forEach(key => {
                            console.log('1');
                            if (Array.isArray(fields[key]) && fields[key].length > 0) {
                                err[key] = fields[key][0].message;
                            }
                        });
                        console.log('this.context1', this.context);
                        // @ts-ignore
                        this.context.setState({
                            errors: err
                        });
                    }
                    reject({ errors, fields });
                }
                else {
                    resolve();
                }
            });
        });
    }
}
//# sourceMappingURL=validator.js.map