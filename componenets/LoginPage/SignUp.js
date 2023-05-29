import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function SignUp(props) {
  const onClick = () => {
    props.onCall();
  };
  return (
    <View style={styles.loginBox}>
      <View style={styles.inp}></View>
      <View style={styles.inp}></View>
      <View style={styles.inp}></View>
      <View style={styles.inp1}>
        <View style={styles.dob}></View>
        <View style={styles.gender}></View>
      </View>
      <Pressable style={styles.submitBtn}></Pressable>
      <Text style={styles.signUp}>Don't have an account?</Text>
      <Pressable onPress={onClick}>
        <Text>SignUp Here!</Text>
      </Pressable>
    </View>
  );
}
const styles = EStyleSheet.create({
  loginBox: {
    flex: 4,
    position: 'absolute',
    width: '100%',
    height: '65%',
    top: '35%',
    //backgroundColor: 'white',

    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inp: {
    marginTop: 10,
    flex: 1,
    width: '65%',
    maxHeight: '10%',
    backgroundColor: 'yellow',
  },
  inp1: {
    marginTop: 10,
    flex: 1,
    width: '85%',
    maxHeight: '10%',
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dob: {
    flex: 1,
    maxWidth: '40%',
    backgroundColor: 'red',
  },
  gender: {
    flex: 1,
    maxWidth: '40%',
    backgroundColor: 'green',
  },

  submitBtn: {
    marginTop: 10,
    flex: 1,
    width: '28%',
    maxHeight: '8%',
    backgroundColor: 'yellow',
  },
});
