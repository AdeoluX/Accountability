import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';
import {defaultProfile} from '../constants/icons';

const DiscoveryCard = ({first_name, last_name}) => {
  return (
    <View
      style={{
        backgroundColor: '#253334',
        width: SIZES.width * 0.45,
        height: SIZES.height * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        margin: 5,
        elevation: 6,
      }}>
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: 'white',
          borderRadius: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 5,
        }}>
        <Image
          source={defaultProfile}
          style={{height: 95, width: 95, borderRadius: 95 / 2}}
        />
      </View>
      <Text style={{color: 'white', fontFamily: FONTS.primaryFonts.bold}}>
        {first_name} {last_name}
      </Text>
    </View>
  );
};

export default DiscoveryCard;

const styles = StyleSheet.create({});
