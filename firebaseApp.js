import { StyleSheet, Text, View } from 'react-native';
import AddData from './source/index'

export default function App() {
  return (
    <View style={{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'}}>
    <AddData/>
    </View>
  );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});