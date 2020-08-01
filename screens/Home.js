import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { PalettePreview } from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

export const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const palettes = await response.json();
      setPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, [handleFetchPalettes]);

  return (
    <FlatList
      style={styles.list}
      data={palettes}
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
