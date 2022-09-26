import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen/AuthScreen';
import { AuthScreenNav } from '../screens/AuthScreen/AuthScreen.nav';
import { CardsScreenNav } from '../screens/CardsScreen/CardScreen.nav';
import CardsScreen from '../screens/CardsScreen/CardsScreen';
import { Screens } from './screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreenNav } from '../screens/ProfileScreen/ProfileScreen.nav';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import PhotoListScreen from 'src/screens/PhotoListScreen/PhotoListScreen';
import { PhotoListScreenNav } from 'src/screens/PhotoListScreen/PhotoListScreen.nav';

type RootStackParamList = AuthScreenNav & CardsScreenNav & PhotoListScreenNav & ProfileScreenNav;

const AppStack = createNativeStackNavigator<RootStackParamList>();
const AppTab = createBottomTabNavigator();

type Props = {
  isSignIn: boolean;
};

const AppNavigationContainer = ({ isSignIn }: Props): JSX.Element => {
  if (isSignIn) {
    return (
      <AppTab.Navigator>
        <AppStack.Screen name={Screens.CardsScreen} component={CardsScreen} />
        <AppStack.Screen name={Screens.PhotoListScreen} component={PhotoListScreen} />
        <AppStack.Screen name={Screens.ProfileScreen} component={ProfileScreen} />
      </AppTab.Navigator>
    );
  } else {
    return (
      <AppStack.Navigator initialRouteName={Screens.AuthScreen}>
        <AppStack.Screen name={Screens.AuthScreen} component={AuthScreen} options={{ headerShown: false }} />
      </AppStack.Navigator>
    );
  }
};

export default AppNavigationContainer;
