import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';

const ModalScreen = ({
  setter,
  defaultValue,
  createFunction,
  modalValue,
  whatToCreate,
  modaltrigger,
  placeholder,
}) => {
  return (
    <View
      style={{
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 40,
        marginBottom: 40,
        marginHorizontal: 10,
        borderRadius: 10,
      }}>
      <Text
        style={{
          marginBottom: 40,
          color: '#253334',
          fontSize: SIZES.h2,
          fontFamily: FONTS.primaryFonts.bold,
        }}>
        Create {whatToCreate}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#253334'}
        onChangeText={value => setter(value)}
        defaultValue={defaultValue}
        style={{
          fontFamily: FONTS.primaryFonts.bold,
          fontSize: SIZES.h3,
          width: SIZES.width * 0.85,
          borderColor: '#253334',
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
        }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#253334',
          width: SIZES.width * 0.85,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 40,
          borderRadius: 10,
        }}
        onPress={() => createFunction()}>
        <Text
          style={{
            fontSize: SIZES.h3,
            color: 'white',
            fontFamily: FONTS.primaryFonts.bold,
          }}>
          Create
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#9a0007',
          position: 'absolute',
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          right: 10,
          top: 10,
          borderRadius: 20,
        }}
        onPress={() => modaltrigger()}>
        <Text
          style={{
            color: 'white',
            fontFamily: FONTS.primaryFonts.bold,
            fontSize: SIZES.h3,
          }}>
          X
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({});
