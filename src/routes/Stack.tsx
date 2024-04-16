import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import {StatusBar} from 'react-native';

const stack = createNativeStackNavigator();

export default function Stack() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={DrawerStack} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
