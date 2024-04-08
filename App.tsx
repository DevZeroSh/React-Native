
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppButton from './src/components/AppButton';
import AddToCartButton from './src/components/AddToCartButton';
import Timer from './src/components/Timer';

function App(): React.JSX.Element {
  const isLoading = true
  const [counter, setCounter] = useState(0)

  const OnIncrement = () => {
    setCounter(counter + 1)
  }
  const OnDecrment = () => {
    setCounter(counter - 1)
  }
  return (
    <View style={styles.container}>
      {/* <AppButton isLoading={isLoading} onPress={() => alert("Say Hi")} title="Done" /> */}
      {/* <Button title='Increment' onPress={OnIncrement}/>
      <Text>{counter}</Text>
      <Button title='Decrment' onPress={OnDecrment}/> */}
      {/* <AddToCartButton/> */}
      {/* <Timer /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default App;
