import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class ActionSheetFooter extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (...args) => {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(...args);
            }
        };
    }
    render() {
        const rootClass = classNames('ag-action-sheet__footer', this.props.className);
        return (React.createElement(View, { onClick: this.handleClick, className: rootClass }, this.props.children));
    }
}
ActionSheetFooter.propTypes = {
    onClick: PropTypes.func
};
//# sourceMappingURL=index.js.map