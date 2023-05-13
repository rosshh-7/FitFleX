import {View, Text, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Bubbles from '../../drawables/assets/Bubbles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {enableScreens} from 'react-native-screens';
import NameTag from '../../drawables/assets/NameTag';

enableScreens();

export default function Calorie() {
  const [searchItem, setSearchItem] = useState('');
  const [searchData, setSearchData] = useState([]);
  const searchHandler = itemSearched => {
    console.log(itemSearched);
    if (searchItem) {
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
              setSearchItem(item);
              searchHandler(item);
            }}></TextInput>
        </View>
        dsd
      </View>
      <View style={styles.searchResult}>
        <ScrollView>
          {searchData.length > 0
            ? searchData.map(d => {
                return (
                  <View
                    style={styles.searchResultItem}
                    key={d}
                    onPress={() => onSelectHandler(d)}>
                    <Text>{d}</Text>
                  </View>
                );
              })
            : null}
        </ScrollView>
      </View>
    </>
  );
}

const styles = EStyleSheet.create({
  SearchBar: {
    position: 'absolute',
    width: '88%',
    aspectRatio: 4.9 / 1,
    backgroundColor: '#D9D9D9',
    alignSelf: 'center',
    flex: 1,
    top: '18%',
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
    // /position: 'absolute',
    //fontSize: '2rem',
    //backgroundColor: 'green',
  },

  inputSearch: {
    flex: 4,
    //backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 5,
    elevation: Platform.OS === 'android' ? 51 : 0,
    zindex: 99,
  },
  input: {
    //backgroundColor: 'purple',
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
    top: '27.3%',
    elevation: Platform.OS === 'android' ? 50 : 0,
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
    //color: '#000',
  },
});
