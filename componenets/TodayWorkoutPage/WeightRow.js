import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function WeightRow() {
  return (
    <View
      style={{
        flex: 1,

        aspectRatio: 8.35 / 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}>
      <View style={styles.weightInput}>
        <TextInput
          textAlign="center"
          style={styles.weightinp}
          placeholder="type here"
          value={'0'}
          keyboardType="numeric"
          // onChangeText={item => {
          //   setQuantity(item);
          // }}
        ></TextInput>
      </View>
      <View style={styles.weightSelect}>
        <TextInput
          editable={false}
          // /selectTextOnFocus={false}
          textAlign="center"
          style={styles.weightinp}
          placeholder="type here"
          value={'50'}
          keyboardType="numeric"
          // onChangeText={item => {
          //   setQuantity(item);
          // }}
        ></TextInput>
      </View>
      <View style={styles.weightRemove}>
        <Icon name={'minus-circle'} color={'red'} size={30} />
      </View>
    </View>
  );
}
const styles = EStyleSheet.create({
  weightInput: {
    flex: 3,
    maxWidth: '35%',
    height: '100%',

    justifyContent: 'center',
  },
  weightSelect: {
    flex: 2,
    maxWidth: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightRemove: {
    flex: 1,
    //backgroundColor: 'red',
    maxWidth: '20%',
    height: '100%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightinp: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#D9D9D9',
    fontSize: '1.2rem',
    color: '#000',
  },
});
