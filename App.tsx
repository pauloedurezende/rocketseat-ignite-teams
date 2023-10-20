import 'react-native-get-random-values';

import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

import { Routes } from '@routes/index';
import { LoadingIndicator } from '@components/LoadingIndicator';

import theme from './src/theme';

export default function App() {
  const [fontsHaveBeenLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      {fontsHaveBeenLoaded ? <Routes /> : <LoadingIndicator />}
    </ThemeProvider>
  );
}
