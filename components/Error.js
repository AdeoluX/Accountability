import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';
import {errorIcon} from '../constants/icons';

const Error = ({close, error}) => {
  return (
    <View
      style={{
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginVertical: 60,
        marginHorizontal: 25,
        borderRadius: 10,
      }}>
      <Image source={errorIcon} style={{width: 154.8, height: 155}} />
      <Text
        style={{
          fontFamily: FONTS.primaryFonts.bold,
          fontSize: SIZES.h3,
          marginTop: 5,
          color: 'black',
        }}>
        {error ?? 'Oops something went wrong.'}
      </Text>
      <TouchableOpacity
        onPress={close}
        style={{
          backgroundColor: '#253334',
          marginTop: 10,
          width: SIZES.width * 0.6,
          height: 50,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontFamily: FONTS.primaryFonts.bold}}>
          CLOSE
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({});
