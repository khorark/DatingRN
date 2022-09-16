import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens } from '../../navigation/screens';

export type CardsScreenNav = {
  [Screens.CardsScreen]: undefined;
};

export type CardsScreenNavigation = NativeStackNavigationProp<CardsScreenNav>;
