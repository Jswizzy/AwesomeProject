import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { COLOR_PALETTES } from '../Colors';
import { PalettePreview } from '../components/PalettePreview';

export const Home = ({ navigation }) => {
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview
          handlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 8,
  },
});
