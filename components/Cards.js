import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';
import {defaultImage, defaultProfile} from '../constants/icons';

const Cards = ({image, profile_image, group_name}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.top}>
        <Image
          source={{uri: image ?? defaultImage}}
          style={{
            height: SIZES.height * 0.25,
            width: SIZES.width * 0.95,
            flex: 1,
          }}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.profile}>
          <Image
            source={profile_image ?? defaultProfile}
            style={{height: 50, width: 50, borderRadius: 25}}
          />
        </View>
        <Text style={{fontFamily: FONTS.primaryFonts.bold, color: '#253334'}}>
          {group_name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.95,
    height: SIZES.height * 0.3,
    backgroundColor: 'white',
    flex: 1,
    marginBottom: 5,
  },
  top: {
    flex: 3 / 4,
    backgroundColor: 'pink',
  },
  bottom: {
    flex: 1 / 4,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profile: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderRadius: 27.5,
    borderColor: '#253334',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
