import * as React from 'react';
//Import React Native Gesture Handler

import 'react-native-gesture-handler';

import { NativeBaseProvider, extendTheme } from 'native-base';
import Container from './Container';

// Import font with Expo
import AppLoading from 'expo-app-loading';
import { useFonts, Bangers_400Regular } from '@expo-google-fonts/bangers';

export default function App() {
  // Load Font with Expo
  let [fontsLoaded] = useFonts({
    Bangers_400Regular,
  });

  // Setup Font
  const fontConfig = {
    Bangers: {
      400: {
        normal: 'Bangers_400Regular',
      },
    },
  };

  // Setup Custome Theme
  const customeColor = {
    warning: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    amber: {
      400: '#fb923c',
    },
  };

  // Configuration Native Base Custom Theme
  const theme = extendTheme({
    colors: customeColor,
    fontConfig,
    fonts: {
      heading: 'Bangers',
      body: 'Bangers',
      mono: 'Bangers',
    },
    config: { initialColorMode: 'dark' },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={theme}>
        <Container />
      </NativeBaseProvider>
    );
  }
}
