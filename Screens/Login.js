import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {ApplicationContext} from '../App';
import React, {useContext} from 'react';
import {FONTS, SIZES} from '../constants/theme';
import {emailIcon, passwordIcon, splashImage} from '../constants/icons';
import Error from '../components/Error';

// import {inject, observer} from 'mobx-react';

const Login = ({navigation, route}) => {
  const {
    login,
    setEmail,
    setPassword,
    email,
    password,
    error,
    setError,
    processing,
    setProcessing,
    errorMessage,
  } = useContext(ApplicationContext);
  const closeError = () => {
    setError(false);
  };
  return (
    <View style={styles.container}>
      {/* Login Box */}
      <View style={styles.loginBox}>
        <Image
          source={splashImage}
          style={{tintColor: 'white', height: 50, width: 50, marginBottom: 40}}
        />
        <Text style={styles.textStyle}>Login</Text>
        <Text
          style={{
            fontFamily: FONTS.primaryFonts.regular,
            fontSize: 15,
            color: 'white',
            marginBottom: 15,
          }}>
          Log in now to access multiple accountability groups.
        </Text>
        <View style={styles.inputBox}>
          {/* <Image source={emailIcon} style={styles.emailIcon} /> */}
          <TextInput
            placeholder="Email Address"
            placeholderTextColor={'white'}
            onChangeText={newText => setEmail(newText)}
            defaultValue={email}
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              width: SIZES.width * 0.8,
              height: 50,
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
              color: 'white',
            }}
          />
        </View>
        <View style={styles.inputBox}>
          {/* <Image source={passwordIcon} style={styles.emailIcon} /> */}
          <TextInput
            placeholder="Password"
            placeholderTextColor={'white'}
            onChangeText={newText => setPassword(newText)}
            defaultValue={password}
            autoCapitalize="none"
            secureTextEntry
            style={{
              width: SIZES.width * 0.8,
              height: 50,
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
              color: 'white',
            }}
          />
        </View>
        <TouchableOpacity style={{alignSelf: 'flex-end', marginTop: 10}}>
          <Text
            style={{
              fontFamily: FONTS.primaryFonts.regular,
              fontSize: SIZES.h3,
              color: 'white',
            }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={login}
          disabled={processing}>
          {!processing ? (
            <Text
              style={{
                fontFamily: FONTS.primaryFonts.bold,
                fontSize: SIZES.h3,
                color: 'white',
              }}>
              LOGIN
            </Text>
          ) : (
            <Text
              style={{
                fontFamily: FONTS.primaryFonts.bold,
                fontSize: SIZES.h3,
                color: 'white',
              }}>
              Loading...
            </Text>
          )}
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
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                fontSize: 15,
                fontFamily: FONTS.primaryFonts.bold,
                marginLeft: 5,
                color: 'white',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={error} transparent style={{flex: 1}}>
        <Error close={closeError} error={errorMessage} />
      </Modal>
    </View>
  );
};

export default Login;

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
