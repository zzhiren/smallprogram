import classNames from 'classnames';
import React from 'react';
import { View } from '@tarojs/components';
export default class ActionSheetBody extends React.Component {
    render() {
        const rootClass = classNames('ag-action-sheet__body', this.props.className);
        return React.createElement(View, { className: rootClass }, this.props.children);
    }
}
//# sourceMappingURL=index.js.map