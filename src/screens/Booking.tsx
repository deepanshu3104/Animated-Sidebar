import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header2} from '../utilities/Header';
import {colors} from '../utilities/colors';
import {height} from '../utilities/commonstyles';

export default function Booking() {
  return (
    <View style={styles.container}>
      <Header2 label={'Booking'} />
      <Text style={styles.noFound}>No Bookings Found !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  noFound: {
    color: colors.main,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '600',
    marginTop: height / 2.7,
  },
});
