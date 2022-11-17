import {StyleSheet, Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';

const Todos = ({value, task, textColor, textSize, checkBoxFunction}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // borderBottomColor: 'white',
        // borderBottomWidth: 0.5,
      }}>
      <CheckBox
        value={value}
        tintColors={{true: '#7C9A92', false: 'gray'}}
        onValueChange={checkBoxFunction}
      />
      <Text
        style={{
          fontFamily: FONTS.primaryFonts.bold,
          color: textColor ?? 'white',
          fontSize: textSize ?? SIZES.h3,
        }}>
        {task}
      </Text>
    </View>
  );
};

export default Todos;

const styles = StyleSheet.create({});
