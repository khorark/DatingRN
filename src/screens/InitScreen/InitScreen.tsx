import React from 'react';
import { observer } from 'mobx-react';
import AppNavigationContainer from 'src/navigation';
import { useInitScreen } from 'src/screens/InitScreen/InitScreen.hook';

const InitScreen = () => {
  const h = useInitScreen();
  return <AppNavigationContainer isSignIn={h.isSignIn} />;
};

export default observer(InitScreen);
