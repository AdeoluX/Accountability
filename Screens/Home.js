import React, {Component, useContext, useEffect} from 'react';
import {Image, View} from 'react-native';

import {ApplicationContext} from '../App';
import {COLORS, SIZES} from '../constants/theme';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import icons from '../constants/icons';

//declare tabs
const Tabs = createBottomTabNavigator();

//import Screens
import {Discover, Groups, Settings, Tasks} from './TabScreens';

const options = {
  showLabel: false,
  keyboardHidesTabBar: true,
  style: {
    height: 60,
    backgroundColor: 'red',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // shadowOpacity: 0.53,
    // shadowRadius: 13.97,
    // elevation: 21,
  },
};

// create a component
const Tab = () => {
  const {setIsLoggedIn, checkToken} = useContext(ApplicationContext);

  useEffect(() => {
    const fetchData = async () => {
      const token = await checkToken();
      alert(token);
      if (!token) {
        setIsLoggedIn(false);
      }
    };
    fetchData();
  }, [0]);
  return (
    <View
      style={{
        width: SIZES.width,
        height: SIZES.height,
      }}>
      <Tabs.Navigator
        //   tabBarOptions={options}
        screenOptions={({route}) => ({
          tabBarStyle: {
            backgroundColor: '#253334',
            height: 60,
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            const tintColor = focused ? 'white' : '#62757f';
            switch (route.name) {
              case 'Groups':
                return (
                  <Image
                    source={icons.groupIcon}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              case 'Tasks':
                return (
                  <Image
                    source={icons.splashImage}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 30,
                      height: 30,
                    }}
                  />
                );
              case 'Discover':
                return (
                  <Image
                    source={icons.discoverIcon}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 30,
                      height: 30,
                    }}
                  />
                );

              case 'Settings':
                return (
                  <Image
                    source={icons.gearIcon}
                    resizeMode="contain"
                    style={{
                      tintColor: tintColor,
                      width: 30,
                      height: 30,
                    }}
                  />
                );
            }
          },
        })}>
        <Tabs.Screen name="Groups" component={Groups} />
        <Tabs.Screen name="Tasks" component={Tasks} />
        <Tabs.Screen name="Discover" component={Discover} />
        <Tabs.Screen name="Settings" component={Settings} />
      </Tabs.Navigator>
    </View>
  );
};

//make this component available to the app
export default Tab;
