import { Linking } from 'react-native';

export const useProfileScreen = () => {
  const onPressGithubLink = () => {
    Linking.openURL('https://github.com/khorark').catch((e) => console.warn(e));
  };

  const onPressLinkedinLink = () => {
    Linking.openURL('https://www.linkedin.com/in/arkadii-khoroshikh-275813159/').catch((e) => console.warn(e));
  };

  return {
    onPressGithubLink,
    onPressLinkedinLink,
  };
};
