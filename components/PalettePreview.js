import React from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export const PalettePreview = ({ colorPalette, handlePress }) => {
  const renderItem = ({ item }) => (
    <View
      style={[
        styles.box,
        {
          backgroundColor: item.hexCode,
        },
      ]}
    />
  );
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={[styles.text]}>{colorPalette.paletteName}</Text>
      <FlatList
        style={[styles.colorContainer]}
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={renderItem}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: { fontWeight: 'bold', fontSize: 18 },
  box: {
    height: 50,
    width: 50,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 4,
  },
});
