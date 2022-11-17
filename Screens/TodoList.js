import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {plusIcon} from '../constants/icons';
import {FONTS, SIZES} from '../constants/theme';
import apiCall from '../utils/apiCall';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todos from '../components/Todos';
import Fab from '../components/Fab';
import ModalScreen from '../components/Modal';

const TodoList = ({route, navigation}) => {
  let [todos, setTodos] = useState(null);
  let [modal, setModal] = useState(false);
  const [description, setDescription] = useState('');

  const {_id, name} = route.params;
  useEffect(() => {
    async function api() {
      getTodos();
    }
    api();
  }, [0]);

  const getTodos = async () => {
    const token = await AsyncStorage.getItem('token');
    const call = await apiCall.get(
      `https://accountability-app.herokuapp.com/api/v1/user/get-todos-for-category/${_id}`,
      token,
    );
    if (call.status === 200) {
      await setTodos(call.data.todo);
      console.log(JSON.stringify(call.data.todo));
    }
  };

  const updateStatus = useCallback(async (todo_id, value) => {
    const token = await AsyncStorage.getItem('token');
    const call = await apiCall.patch(
      `https://accountability-app.herokuapp.com/api/v1/user/update-todo/${todo_id}`,
      {status: value},
      token,
    );
    if (call.status === 200) {
      console.log('HERE');
      await getTodos();
    }
  });

  const createTask = useCallback(async (todo_id, value) => {
    const token = await AsyncStorage.getItem('token');
    console.log(token, name);
    const call = await apiCall.post(
      'https://accountability-app.herokuapp.com/api/v1/user/create-todo',
      {
        category: _id,
        description,
        image:
          'https://images.unsplash.com/photo-1659536540437-510ce63eb672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      },
      token,
    );
    if (call.status === 200) {
      // setCategories(...categories, call.data);
      //   await getAllCategories();
      setTodos([...todos, call.data]);
      setDescription('');
      setModal(!modal);
    }
  });

  const setterr = value => {
    setDescription(value);
  };

  const opp_modal = () => {
    setModal(!modal);
  };
  return (
    <View style={styles.container}>
      <View
        style={{flex: 1 / 7, justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: FONTS.primaryFonts.bold,
            fontSize: SIZES.h2,
            color: 'white',
          }}>
          {name}
        </Text>
        <View
          style={{
            borderWidth: 0.25,
            borderColor: 'white',
            width: SIZES.width * 0.7,
            marginTop: 5,
          }}></View>
      </View>
      <View style={{flex: 6 / 7, padding: 10}}>
        {todos ? (
          todos.map(data => {
            return (
              <Todos
                task={data.description}
                value={data.status}
                key={data._id}
                textColor={'white'}
                textSize={SIZES.h3}
                checkBoxFunction={() => updateStatus(data._id, !data.status)}
              />
            );
          })
        ) : (
          <Text>No Todos</Text>
        )}
      </View>
      <Fab icon={plusIcon} fabFunction={opp_modal} />
      <Modal visible={modal}>
        <ModalScreen
          defaultValue={description}
          modalValue={modal}
          placeholder={'Create Task'}
          setter={setterr}
          modaltrigger={opp_modal}
          whatToCreate={'Task'}
          createFunction={createTask}
        />
      </Modal>
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#253334',
  },
});
