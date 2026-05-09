import React, { useState, useRef } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Pomodoro durations in seconds
const WORK_DURATION = 25 * 60; // 25 minutes
const BREAK_DURATION = 5 * 60; // 5 minutes

export default function TimerScreen() {
  // State for timer, if running, and mode (work/break)
  const [seconds, setSeconds] = useState(WORK_DURATION);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  // Ref for the timer interval
  const intervalRef = useRef(null);

  // Start the timer
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => {
          if (prev > 0) return prev - 1;
          // If timer hits 0, switch modes
          clearInterval(intervalRef.current);
          if (isWork) {
            setIsWork(false);
            setSeconds(BREAK_DURATION);
            setIsRunning(false);
          } else {
            setIsWork(true);
            setSeconds(WORK_DURATION);
            setIsRunning(false);
          }
          return 0;
        });
      }, 1000);
    }
  };

  // Pause the timer
  const handlePause = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  // Reset the timer
  const handleReset = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setIsRunning(false);
    setSeconds(isWork ? WORK_DURATION : BREAK_DURATION);
  };

  // Display minutes:seconds format
  const formatTime = (secs) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isWork ? 'Focus Time' : 'Break Time'}</Text>
      <Text style={styles.timer}>{formatTime(seconds)}</Text>
      <View style={styles.buttonRow}>
        <Button title={isRunning ? 'Pause' : 'Start'} onPress={isRunning ? handlePause : handleStart} />
        <Button title="Reset" onPress={handleReset} />
      </View>
      <Text style={styles.hint}>25 min work / 5 min break</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  timer: { fontSize: 64, fontWeight: 'bold', marginBottom: 20, fontFamily: 'monospace' },
  buttonRow: { flexDirection: 'row', gap: 16, marginBottom: 24 },
  hint: { fontSize: 16, color: '#aaa' }
});
