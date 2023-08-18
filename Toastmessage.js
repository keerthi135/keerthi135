
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';

const SimpleApp = () => {
  const [count, setCount] = useState(0);

  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Hello',
      text2: 'This is some something 👋'
    });
  };

  const incrementCount = () => {
    setCount(count + 1);
    showToast(); // Call the showToast function here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Simple React Native App</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button
        title='Show toast'
        onPress={showToast}
      />
      <Toast ref={(ref) => Toast.setRef(ref)} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default SimpleApp;