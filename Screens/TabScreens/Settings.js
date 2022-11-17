import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import moment from 'moment';
import {ApplicationContext} from '../../App';
import {FONTS, SIZES} from '../../constants/theme';
import {birthdayIcon, emailIcon, phoneIcon} from '../../constants/icons';
import SettingsCard from '../../components/SettingsCard';

const Settings = () => {
  const {userData} = useContext(ApplicationContext);
  //   useEffect(() => {}, [third]);
  let list = [
    {
      icon: phoneIcon,
      value: userData.user.phonenumber,
    },
    {
      icon: emailIcon,
      value: userData.user.email,
    },
    {
      icon: birthdayIcon,
      value: moment(userData.user.date_of_birth).format('MMMM DD'),
    },
    {
      icon: phoneIcon,
      value: userData.user.phonenumber,
    },
    {
      icon: emailIcon,
      value: userData.user.email,
    },
    {
      icon: birthdayIcon,
      value: moment(userData.user.date_of_birth).format('MMMM DD'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.circleLiner}>
          <Image
            style={styles.image}
            source={{
              uri: `https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80`,
            }}
          />
        </View>
      </View>
      <View style={styles.profileName}>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            padding: 5,
            borderColor: 'white',
            borderRadius: 20,
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              marginRight: 2.5,
              fontFamily: FONTS.primaryFonts.bold,
              fontSize: SIZES.h4,
              color: 'white',
            }}>
            {userData.user.firstname} {userData.user.lastname}
          </Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <View
          style={{
            width: SIZES.width * 0.95,
            height: 70,
            flex: 1,
            justifyContent: 'center',
            // alignItems: 'center',
            marginTop: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              flex: 0.1,
              borderTopColor: 'white',
              borderBottomColor: 'white',
              padding: 5,
              borderWidth: 1,
              borderRightWidth: 0,
              borderLeftWidth: 0,
            }}>
            {/* Number of tasks */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: FONTS.primaryFonts.bold,
                  fontSize: SIZES.h3,
                  color: 'white',
                }}>
                415
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.primaryFonts.regular,
                  fontSize: SIZES.body4,
                  color: 'white',
                }}>
                Todos
              </Text>
            </View>
            {/* Line in the middle */}
            <View
              style={{height: 50, width: 1, backgroundColor: 'white'}}></View>
            {/* Number of Groups */}
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: FONTS.primaryFonts.bold,
                  fontSize: SIZES.h3,
                  color: 'white',
                }}>
                415
              </Text>
              <Text
                style={{
                  fontFamily: FONTS.primaryFonts.regular,
                  fontSize: SIZES.body4,
                  color: 'white',
                }}>
                Groups
              </Text>
            </View>
          </View>
          <View
            style={{
              //   height: SIZES.height * 0.6,
              flex: 0.9,
              //   backgroundColor: 'green',
              padding: 10,
              alignItems: 'center',
            }}>
            {/* <View
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
                  source={phoneIcon}
                  style={{tintColor: 'white', height: 30, width: 30}}
                />
              </View>
              <Text
                style={{
                  fontFamily: FONTS.primaryFonts.regular,
                  fontSize: SIZES.h3,
                  color: 'white',
                }}>
                {userData.user.phonenumber}
              </Text>
            </View> */}
            {list.map(data => {
              return <SettingsCard icon={data.icon} value={data.value} />;
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  profile: {
    flex: 1 / 5,
    backgroundColor: '#253334',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleLiner: {
    borderWidth: 0.5,
    borderColor: 'white',
    height: 110,
    width: 110,
    borderRadius: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  profileName: {
    flex: 0.25 / 5,
    backgroundColor: '#253334',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomPart: {
    flex: 3.75 / 5,
    backgroundColor: '#253334',
    alignItems: 'center',
  },
});
