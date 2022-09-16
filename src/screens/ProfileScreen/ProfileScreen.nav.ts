import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '../../navigation/screens';

export type ProfileScreenNav = {
  [Screens.ProfileScreen]: undefined;
};

export type ProfileScreenNavigation = NativeStackNavigationProp<ProfileScreenNav>;
