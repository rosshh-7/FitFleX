import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import SignUp from './SignUp';
export default function LoginForm() {
  const [page, setPage] = useState(false);
  const onClick = () => {
    setPage(!page);
  };
  return !page ? (
    <View style={styles.loginBox}>
      <View style={[styles.inp, styles.shadowProp]}></View>
      <View style={[styles.inp, styles.shadowProp]}></View>
      <View style={[styles.submitBtn, styles.shadowProp]}></View>
      <Text style={styles.signUp}>Don't have an account?</Text>
      <Pressable onPress={onClick}>
        <Text>SignUp Here!</Text>
      </Pressable>
    </View>
  ) : (
    <SignUp onCall={onClick} />
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
  submitBtn: {
    marginTop: 10,
    flex: 1,
    width: '28%',
    maxHeight: '8%',
    backgroundColor: 'yellow',
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
  signUp: {
    marginTop: 15,
  },
});
