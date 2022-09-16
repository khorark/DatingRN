import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '../../navigation/screens';

export type AuthScreenNav = {
  [Screens.AuthScreen]: undefined;
};

export type AuthScreenNavigation = NativeStackNavigationProp<AuthScreenNav>;
