import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {theme} from './src/ui/theme';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
