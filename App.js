import React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { ColorBox } from './components/ColorBox';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colors:
        </Text>
        <ColorBox color={'#2aa198'}>Cyan</ColorBox>
        <ColorBox color={'#268bd2'}>Blue</ColorBox>
        <ColorBox color={'#d33682'}>Magenta</ColorBox>
        <ColorBox color={'#cb4b16'}>Orange</ColorBox>
      </View>
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
  },
});

export default App;
