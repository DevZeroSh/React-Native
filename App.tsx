
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppButton from './src/components/AppButton';





function App(): React.JSX.Element {

  return (
    <View style={styles.container}>
      <AppButton title="Done"/>
    </View>
  );
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


export default App;
