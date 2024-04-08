import React from 'react';
import PlatformTouchable from '../PlatformTouchable';
import { ActivityIndicator, Text } from 'react-native';
import styles from "./styles";

const AppButton = ({ title, onPress,isLoading }) => {
    return (
        <PlatformTouchable style={styles.wrapper} disabled={isLoading} onPress={onPress}>
            {
                isLoading ? <ActivityIndicator /> :
                    <Text style={styles.title}>{title}</Text>
            }
        </PlatformTouchable>
    );
};

export default AppButton;
