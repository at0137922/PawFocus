import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// This is a placeholder for the AI Chat feature.
// We'll integrate an AI assistant here in the next steps!
export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Chat Assistant</Text>
      {/* Chat UI will go here */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 }
});