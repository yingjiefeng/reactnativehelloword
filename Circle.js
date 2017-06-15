/**
 * Created by master on 17/6/15.
 */
// import { PropTypes } from 'react';
// import { requireNativeComponent, View } from 'react-native';
//
// const MCircle = requireNativeComponent('MCircle', {
//     propTypes: {
//         ...View.propTypes // 包含默认的View的属性
//     },
// });
//
// export default MCircle;


'use strict';

import React, { Component, PropTypes } from 'react';
import {
    View,
    requireNativeComponent,
    processColor  // 字符Color转换为数字
} from 'react-native';

const MCircle = requireNativeComponent('MCircle', {
    propTypes: {
        color: PropTypes.number,
        radius: PropTypes.number,
        ...View.propTypes // 包含默认的View的属性
    },
});

class Circle extends Component {

    static propTypes = {
        radius: PropTypes.number,
        color: PropTypes.string, // 这里传过来的是string
        ...View.propTypes // 包含默认的View的属性
    }

    render() {
        const { style, radius, color } = this.props;

        return (
            <MCircle
                style={style}
                radius={radius}
                color={processColor(color)}
            />
        );
    }

}

module.exports = Circle;