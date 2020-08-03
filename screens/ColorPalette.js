import React from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import { ColorBox } from '../components/ColorBox';

export const ColorPalette = ({ route }) => {
  const { colors } = route.params;

  const renderItem = ({ item }) => (
    <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
  );

  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.colorName}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});
