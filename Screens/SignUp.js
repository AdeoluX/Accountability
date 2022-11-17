import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';
import {emailIcon, passwordIcon, splashImage} from '../constants/icons';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Login Box */}
      <View style={styles.loginBox}>
        <Image
          source={splashImage}
          style={{tintColor: 'white', height: 50, width: 50, marginBottom: 40}}
        />
        <Text style={styles.textStyle}>SignUp</Text>
        <Text
          style={{
            fontFamily: FONTS.primaryFonts.regular,
            fontSize: 15,
            color: 'white',
            marginBottom: 15,
          }}>
          Sign Up now for free and make productive bonds.
        </Text>
        <View style={styles.inputBox}>
          {/* <Image source={emailIcon} style={styles.emailIcon} /> */}
          <TextInput
            placeholder="First Name"
            placeholderTextColor={'white'}
            style={{
              width: SIZES.width * 0.8,
              height: 50,
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
            }}
          />
        </View>
        <View style={styles.inputBox}>
          {/* <Image source={emailIcon} style={styles.emailIcon} /> */}
          <TextInput
            placeholder="Last Name"
            placeholderTextColor={'white'}
            style={{
              width: SIZES.width * 0.8,
              height: 50,
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
            }}
          />
        </View>
        <View style={styles.inputBox}>
          {/* <Image source={emailIcon} style={styles.emailIcon} /> */}
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'white'}
            style={{
              width: SIZES.width * 0.8,
              height: 50,
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
            }}
          />
        </View>
        <View style={styles.inputBox}>
          {/* <Image source={passwordIcon} style={styles.emailIcon} /> */}
          <TextInput
            placeholder="Password"
            placeholderTextColor={'white'}
            secureTextEntry
            style={{
              width: SIZES.width * 0.8,
              height: 50,
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
            }}
          />
        </View>

        <View style={styles.inputBox}>
          {/* <Image source={passwordIcon} style={styles.emailIcon} /> */}
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor={'white'}
            secureTextEntry
            style={{
              width: SIZES.width * 0.8,
              height: 50,
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
            }}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              fontFamily: FONTS.primaryFonts.bold,
              fontSize: SIZES.h3,
              color: 'white',
            }}>
            SIGN UP
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: FONTS.primaryFonts.regular,
              color: 'white',
            }}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: FONTS.primaryFonts.bold,
                marginLeft: 5,
                color: 'white',
              }}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 35,
    backgroundColor: '#253334',
  },
  loginBox: {
    height: SIZES.height * 0.75,
    width: SIZES.width * 0.9,
    justifyContent: 'center',
    padding: 5,
  },
  textStyle: {
    fontSize: SIZES.h1,
    fontFamily: FONTS.primaryFonts.bold,
    color: 'white',
  },
  inputBox: {
    flexDirection: 'row',
    borderColor: 'white',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    marginTop: 10,
  },
  emailIcon: {
    height: 25,
    width: 25,
    tintColor: 'white',
    marginRight: 2,
  },
  button: {
    height: 60,
    marginTop: 50,
    backgroundColor: '#7C9A92',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});
