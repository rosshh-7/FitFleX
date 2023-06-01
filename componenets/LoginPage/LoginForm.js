import {View, Text, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import SignUp from './SignUp';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function LoginForm() {
  const [showpass, SetShowPass] = useState(true);
  const [page, setPage] = useState(false);
  const onClick = () => {
    setPage(!page);
  };
  const onPasswordIconHandler = () => {
    console.log(showpass);
    SetShowPass(!showpass);
  };
  return !page ? (
    <View style={styles.loginBox}>
      <View style={[styles.inp, styles.shadowProp]}>
        <TextInput
          textAlign="center"
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Email"
          value={'asd'}></TextInput>
      </View>
      <View style={[styles.inpPass, styles.shadowProp]}>
        <View style={{flex: 1}}>
          <TextInput
            style={styles.input}
            textAlign="center"
            placeholderTextColor="#000"
            placeholder="Password"
            value={'asd'}
            secureTextEntry={showpass}></TextInput>
        </View>
        <View
          style={{
            position: 'absolute',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '12%',
            backgroundColor: '#949ca8',

            right: 15,
          }}>
          {showpass ? (
            <Icon
              size={24}
              name={'eye-slash'}
              color={'#000'}
              onPress={onPasswordIconHandler}></Icon>
          ) : (
            <Icon
              size={24}
              name={'eye'}
              color={'#000'}
              onPress={onPasswordIconHandler}></Icon>
          )}
        </View>
      </View>
      <Pressable
        style={[styles.submitBtn, styles.shadowProp]}
        onPress={() => console.warn('subnt')}>
        <Text style={styles.submitTxt}>Submit</Text>
      </Pressable>
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inp: {
    marginTop: 10,
    flex: 1,
    width: '65%',
    maxHeight: '10%',
    borderRadius: 30,
    overflow: 'hidden',
  },
  inpPass: {
    marginTop: 10,
    flex: 1,
    width: '65%',
    maxHeight: '10%',
    borderRadius: 30,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  submitBtn: {
    marginTop: 10,
    flex: 1,
    width: '28%',
    maxHeight: '8%',
    backgroundColor: '#082B85',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
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
  input: {
    backgroundColor: '#949ca8',
    width: '100%',
    height: '100%',
    color: '#000',
  },
  submitTxt: {
    color: '#fff',
    fontSize: '1rem',
  },
});
