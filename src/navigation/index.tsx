import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import { AuthScreenNav } from '../screens/AuthScreen/AuthScreen.nav';
import { CardsScreenNav } from '../screens/CardsScreen/CardScreen.nav';
import CardsScreen from '../screens/CardsScreen/CardsScreen';
import { Screens } from './screens';

type RootStackParamList = AuthScreenNav & CardsScreenNav;

const AppStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigationContainer = (): JSX.Element => {
  return (
    <AppStack.Navigator initialRouteName={Screens.AuthScreen}>
      <AppStack.Screen name={Screens.AuthScreen} component={AuthScreen} />
      <AppStack.Screen name={Screens.CardsScreen} component={CardsScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigationContainer;
