
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
import Box from './src/components/FlexBox';

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
     <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginTop: 150, marginBottom: 150 }}>
      {/* <AppButton isLoading={isLoading} onPress={() => alert("Say Hi")} title="Done" /> */}
      {/* <Button title='Increment' onPress={OnIncrement}/>
      <Text>{counter}</Text>
      <Button title='Decrment' onPress={OnDecrment}/> */}
      {/* <AddToCartButton/> */}
      {/* <Timer /> */}
      <Box color="blue" />
      <Box color="green" />
      <Box color="yellow" />
      <Box color="red" />
      <Box color="orange" />
    </View>
  );
}


export default App;
