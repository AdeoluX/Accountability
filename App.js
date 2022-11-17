import {StyleSheet, Text, View, LogBox} from 'react-native';
import React, {useContext, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import apiCall from './utils/apiCall';
const ApplicationContext = React.createContext();
import Main from './Main';
import {base_url} from './constants/theme';

const App = () => {
  const [email, setEmail] = useState('');
  const [userData, setUserData] = useState(null);
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [groups, setGroups] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  async function login() {
    try {
      setProcessing(true);
      const response = await apiCall.post(`${base_url}/auth/login`, {
        email,
        password,
      });
      if (response.status === 200) {
        setProcessing(false);
        setUserData(response.data);
        await AsyncStorage.setItem('token', response.data.access_token);
        setIsLoggedIn(true);
      } else {
        await setErrorMessage(response.message);
        setProcessing(false);
        setError(true);
      }
    } catch (e) {
      setProcessing(false);
      setError(true);
    }
  }
  function signUp() {}
  const checkToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (!token) return false;
    if (token) return true;
  };

  const getAllGroups = async () => {
    try {
      setProcessing(true);
      const url = `${base_url}/user/get-all-groups`;
      const token = await AsyncStorage.getItem('token');
      const response = await apiCall.get(url, token);
      if (response.status === 200) {
        setProcessing(false);
        return response;
      } else {
        setProcessing(false);
      }
    } catch (e) {
      setProcessing(false);
      setError(true);
    }
  };
  return (
    // <>
    <ApplicationContext.Provider
      value={{
        email,
        setEmail,
        setPassword,
        password,
        login,
        signUp,
        isLoggedIn,
        setIsLoggedIn,
        userData,
        setUserData,
        checkToken,
        getAllGroups,
        groups,
        processing,
        setProcessing,
        error,
        setError,
        errorMessage,
        setErrorMessage,
      }}>
      <Main />
    </ApplicationContext.Provider>
    // </>
  );
};

export {App, ApplicationContext};

const styles = StyleSheet.create({});
