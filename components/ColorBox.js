import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const ColorBox = ({ color, children }) => {
  return (
    <View style={[styles.box, { backgroundColor: color }]}>
      <Text style={[styles.text]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 3,
    padding: 10,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});
