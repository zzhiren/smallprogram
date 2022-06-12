import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { View } from '@tarojs/components';
export default class ActionSheetItem extends React.Component {
    constructor() {
        super(...arguments);
        this.handleClick = (args) => {
            if (typeof this.props.onClick === 'function') {
                this.props.onClick(args);
            }
        };
    }
    render() {
        const rootClass = classNames('ag-action-sheet__item', this.props.className);
        return (React.createElement(View, { className: rootClass, onClick: this.handleClick }, this.props.children));
    }
}
ActionSheetItem.propTypes = {
    onClick: PropTypes.func
};
//# sourceMappingURL=index.js.map