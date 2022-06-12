import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { View } from '@tarojs/components';
export default class Picker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { className } = this.props;
        const rootClass = classNames('ag-image-cropper', className);
        return (React.createElement(View, { className: rootClass }));
    }
}
Picker.defaultProps = {
    className: ''
};
Picker.propTypes = {
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};
//# sourceMappingURL=index.js.map