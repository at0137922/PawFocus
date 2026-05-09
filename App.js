import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import TimerScreen from './src/screens/TimerScreen';
import FlashcardScreen from './src/screens/FlashcardScreen';
import ChatScreen from './src/screens/ChatScreen';
import MusicScreen from './src/screens/MusicScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Flashcards" component={FlashcardScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
