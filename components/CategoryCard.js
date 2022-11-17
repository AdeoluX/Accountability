import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {FONTS, SIZES} from '../constants/theme';
import Todos from './Todos';
import CheckBox from '@react-native-community/checkbox';

const CategoryCard = ({navigation, name, created_at, todos, id}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.15,
          flexDirection: 'row',
          justifyContent: 'center',
          width: SIZES.width / 1.7,
          alignItems: 'center',
          borderBottomColor: 'white',
          borderBottomWidth: 0.5,
        }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontFamily: FONTS.primaryFonts.bold,
            margin: 2.5,
            color: 'white',
            flex: 1,
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.primaryFonts.bold,
            margin: 2.5,
            color: 'white',
          }}>
          {created_at}
        </Text>
      </View>
      <View
        style={{
          flex: 0.7,
          //   backgroundColor: 'white',
          paddingTop: 7,
          width: SIZES.width / 1.7,
        }}>
        {todos.length < 1 ? (
          <TouchableOpacity>
            <Text style={{fontFamily: FONTS.primaryFonts.bold, color: 'white'}}>
              Touch me to add tasks...
            </Text>
          </TouchableOpacity>
        ) : (
          todos.slice(0, 7).map(data => {
            return (
              <Todos
                key={data._id}
                value={data.status}
                task={data.description}
              />
            );
          })
        )}
      </View>
      <TouchableOpacity
        style={{
          flex: 0.15,
          width: SIZES.width / 1.7,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('TodoList', {_id: id, name});
        }}>
        <Text style={{fontFamily: FONTS.primaryFonts.bold, color: 'white'}}>
          Open Categories
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// const Todos = ({value, task}) => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         alignItems: 'center',
//         // borderBottomColor: 'white',
//         // borderBottomWidth: 0.5,
//       }}>
//       <CheckBox value={value} tintColors={{true: '#7C9A92', false: 'gray'}} />
//       <Text style={{fontFamily: FONTS.primaryFonts.bold, color: 'white'}}>
//         {task}
//       </Text>
//     </View>
//   );
// };

export default CategoryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width / 1.6,
    height: SIZES.width,
    backgroundColor: '#253334',
    // justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
});
