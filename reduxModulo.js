// Import necessary libraries
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Define initial state and reducer
const initialState = { count: 1000 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'multiply':
      return { count: state.count * 100 };
    case 'modulo':
      return { count: state.count % 100};
    default:
      return state;
  }
};

// Create a Redux store
const a = createStore(reducer);

// Define actions
const Multiply = () => ({ type: 'multiply' });
const modulo= () => ({ type: 'modulo' });

// Create a connected component
const CounterComponent = ({ count, Multiply, modulo }) => (
  <View>
    <Text>Count: {count}</Text>
    <Button title="Multiply" onPress={Multiply} />
    <Button title="modulo" onPress={modulo} />
  </View>
);

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  Multiply,
  modulo,
};

const Finally = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

// Render the application
const App = () => (
  <Provider store={a}>
    <Finally />
  </Provider>
);

export default App;