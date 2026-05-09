import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// MusicScreen placeholder for background music
export default function MusicScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Background Music</Text>
      {/* Music player UI will go here */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 }
});