import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
} from 'react-native';
import { ColorBox } from './components/ColorBox';
import { COLORS } from './Colors';

const App = () => {
  const renderItem = ({ item }) => (
    <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={renderItem}
        ListHeaderComponent={<Text style={styles.text}>Solarized</Text>}
      />
      <StatusBar barStyle="default" />
    </SafeAreaView>
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
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
