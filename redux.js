// Import necessary libraries
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

// Define initial state and reducer
const initialState = { count: 1000 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return { count: state.count + 100 };
    case 'minus':
      return { count: state.count - 100 };
    default:
      return state;
  }
};

// Create a Redux store
const a = createStore(reducer);

// Define actions
const increment = () => ({ type: 'add' });
const decrement = () => ({ type: 'minus' });

// Create a connected component
const CounterComponent = ({ count, increment, decrement }) => (
  <View>
    <Text>Count: {count}</Text>
    <Button title="Increment" onPress={increment} />
    <Button title="Decrement" onPress={decrement} />
  </View>
);

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

const Finally = connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

// Render the application
const App = () => (
  <Provider store={a}>
    <Finally />
  </Provider>
);

export default App;