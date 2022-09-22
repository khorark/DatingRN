import { useCallback } from 'react';
import { Linking } from 'react-native';
import { useAppStore } from 'src/stores';

export const useProfileScreen = () => {
  const { auth } = useAppStore();

  const handleLogout = useCallback(() => {
    auth.logout();
  }, []);

  const onPressGithubLink = () => {
    Linking.openURL('https://github.com/khorark').catch((e) => console.warn(e));
  };

  const onPressLinkedinLink = () => {
    Linking.openURL('https://www.linkedin.com/in/arkadii-khoroshikh-275813159/').catch((e) => console.warn(e));
  };

  return {
    onPressGithubLink,
    onPressLinkedinLink,
    handleLogout,
  };
};
