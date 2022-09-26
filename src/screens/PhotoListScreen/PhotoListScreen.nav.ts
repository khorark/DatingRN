import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '../../navigation/screens';

export type PhotoListScreenNav = {
  [Screens.PhotoListScreen]: undefined;
};

export type PhotoListScreenNavigation = NativeStackNavigationProp<PhotoListScreenNav>;
