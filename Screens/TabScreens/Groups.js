import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useContext, useState, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {FONTS, SIZES} from '../../constants/theme';

import {ApplicationContext} from '../../App';
import {FloatingAction} from 'react-native-floating-action';
import {plusIcon} from '../../constants/icons';
import Fab from '../../components/Fab';
import Cards from '../../components/Cards';
import StatusBall from '../../components/StatusBall';
import {set} from 'mobx';
import apiCall from '../../utils/apiCall';

const actions = [
  {
    text: 'Create Group',
    icon: require('../../assets/images/group_icon.png'),
    name: 'bt_accessibility',
    position: 1,
  },
];

const Groups = () => {
  const {setIsLoggedIn, checkToken, getAllGroups} =
    useContext(ApplicationContext);
  let [groups, setGroups] = useState([]);
  const [modal, setModal] = useState(false);

  const [groupName, setGroupName] = useState('');
  const [buttonActive, setButtonActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const call = await getAllGroups();
        setGroups(call.data.reverse());
      };
      fetchData();
    }, 3000);
  }, [0]);

  const fabAction = useCallback(() => {
    fabAction1();
  }, [0]);
  const fabAction1 = () => {
    setModal(true);
  };
  const createGroup = async () => {
    const token = await AsyncStorage.getItem('token');
    const call = await apiCall.post(
      `https://accountability-app.herokuapp.com/api/v1/user/create-group`,
      {
        group_name: groupName,
        image:
          'https://images.unsplash.com/photo-1573496774426-fe3db3dd1731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      },
      token,
    );
    if (call.status === 200) {
      setGroups([call.data, ...groups]);
      setModal(false);
      setGroupName('');
    }
    if (call.status === 403) {
      setIsLoggedIn(false);
    }
  };
  return (
    <View style={styles.container}>
      {/* <Text style={styles.textStyle}>Groups</Text> */}
      <View style={styles.status}>
        <ScrollView
          style={styles.inStatusBox}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <StatusBall />
          <StatusBall />
          <StatusBall />
          <StatusBall />
          <StatusBall />
          <StatusBall />
          <StatusBall />
          <StatusBall />
          <StatusBall />
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollStyle}
        style={{flex: 0.89}}>
        {groups.length < 1 ? (
          <>
            <SkeletonPlaceholder borderRadius={4}>
              <SkeletonPlaceholder.Item
                justifyContent="center"
                alignItems="center">
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={SIZES.height / 4.5}
                  marginBottom={10}
                />
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={10}
                  marginBottom={5}
                />
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={10}
                  marginBottom={5}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder borderRadius={4}>
              <SkeletonPlaceholder.Item
                justifyContent="center"
                alignItems="center">
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={SIZES.height / 4.5}
                  marginBottom={10}
                />
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={10}
                  marginBottom={5}
                />
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={10}
                  marginBottom={5}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder borderRadius={4}>
              <SkeletonPlaceholder.Item
                justifyContent="center"
                alignItems="center">
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={SIZES.height / 4.5}
                  marginBottom={10}
                />
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={10}
                  marginBottom={5}
                />
                <SkeletonPlaceholder.Item
                  width={SIZES.width * 0.85}
                  height={10}
                  marginBottom={5}
                />
              </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
          </>
        ) : (
          groups.map(data => {
            return (
              <Cards
                image={data.image}
                key={data._id}
                group_name={data.group_name}
              />
            );
          })
        )}
      </ScrollView>
      <Modal transparent visible={modal}>
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
            Create Group
          </Text>
          <TextInput
            placeholder="Group Name"
            placeholderTextColor={'#253334'}
            onChangeText={value => setGroupName(value)}
            defaultValue={groupName}
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
            onPress={() => createGroup()}>
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
            onPress={() => setModal(!modal)}>
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
      </Modal>
      <Fab icon={plusIcon} fabFunction={fabAction} />
    </View>
  );
};

export default Groups;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#253334',
    justifyContent: 'center',
    alignItems: 'center',
    // padding: ,
  },
  textStyle: {
    color: 'white',
    fontFamily: FONTS.primaryFonts.regular,
    fontSize: SIZES.h2,
  },
  status: {
    flex: 0.11,
    width: SIZES.width * 0.95,
  },
  scrollStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'pink',
    padding: 5,
    width: SIZES.width,
  },
  inStatusBox: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    height: SIZES.height * 0.1,
    padding: 5,
    // backgroundColor: 'red',
  },
});
