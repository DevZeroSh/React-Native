import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const PlatformTouchable = ({ children, ...props }) => {
    const Touchable = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

    return (

        <Touchable {...props}>
            <View style={props.style}>{children}</View>
        </Touchable>)

};

export default PlatformTouchable;
