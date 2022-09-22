import { useAppStore } from 'src/stores';

export const useInitScreen = () => {
  const { auth } = useAppStore();

  return {
    isSignIn: auth.isSignIn,
  };
};
