import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const PlatformTouchable = ({ children, style, ...props }) => {
    const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

    return (

        <Touchable {...this.props}>
            <View style={style}>{children}</View>
        </Touchable>)

};

export default PlatformTouchable;
