import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigationContainer from './navigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigationContainer isSignIn={false} />
    </NavigationContainer>
  );
};

export default App;
