import {FlatList, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import DiscoveryCard from '../../components/DiscoveryCard';
import {searchIcon} from '../../constants/icons';
import {FONTS, SIZES} from '../../constants/theme';

const Discover = () => {
  const list = [
    {
      first_name: 'Aderiye',
      last_name: 'Tayo',
      id: 1,
    },
    {
      first_name: 'Adejuwon',
      last_name: 'Tayo',
      id: 2,
    },
    {
      first_name: 'Adediwura',
      last_name: 'Tayo',
      id: 3,
    },
    {
      first_name: 'Adetola',
      last_name: 'Tayo',
      id: 4,
    },
    {
      first_name: 'Adeniyi',
      last_name: 'Tayo',
      id: 5,
    },
    {
      first_name: 'Adejoju',
      last_name: 'Tayo',
      id: 6,
    },
    {
      first_name: 'Adefolarin',
      last_name: 'Tayo',
      id: 7,
    },
    {
      first_name: 'Adediji',
      last_name: 'Tayo',
      id: 8,
    },
    {
      first_name: 'Adetuo',
      last_name: 'Tayo',
      id: 9,
    },
    {
      first_name: 'Ademide',
      last_name: 'Tayo',
      id: 10,
    },
    {
      first_name: 'Adekiitan',
      last_name: 'Tayo',
      id: 11,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View style={styles.search}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            borderColor: 'black',
            borderWidth: 0.5,
            width: SIZES.width * 0.9,
            height: 45,
            borderRadius: 10,
          }}>
          <View
            style={{
              flex: 0.1,
              // backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={searchIcon} style={styles.searchIcon} />
          </View>
          <View
            style={{
              flex: 0.85,
              marginLeft: 5,
            }}>
            <TextInput
              placeholder="Search"
              style={{
                fontFamily: FONTS.primaryFonts.bold,
                fontSize: SIZES.h3,
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.flatlist}>
        <FlatList
          style={{margin: 5}}
          numColumns={2} // set number of columns
          columnWrapperStyle={{
            flex: 1,
            // justifyContent: 'space-around',
          }} // space them out evenly
          data={list}
          keyExtractor={(item, index) => item.id}
          renderItem={item => (
            <DiscoveryCard
              first_name={item.item.first_name}
              last_name={item.item.last_name}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  search: {
    flex: 0.1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  searchIcon: {
    width: 30,
    height: 30,
  },
  flatlist: {
    flex: 0.9,
    padding: 5,
  },
});
