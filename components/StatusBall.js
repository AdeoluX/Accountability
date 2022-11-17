import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {defaultProfile} from '../constants/icons';

const StatusBall = ({profileImage}) => {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        borderWidth: 1,
        width: 60,
        marginRight: 5,
        borderRadius: 30,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={profileImage ?? defaultProfile}
        style={{height: 55, width: 55, borderRadius: 27}}
      />
    </TouchableOpacity>
  );
};

export default StatusBall;

const styles = StyleSheet.create({});
