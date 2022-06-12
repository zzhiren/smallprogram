import React, { Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { View, Input as TInput, Label, Text } from '@tarojs/components';
function getInputProps(props) {
    const actualProps = {
        type: props.type,
        maxlength: props.maxlength,
        disabled: props.disabled,
        password: false
    };
    switch (actualProps.type) {
        case 'phone':
            actualProps.type = 'number';
            actualProps.maxlength = 11;
            break;
        case 'password':
            actualProps.type = 'text';
            actualProps.password = true;
            break;
        default:
            break;
    }
    if (!props.disabled && !props.editable) {
        actualProps.disabled = true;
    }
    return actualProps;
}
export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.inputClearing = false;
        this.handleInput = (event) => {
            this.props.onChange(event.detail.value, this.props.name, event);
        };
        this.handleFocus = (event) => {
            if (typeof this.props.onFocus === 'function') {
                this.props.onFocus(event.detail.value, this.props.name, event);
            }
        };
        this.handleBlur = (event) => {
            if (typeof this.props.onBlur === 'function') {
                this.props.onBlur(event.detail.value, this.props.name, event);
            }
            if (event.type === 'blur' && !this.inputClearing) {
                this.props.onChange(event.detail.value, this.props.name, event);
            }
            // 还原状态
            this.inputClearing = false;
        };
        this.handleConfirm = (event) => {
            if (typeof this.props.onConfirm === 'function') {
                this.props.onConfirm(event.detail.value, this.props.name, event);
            }
        };
        this.handleClick = (event) => {
            if (!this.props.editable && typeof this.props.onClick === 'function') {
                this.props.onClick(event.detail.value, this.props.name, event);
            }
        };
        this.handleClearValue = (event) => {
            this.inputClearing = true;
            this.props.onChange('', this.props.name, event);
        };
        this.handleKeyboardHeightChange = (event) => {
            if (typeof this.props.onKeyboardHeightChange === 'function') {
                this.props.onKeyboardHeightChange(this.props.name, event);
            }
        };
        this.state = {};
    }
    render() {
        const { name = '', className = '', value, placeholder = '请输入', placeholderStyle, placeholderClass, cursorSpacing = -1, confirmType = 'done', alwaysEmbed = false, cursor = -1, border, selectionStart = -1, selectionEnd = -1, adjustPosition = true, holdKeyboard = false, label = '', customLabel = false, clearable = false, align = 'left', required = false, error = '', autoFocus = false, focus = false, } = this.props;
        const isRenderError = !!this.props.renderError || error;
        const { type = 'text', maxlength = 140, disabled = false, password } = getInputProps(this.props);
        const rootClass = classNames('ag-input', {
            'ag-input--without-border': !border
        }, className);
        const containerCls = classNames('ag-input__container', {
            'ag-input--disabled': disabled
        });
        const overlayCls = classNames('ag-input__overlay', {
            'ag-input__overlay--hidden': !disabled
        });
        const placeholderCls = classNames('ag-input__placeholder', placeholderClass);
        return (React.createElement(View, { className: rootClass },
            align === 'top' && (React.createElement(Label, { className: `ag-input__top-label ${required && 'ag-input__label--required'}`, for: name }, label)),
            React.createElement(View, { className: containerCls },
                React.createElement(View, { className: overlayCls, onClick: this.handleClick }),
                align === 'left' && (React.createElement(Fragment, null, customLabel ?
                    React.createElement(View, null, this.props.renderLabel)
                    :
                        React.createElement(Label, { className: `ag-input__left-label ${required && 'ag-input__label--required'}`, for: name }, label))),
                React.createElement(TInput, { className: 'ag-input__input', id: name, value: value, type: type, password: password, placeholder: placeholder, placeholderStyle: placeholderStyle, placeholderClass: placeholderCls, maxlength: maxlength, cursorSpacing: cursorSpacing, confirmType: confirmType, alwaysEmbed: alwaysEmbed, cursor: cursor, selectionStart: selectionStart, selectionEnd: selectionEnd, adjustPosition: adjustPosition, holdKeyboard: holdKeyboard, autoFocus: autoFocus, focus: focus, onInput: this.handleInput, onFocus: this.handleFocus, onBlur: this.handleBlur, onConfirm: this.handleConfirm, 
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    onKeyboardHeightChange: this.handleKeyboardHeightChange }),
                clearable && value && (React.createElement(View, { className: 'ag-input__clear', onTouchEnd: this.handleClearValue },
                    React.createElement(Text, { className: 'ag-icon ag-icon-close-circle ag-input__icon-close' }))),
                React.createElement(View, { className: 'ag-input__custom-right' }, this.props.renderRight)),
            isRenderError && (React.createElement(View, { className: 'ag-input__tip' },
                align === 'left' && (React.createElement(Fragment, null, customLabel ?
                    React.createElement(View, { className: 'ag-input__tip-box' }, this.props.renderLabel)
                    :
                        React.createElement(Label, { className: `ag-input__left-label` }))),
                this.props.renderError ?
                    React.createElement(View, { className: 'ag-input__tip-label' }, this.props.renderError)
                    :
                        React.createElement(View, { className: 'ag-input__tip-label' }, error)))));
    }
}
// @ts-ignore
// @ts-ignore
Input.defaultProps = {
    name: '',
    className: '',
    /* input的值 */
    value: '',
    /**
     * 输入框类型
     * @default text
     */
    type: 'text',
    error: '',
    /* 是否是密码类型 */
    password: false,
    /* 提示文字 */
    placeholder: '请输入',
    /* 指定placeholder的样式 */
    placeholderStyle: '',
    /* 指定placeholder的class */
    placeholderClass: '',
    /* 是否禁用 */
    disabled: false,
    /* 是否可编辑 */
    editable: true,
    /* 最大输入长度 */
    maxlength: 140,
    /**
     * 指定光标与键盘的距离，取 input 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离
     * @default 0
     */
    cursorSpacing: -1,
    /**
     * 设置键盘右下角按钮的文字，仅在type='text'时生效
     * @default done
     */
    confirmType: 'done',
    /**
     * 强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)
     * @default false
     */
    alwaysEmbed: false,
    /* 指定focus时的光标位置 */
    cursor: -1,
    /**
     * 光标起始位置，自动聚集时有效，需与selection-end搭配使用
     * @default -1
     */
    selectionStart: -1,
    /**
     * 光标结束位置，自动聚集时有效，需与selection-start搭配使用
     * @default -1
     */
    selectionEnd: -1,
    /**
     * 键盘弹起时，是否自动上推页面
     * @default true
     */
    adjustPosition: true,
    /**
     * focus时，点击页面的时候不收起键盘
     * @default false
     */
    holdKeyboard: false,
    /* 标题 */
    label: '',
    /* 是否自定义label */
    customLabel: false,
    /* 是否显示清空按钮 */
    clearable: false,
    /**
     * label显示位置，top|left
     * @default left
     */
    border: true,
    align: 'left',
    /* 是否必填,控制显示必填星号 */
    required: false,
    /* 右侧图标 */
    rightIcon: '',
    /**
     * 是否自动聚焦
     * @default false
     */
    focus: false,
    onChange: () => { },
    onFocus: () => { },
    onBlur: () => { },
    onConfirm: () => { },
    onKeyboardHeightChange: () => { },
};
Input.propTypes = {
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
//# sourceMappingURL=index.js.map