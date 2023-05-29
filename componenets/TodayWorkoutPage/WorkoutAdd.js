import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import SelectDropdown from 'react-native-select-dropdown';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import DefaultModalContent from './WorkoutModal';
export default function WorkoutAdd() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <View
        style={{
          flex: 1,
          width: '96%',
          aspectRatio: 3 / 1,

          position: 'absolute',
          alignSelf: 'center',
          top: '24.5%',
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.selectedExercise}> Barbell Chest Press</Text>
          </View>
          <View
            style={{
              flex: 2,
              alignItems: 'flex-start',
              justifyContent: 'center',
              //backgroundColor: '#082B85',
            }}>
            <Icon
              name={'history'}
              style={styles.historyIcon}
              color={'#fff'}
              onPress={() => setVisible(true)}></Icon>
          </View>
        </View>
        <View
          style={{
            flex: 1,

            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View style={{flex: 3, maxWidth: '35%'}}>
            <TextInput
              textAlign="center"
              style={styles.weightinp1}
              placeholder="type here"
              value={'0'}
              keyboardType="numeric"
              // onChangeText={item => {
              //   setQuantity(item);
              // }}
            ></TextInput>
          </View>
          <View style={{flex: 2, maxWidth: '30%'}}>
            <SelectDropdown
              data={[
                '1',
                '2',
                '3',
                '4',
                '5',
                '6',
                '7',
                '8',
                '9',
                '10',
                '11',
                '12',
                '13',
                '14',
                '15',
                '16',
              ]}
              buttonStyle={{
                maxWidth: '100%',
                //maxHeight: '100%',
                backgroundColor: '#D9D9D9',
                maxHeight: '100%',
              }}
              buttonTextStyle={{fontSize: 15}}
              defaultButtonText={'Reps'}
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
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item;
              }}
            />
          </View>
          <View style={{flex: 1, maxWidth: '20%'}}></View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 2}}></View>
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'flex-end',
            }}>
            <MaterialIcons
              name={'cancel'}
              style={styles.canIcon}
              color={'red'}></MaterialIcons>
          </View>
          <View
            style={{
              flex: 1,

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons
              name={'md-checkmark-done-circle-sharp'}
              style={styles.canIcon}
              color={'green'}></Ionicons>
          </View>
        </View>
      </View>
      <Modal
        testID={'modal'}
        isVisible={visible}
        onBackdropPress={() => setVisible(false)}>
        <DefaultModalContent />
      </Modal>
    </>
  );
}
const styles = EStyleSheet.create({
  selectedExercise: {
    color: '#000',
    fontSize: '1.2rem',
  },
  weightinp1: {
    width: '100%',
    maxHeight: '100%',
    backgroundColor: '#D9D9D9',
    fontSize: '1.2rem',
  },
  canIcon: {
    fontSize: '2.8rem',
  },
  historyIcon: {
    fontSize: '1.5rem',
    backgroundColor: '#082B85',
    padding: 7,
    borderRadius: 50,
  },
});
