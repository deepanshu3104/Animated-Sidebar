import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  Text,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDrawerStatus} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {colors} from './colors';
import {height} from './commonstyles';

export function Header() {
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState('closed');
  const currentDrawerStatus = useDrawerStatus();
  useEffect(() => {
    setIsDrawerOpen(currentDrawerStatus);
  }, [currentDrawerStatus]);
  return (
    <View style={styles.headerview}>
      <TouchableOpacity
        onPress={() => {
          if (isDrawerOpen === 'open') {
            navigation.closeDrawer();
            setIsDrawerOpen('closed');
          } else {
            navigation.openDrawer();
            setIsDrawerOpen('open');
          }
        }}>
        <Image source={require('../assets/list.png')} style={styles.icon} />
      </TouchableOpacity>
      <Image source={require('../assets/bell.png')} style={styles.icon2} />
    </View>
  );
}
export function Header2({label}) {
  const navigation = useNavigation();
  return (
    <View style={styles.headerview}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={require('../assets/back.png')} style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
      <Text style={{color: 'transparent'}}>Booking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        paddingTop: height * 0.07,
      },
      android: {
        paddingTop: height * 0.05,
      },
    }),
  },
  icon: {height: 26, width: 26, tintColor: colors.main},
  icon2: {height: 25, width: 25, tintColor: colors.main},
  label: {color: colors.main, fontSize: 18, fontWeight: '700'},
});
