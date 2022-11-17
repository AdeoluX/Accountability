import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useCallback, useContext} from 'react';
import {base_url, FONTS, SIZES} from '../../constants/theme';
import CategoryCard from '../../components/CategoryCard';
import apiCall from '../../utils/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {ApplicationContext} from '../../App';
import moment from 'moment/moment';
import ModalScreen from '../../components/Modal';
import Error from '../../components/Error';

const Tasks = ({navigation}) => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [modal, setModal] = useState(false);
  const {
    error,
    setError,
    processing,
    setProcessing,
    errorMessage,
    setErrorMessage,
  } = useContext(ApplicationContext);
  useEffect(() => {
    const fetchData = async () => {
      const call = await getAllCategories();
    };
    fetchData();
  }, [0]);

  const getAllCategories = async () => {
    try {
      console.log('Yoooo');
      const token = await AsyncStorage.getItem('token');
      const call = await apiCall.get(
        base_url + '/user/get-all-categories',
        token,
      );
      if (call.status === 200) {
        setCategories(call.data);
      } else {
        setErrorMessage(call.message);
        setError(true);
      }
    } catch (e) {
      setErrorMessage(e.message);
      setError(true);
    }
  };

  const createCategory = useCallback(async () => {
    const token = await AsyncStorage.getItem('token');
    console.log(token, name);
    const call = await apiCall.post(
      base_url + '/user/create-category',
      {
        name,
        image:
          'https://images.unsplash.com/photo-1659536540437-510ce63eb672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      token,
    );
    if (call.status === 200) {
      // setCategories(...categories, call.data);
      await getAllCategories();
      setName('');
      setModal(!modal);
    }
  });

  const setterr = value => {
    setName(value);
  };

  const opp_modal = () => {
    setModal(!modal);
  };

  const closeError = () => {
    setError(false);
  };

  const swipeDown = gestureState => {};

  async function onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_DOWN:
        await getAllCategories();
        break;
    }
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };
  return (
    <View
      style={styles.container}
      // onSwipe={(direction, state) => onSwipe(direction, state)}
      // onSwipeDown={() => getAllCategories()}
      // config={config}
    >
      <View style={styles.upper}>
        <Text style={styles.testStyle}>Task</Text>
        <Text style={{...styles.testStyle, color: 'gray'}}>Categories</Text>
      </View>
      <View style={styles.upper}>
        <TouchableOpacity
          style={styles.createCategroyButton}
          onPress={() => setModal(true)}>
          <Text style={{fontSize: 25}}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerPart}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {categories.length < 1 ? (
            <>
              <Text>Loading...</Text>
            </>
          ) : (
            categories.map(data => {
              return (
                <CategoryCard
                  navigation={navigation}
                  key={data._id}
                  name={data.name}
                  created_at={moment(data.created_at).format('MM/DD/YYYY')}
                  todos={data.todo}
                  id={data._id}
                />
              );
            })
          )}
        </ScrollView>
      </View>
      <Modal transparent visible={modal}>
        <ModalScreen
          setter={setterr}
          defaultValue={name}
          modalValue={modal}
          whatToCreate={'Category'}
          createFunction={createCategory}
          placeholder={'Category Name'}
          modaltrigger={opp_modal}
        />
      </Modal>
      <Modal visible={error}>
        <Error error={errorMessage} close={closeError} />
      </Modal>
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 0.15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testStyle: {
    fontFamily: FONTS.primaryFonts.bold,
    fontSize: SIZES.h2,
    margin: 5,
    color: '#253334',
  },
  createCategroyButton: {
    borderWidth: 0.5,
    width: 65,
    height: 65,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerPart: {
    flex: 0.7,
    // backgroundColor: 'lightblue',
  },
});
