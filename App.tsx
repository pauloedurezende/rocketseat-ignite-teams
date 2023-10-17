import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Routes } from '@routes/index';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar />
      <Routes />
    </ThemeProvider>
  );
}
