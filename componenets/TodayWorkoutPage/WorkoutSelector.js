import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function WorkoutSelector() {
  return (
    <>
      <View style={styles.dayInfoBlock}>
        <Text style={styles.dayInfo}>Today is Chest Day</Text>
      </View>
      <View
        style={{
          flex: 1,
          width: '96%',
          aspectRatio: 8.2 / 1,

          position: 'absolute',
          alignSelf: 'center',

          flexDirection: 'row',
          justifyContent: 'space-evenly',
          top: '16.5%',
        }}>
        <View style={{flex: 2, maxWidth: '35%'}}>
          <SelectDropdown
            data={[
              'Barbell Chest Press',
              'Dumbell Chest Press',
              'Cable Fly',
              'Inclined Chest Press',
              'Dumbell Fly',
            ]}
            buttonStyle={{
              maxWidth: '100%',
              height: '100%',
              backgroundColor: '#D9D9D9',
              maxheight: '100%',
            }}
            buttonTextStyle={{fontSize: 15}}
            defaultButtonText={'Exercise'}
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
            // buttonTextAfterSelection={(selectedItem, index) => {
            //   // text represented after item is selected
            //   // if data array is an array of objects then return selectedItem.property to render after item is selected
            //   return selectedItem;
            // }}
            // rowTextForSelection={(item, index) => {
            //   // text represented for each item in dropdown
            //   // if data array is an array of objects then return item.property to represent item in dropdown
            //   return item;
            //}}
          />
        </View>
        <View style={{flex: 2, maxWidth: '30%'}}></View>
        <View style={{flex: 1, maxWidth: '20%'}}></View>
      </View>
    </>
  );
}
const styles = EStyleSheet.create({
  dayInfo: {
    fontWeight: '600',
    fontFamily: 'Poppins',
    fontSize: '1.1rem',
    color: '#646873',
  },
  dayInfoBlock: {
    flex: 1,
    position: 'absolute',
    top: '11%',
    left: '5%',
  },
});
