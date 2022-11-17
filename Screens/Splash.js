import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {splashImage} from '../constants/icons';
import {SIZES} from '../constants/theme';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 2000);
  }, [0]);
  return (
    <View style={styles.container}>
      <Image source={splashImage} style={styles.splashImage} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#253334',
  },
  splashImage: {
    height: 260,
    width: 260,
    tintColor: 'white',
  },
});
