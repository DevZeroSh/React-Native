import React from 'react';
import PlatformTouchable from '../PlatformTouchable';
import { Text } from 'react-native';
import styles from "./styles";

const AppButton = ({title}) => {
  return (
    <PlatformTouchable style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
    </PlatformTouchable>
  );
};

export default AppButton;
