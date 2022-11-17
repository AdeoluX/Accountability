import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const Fab = ({icon, fabFunction}) => {
  return (
    <TouchableOpacity style={styles.fabStyle} onPress={fabFunction}>
      <Image
        source={icon}
        style={{tintColor: 'white', width: 30, height: 30}}
      />
    </TouchableOpacity>
  );
};
export default Fab;

const styles = StyleSheet.create({
  fabStyle: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    bottom: 15,
    alignItems: 'center',
    backgroundColor: '#7C9A92',
    right: 15,
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});
