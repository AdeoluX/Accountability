import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {inject, observer} from 'mobx-react';
import {FONTS} from './constants/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, SignUp, Splash, Home, TodoList} from './Screens';
import {ApplicationContext} from './App';

const Stack = createNativeStackNavigator();

// const data = useContext(ApplicationContext);

const Main = props => {
  const data = useContext(ApplicationContext);
  return (
    <>
      {data.isLoggedIn ? (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TodoList" component={TodoList} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default Main;

const styles = StyleSheet.create({});

{
  /* <>
      {user_data ? (
        <View>
          <Text style={{fontFamily: FONTS.primaryFonts.bold, color: 'red'}}>
            Login In
          </Text>
        </View>
      ) : (
        <View>
          <Text style={{fontFamily: FONTS.primaryFonts.bold, color: 'red'}}>
            Logged Out
          </Text>
        </View>
      )}
    </> */
}
