import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  Image,
} from 'react-native';

import {height, width} from '../utilities/commonstyles';
import {Header} from '../utilities/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TextInput placeholder="Search Hotels" style={styles.input} />
      <Image
        source={require('../assets/enable.png')}
        style={{
          width: width / 1.1,
          height: width / 1.1,
          alignSelf: 'center',
          marginTop: 50,
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderRadius: 30,
    backgroundColor: '#ADADAD30',
    paddingStart: 15,
    fontSize: 16,
    fontWeight: '500',
    width: width / 1.05,
    alignSelf: 'center',
    minHeight: 50,
    marginVertical: 25,
  },
});
