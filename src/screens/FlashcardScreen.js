import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// FlashcardScreen placeholder for flashcard features
export default function FlashcardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flashcards</Text>
      {/* Flashcard UI will go here */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 }
});