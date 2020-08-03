import React, { useState, useCallback, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { PalettePreview } from '../components/PalettePreview';

const URL = 'https://color-palette-api.kadikraman.now.sh/palettes';

export const Home = ({ navigation, route }) => {
  const newPalette = route.params ? route.params.newPalette : undefined;
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleFetchPalettes = useCallback(async () => {
    const response = await fetch(URL);
    if (response.ok) {
      const newPalettes = await response.json();
      setPalettes(newPalettes);
    }
  }, []);

  useEffect(() => {
    handleFetchPalettes();
  }, [handleFetchPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchPalettes();
    const handle = setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
    return () => clearTimeout(handle);
  }, [handleFetchPalettes]);

  useEffect(() => {
    if (newPalette) {
      setPalettes((colors) => [newPalette, ...colors]);
    }
  }, [newPalette]);

  return (
    <FlatList
      style={styles.list}
      onRefresh={handleRefresh}
      refreshing={isRefreshing}
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
      ListHeaderComponent={
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddNewPalette')}
        >
          <Text style={styles.buttonText}>Add New Palette</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    height: 50,
    backgroundColor: 'white',
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'teal',
  },
});
