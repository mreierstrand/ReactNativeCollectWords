import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>CollectWords</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'black',
  },
  title: {
    textAlign: 'center',
    marginTop: 0,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});