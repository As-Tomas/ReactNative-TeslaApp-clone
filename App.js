import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarItem from './Components/CarItem';
//import Cars from './Components/Cars/cars.js';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FileList
        data={Cars}
        renderItem={CarItem}
      />    */}
      <CarItem/>
      <StatusBar style="auto" />
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
