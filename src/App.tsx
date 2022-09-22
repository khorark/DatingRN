import React from 'react';
import { Provider } from 'mobx-react';

import { NavigationContainer } from '@react-navigation/native';
import { appStore } from 'src/stores';
import InitScreen from 'src/screens/InitScreen/InitScreen';

const App = () => {
  return (
    <Provider {...appStore}>
      <NavigationContainer>
        <InitScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
