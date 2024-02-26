import React from 'react';
import {theme} from './theme';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';
import Navigation from './navigations'


const App = () => {
    return(
    <ThemeProvider theme={theme}>
        <StatusBar backgroundColor={theme.background} barStyle="dark-content" />
        <Navigation />
    </ThemeProvider>
    );
};

export default App;