import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// TimerScreen placeholder for Pomodoro Timer logic
export default function TimerScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro Timer</Text>
      {/* Timer UI will go here */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 24 }
});