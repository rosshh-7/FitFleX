import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import LoginForm from './LoginForm';

export default function LoginMain() {
  return (
    <>
      <View style={[styles.upperBox, styles.shadowProp]}></View>
      <LoginForm />
    </>
  );
}
const styles = EStyleSheet.create({
  upperBox: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '35%',
    backgroundColor: 'blue',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: -2,
    //   height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.0,
    // elevation: 20,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 20,
  },
  loginBox: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '65%',
    top: '35%',
    backgroundColor: 'green',
    flexDirection: 'column',
  },
});
