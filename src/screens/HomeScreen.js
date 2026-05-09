import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  // Home screen with buttons to access each feature
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐾 Paw Focus 🐾</Text>
      <Button title="Start Pomodoro Timer" onPress={() => navigation.navigate('Timer')} />
      <Button title="Background Music" onPress={() => navigation.navigate('Music')} />
      <Button title="Flashcards" onPress={() => navigation.navigate('Flashcards')} />
      <Button title="AI Chat" onPress={() => navigation.navigate('Chat')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 24 }
});