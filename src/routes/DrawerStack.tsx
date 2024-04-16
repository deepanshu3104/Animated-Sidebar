import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
} from 'react-native';
import Home from '../screens/Home';
import DrawerView from '../utilities/DrawerView';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../utilities/colors';
import {height, width} from '../utilities/commonstyles';
import Booking from '../screens/Booking';

const Drawer = createDrawerNavigator();
const stack = createNativeStackNavigator();

const CustomDrawerContent = (props: any) => {
  return (
    <View style={styles.Container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={true}
        backgroundColor="transparent"
      />
      <DrawerContentScrollView {...props}>
        <View style={styles.profileView}>
          <Image
            source={require('../assets/man.png')}
            style={{
              height: 55,
              width: 55,
            }}
          />
          <Text style={styles.name}>Deepanshu</Text>
          <View style={{borderBottomWidth: 1, borderColor: colors.white}} />

          {[
            {
              screen: 'HomeStackScreen',
              icon: require('../assets/home.png'),
              label: 'Home',
            },
            {
              screen: 'BookingStackScreen',
              icon: require('../assets/booking.png'),
              label: 'Booking',
            },
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.drawerItemView}
              onPress={() => props.navigation.navigate(item.screen)}>
              <Image
                source={item.icon}
                style={{
                  height: 25,
                  width: 25,
                  tintColor: colors.white,
                  marginRight: 10,
                }}
              />
              <Text style={{color: colors.white, fontWeight: '600'}}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const HomeStackScreen = () => {
  return (
    <DrawerView>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}>
        <stack.Screen name={'Home'} component={Home} />
      </stack.Navigator>
    </DrawerView>
  );
};

const BookingStackScreen = () => {
  return (
    <DrawerView>
      <stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: styles.contentStyle,
        }}>
        <stack.Screen name={'Booking'} component={Booking} />
      </stack.Navigator>
    </DrawerView>
  );
};

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'back',
        headerShown: false,
        overlayColor: 'transparent',
        drawerStyle: styles.drawerStyle,
        drawerStatusBarAnimation: 'slide',
        sceneContainerStyle: {
          backgroundColor: colors.main,
        },
      }}>
      {[
        {name: 'HomeStackScreen', component: HomeStackScreen},
        {name: 'BookingStackScreen', component: BookingStackScreen},
      ].map((item, index) => (
        <Drawer.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  drawerStyle: {
    backgroundColor: colors.main,
    width: 220, //250
  },
  contentStyle: {
    elevation: 24,
    shadowColor: '#000',
    backgroundColor: colors.main,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
  },
  profileView: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: height * 0.03,
      },
      android: {
        paddingTop: height * 0.08,
      },
    }),
    marginHorizontal: 10,
  },
  name: {
    fontSize: 20,
    color: colors.white,
    fontWeight: '700',
    paddingTop: 5,
    paddingBottom: 10,
  },
  drawerItemView: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
});
