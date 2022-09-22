import { useCallback, useEffect, useState } from 'react';
import { useAppStore } from 'src/stores';

export const useAuthScreen = () => {
  const { auth } = useAppStore();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handlePress = useCallback(() => {
    auth.login({ login, password });
  }, [login, password]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (auth.isError) {
      timer = setTimeout(() => {
        auth.resetError();
      }, 2000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [auth.isError]);

  return {
    login,
    password,
    isError: auth.isError,
    setLogin,
    setPassword,
    handlePress,
  };
};
