import React from 'react';
import { observer } from 'mobx-react';
import { useAppStore } from 'src/stores';
import AppNavigationContainer from 'src/navigation';

const InitScreen = () => {
  const { auth } = useAppStore();
  return <AppNavigationContainer isSignIn={auth.isSignIn} />;
};

export default observer(InitScreen);
