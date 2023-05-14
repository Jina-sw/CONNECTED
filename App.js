import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Description from './src/screens/Description';
import Rating from './src/screens/rating';
import Resource from './src/screens/resource';

export default function App() {
  return (
  
      
      <Description/>
   
    
    
   
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
