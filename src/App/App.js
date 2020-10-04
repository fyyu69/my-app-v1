import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Header from '../components/Header';
import Routes from '../components/Routes';

const theme = createMuiTheme({
  
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Routes />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
