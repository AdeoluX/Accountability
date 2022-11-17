import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Tab1 = () => {
  return (
    <View style={styles.container}>
      <Text>Tab1</Text>
    </View>
  );
};

export default Tab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#253334',
  },
});
