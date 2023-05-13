import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Description from './src/screens/Description';
import Resource from './src/screens/resource/index';


export default function App() {
  return (
    <div>
      <Resource />
      <Description/>
    
    </div>
   
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
