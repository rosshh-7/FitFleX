import {View, Text, Pressable, TextInput} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function SignUp(props) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [showpass, SetShowPass] = useState(true);
  const [date, setDate] = useState('Date');

  const onClick = () => {
    props.onCall();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn('A date has been picked: ', date);
    hideDatePicker();
    let tempDate = new Date(date);
    let showdate =
      tempDate.getMonth() +
      1 +
      '-' +
      tempDate.getDate() +
      '-' +
      tempDate.getFullYear();
    setDate(showdate);
  };
  const onPasswordIconHandler = () => {
    console.log(showpass);
    SetShowPass(!showpass);
  };
  return (
    <View style={styles.loginBox}>
      <View style={[styles.inp, styles.shadowProp]}>
        <TextInput
          textAlign="center"
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="First Name"
          value={''}></TextInput>
      </View>
      <View style={[styles.inp, styles.shadowProp]}>
        <TextInput
          textAlign="center"
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Last Name"
          value={''}></TextInput>
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
      <View style={[styles.inp1, styles.shadowProp]}>
        <Pressable
          style={[styles.dob, styles.shadowProp]}
          onPress={showDatePicker}>
          <Text style={styles.text}>{date}</Text>
        </Pressable>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <View style={[styles.gender, styles.shadowProp]}>
          <SelectDropdown
            data={['gm', 'oz']}
            buttonStyle={[styles.select, styles.shadowProp]}
            buttonTextStyle={styles.optionFont}
            defaultButtonText={'Gender'}
            dropdownStyle={{backgroundColor: '#949ca8'}}
            renderDropdownIcon={isOpened => {
              return (
                <Icon
                  name={isOpened ? 'chevron-up' : 'chevron-down'}
                  color={'#444'}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={'right'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
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
    //  / backgroundColor: 'yellow',
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
  inp1: {
    marginTop: 10,
    flex: 1,
    width: '85%',
    maxHeight: '10%',
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  dob: {
    flex: 1,
    maxWidth: '40%',
    backgroundColor: '#949ca8',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#000',
    //backgroundColor: 'red',
  },
  gender: {
    flex: 1,
    maxWidth: '40%',
    // /backgroundColor: 'green',
  },

  input: {
    backgroundColor: '#949ca8',
    width: '100%',
    height: '100%',
    color: '#000',
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
  submitTxt: {
    color: '#fff',
    fontSize: '1rem',
  },
  signUp: {
    marginTop: 15,
  },
  text: {
    fontSize: '0.95rem',
    color: '#000',
  },
  optionFont: {
    backgroundColor: '#949ca8',
    color: '#000',
    fontSize: '1rem',
  },
  select: {
    maxWidth: '100%',
    borderRadius: 25,
    backgroundColor: '#949ca8',
    height: '100%',
  },
});
