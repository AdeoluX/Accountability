import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';

const SettingsCard = ({icon, value}) => {
  return (
    <View
      style={{
        width: SIZES.width * 0.9,
        borderBottomColor: 'white',
        borderBottomWidth: 0.5,
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
      }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: 'gray',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 15,
          borderRadius: 10,
        }}>
        <Image
          source={icon}
          style={{tintColor: 'white', height: 30, width: 30}}
        />
      </View>

      <Text
        style={{
          fontFamily: FONTS.primaryFonts.regular,
          fontSize: SIZES.h3,
          color: 'white',
        }}>
        {value}
      </Text>
    </View>
  );
};

export default SettingsCard;

const styles = StyleSheet.create({});
