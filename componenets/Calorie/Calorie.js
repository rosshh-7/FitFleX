import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Bubbles from '../../drawables/assets/Bubbles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {enableScreens} from 'react-native-screens';
import NameTag from '../../drawables/assets/NameTag';
import {useForm} from 'react-hook-form';
import SelectDropdown from 'react-native-select-dropdown';
import DatePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import HistoryTable from './HistoryTable';
enableScreens();

export default function Calorie() {
  const [searchItem, setSearchItem] = useState('');
  const [date, setDate] = useState('Date');
  const [searchData, setSearchData] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

  const [quantity, setQuantity] = useState('');

  const searchHandler = itemSearched => {
    setSearchItem(itemSearched);
    setShowResult(true);
    if (itemSearched) {
      setSearchData([
        'rolled oats',
        'quaker oats proridge',
        'old-fashioned Oats',
        '2-mins oatmeal',
        'flat Oats',
        'Steel Cut Oats',
      ]);
    }
  };
  const onSelectHandler = itemSelected => {
    setSearchItem(itemSelected);
    setShowResult(false);
  };
  return (
    <>
      <NameTag Name={'Calorie Tracker'} />
      <Bubbles />
      <View style={styles.SearchBar}>
        <View style={styles.searchIcon}>
          <Icon name="search" size={30} color={'#000'}></Icon>
        </View>
        <View style={styles.inputSearch}>
          <TextInput
            style={styles.input}
            placeholder="Search here..."
            value={searchItem}
            onChangeText={item => {
              searchHandler(item);
            }}></TextInput>
        </View>
      </View>

      <View style={styles.formbody}>
        <View
          style={{
            flex: 1,
            maxWidth: '32%',

            flexDirection: 'column',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput
              style={styles.quantity}
              placeholder="Type here"
              value={quantity}
              keyboardType="numeric"
              onChangeText={item => {
                setQuantity(item);
              }}></TextInput>
          </View>

          <Text style={{flex: 1, fontSize: 13, padding: 3}}>Quantity</Text>
        </View>
        <View
          style={{
            maxWidth: '32%',
            flex: 1,
            borderRadius: 30,
            flexDirection: 'column',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1}}>
            <SelectDropdown
              data={['gm', 'oz']}
              buttonStyle={{
                maxWidth: '85%',
                borderRadius: 25,
                backgroundColor: '#D9D9D9',
                maxheight: '100%',
                padding: 10,
              }}
              buttonTextStyle={styles.optionFont}
              defaultButtonText={'Select Date'}
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
          <Text style={{flex: 1, fontSize: 13, padding: 3}}>Scale</Text>
        </View>
        <View
          style={{
            maxWidth: '32%',
            flex: 1,
            borderRadius: 30,
            flexDirection: 'column',

            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Pressable style={styles.block3} onPress={showDatePicker}>
            <Text style={styles.text}>{date}</Text>
          </Pressable>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
          <Text style={{flex: 1, fontSize: 13, padding: 3}}>Date</Text>
        </View>
      </View>
      {showResult ? (
        <View style={styles.searchResult}>
          <ScrollView>
            {searchData.length > 0
              ? searchData.map(d => (
                  //<TouchableOpacity key={d} onPress={() => onSelectHandler(d)}>
                  <View
                    key={d}
                    style={styles.searchResultItem}
                    onStartShouldSetResponder={() => {
                      onSelectHandler(d);
                    }}>
                    <Text>{d}</Text>
                  </View>
                  //</TouchableOpacity>
                ))
              : null}
          </ScrollView>
        </View>
      ) : null}
      <View style={styles.submitButton}>
        <Text style={styles.submitText}>Done</Text>
      </View>
      <View style={styles.tableHeading}>
        <Text style={styles.Heading}>Past History</Text>
      </View>
      <HistoryTable />
    </>
  );
}

const styles = EStyleSheet.create({
  SearchBar: {
    position: 'absolute',
    width: '88%',
    aspectRatio: 5.5 / 1,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    flex: 1,
    top: '14%',
    borderRadius: 42,
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
    elevation: Platform.OS === 'android' ? 51 : 0,
    zindex: 99,
  },
  searchIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputSearch: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 5,
    elevation: Platform.OS === 'android' ? 51 : 0,
    zindex: 99,
  },
  input: {
    borderBottomWidth: 1,
    width: '90%',
    fontSize: '1rem',
  },
  searchResult: {
    width: '74%',
    flex: 1,
    aspectRatio: 1.9 / 1,
    backgroundColor: 'red',
    position: 'absolute',
    zindex: 99,
    alignSelf: 'center',
    top: '23.3%',
    elevation: Platform.OS === 'android' ? 500 : 0,
    flexDirection: 'column',
    overflow: 'scroll',
  },
  searchResultItem: {
    flex: 1,
    width: '100%',
    aspectRatio: 7.5 / 1,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.7,
  },
  formbody: {
    width: '96%',
    // aspectRatio: 5.3 / 1,
    flex: 1,
    position: 'absolute',
    top: '24.5%',
    // backgroundColor: 'white',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: Platform.OS === 'android' ? 50 : 0,
  },

  quantity: {
    //flex: 2.5,

    padding: 10,

    backgroundColor: '#D9D9D9',
    fontSize: '1rem',
    borderRadius: 30,
    //alignSelf: 'center',
  },
  optionFont: {
    color: '#000',
    fontSize: '1rem',
  },
  block3: {
    flex: 1,
    height: '100%',
    padding: 14,
    width: '85%',
    backgroundColor: '#D9D9D9',

    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: '1.1rem',
    color: '#000',
  },
  submitButton: {
    flex: 1,
    aspectRatio: 7 / 1,
    position: 'absolute',
    // alignSelf: 'flex-end',
    top: '35%',
    right: '6%',
    backgroundColor: '#082B85',
    padding: 10,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#927B7B',
  },
  submitText: {
    fontSize: '1.1rem',
    color: '#fff',
  },
  tableHeading: {
    flex: 1,
    aspectRatio: 7 / 1,
    position: 'absolute',
    // alignSelf: 'flex-end',
    top: '41.5%',
    left: '2%',
    // backgroundColor: '#082B85',
    // padding: 10,
    // borderRadius: 24,
    // borderWidth: 2,
    // borderColor: '#927B7B',
  },
  Heading: {
    fontSize: '1.5rem',
    color: '#000',
    fontWeight: '600',
    fontFamily: 'Poppins',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
});
