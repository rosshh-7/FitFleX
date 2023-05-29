import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function HistoryTable() {
  const [pageNumber, setPageNumber] = useState(1);

  let tableData = [
    {
      date: '2017-01-03',
      totcal: '1500',
    },
    {
      date: '2017-01-04',
      totcal: '1600',
    },
    {
      date: '2017-01-05',
      totcal: '1700',
    },
    {
      date: '2017-01-06',
      totcal: '1800',
    },
    {
      date: '2017-01-07',
      totcal: '1900',
    },
    {
      date: '2017-01-08',
      totcal: '2000',
    },
    {
      date: '2017-01-09',
      totcal: '2100',
    },
    {
      date: '2017-01-10',
      totcal: '2200',
    },
    {
      date: '2017-01-11',
      totcal: '2300',
    },
    {
      date: '2017-01-12',
      totcal: '2400',
    },
    {
      date: '2017-01-13',
      totcal: '2500',
    },
    {
      date: '2017-01-14',
      totcal: '2600',
    },
    {
      date: '2017-01-15',
      totcal: '2700',
    },
    {
      date: '2017-01-16',
      totcal: '2800',
    },
    {
      date: '2017-01-17',
      totcal: '2900',
    },
    {
      date: '2017-01-18',
      totcal: '3000',
    },
    {
      date: '2017-01-19',
      totcal: '3100',
    },

    {
      date: '2017-01-20',
      totcal: '3200',
    },
    {
      date: '2017-01-21',
      totcal: '3300',
    },
    {
      date: '2017-01-22',
      totcal: '3400',
    },

    {
      date: '2017-01-23',
      totcal: '3500',
    },
    {
      date: '2017-01-24',
      totcal: '3600',
    },
    {
      date: '2017-01-25',
      totcal: '3700',
    },

    {
      date: '2017-01-26',
      totcal: '3800',
    },
    {
      date: '2017-01-27',
      totcal: '3900',
    },
    {
      date: '2017-01-28',
      totcal: '4000',
    },
    {
      date: '2017-01-29',
      totcal: '4100',
    },
    {
      date: '2017-01-30',
      totcal: '4200',
    },
    {
      date: '2017-01-31',
      totcal: '4300',
    },

    {
      date: '2017-01-32',
      totcal: '4400',
    },
    {
      date: '2017-01-33',
      totcal: '4500',
    },
  ];

  let n = tableData.length;
  //console.warn(n);
  let page;
  if (n % 8 == 0) {
    page = n / 8;
  } else {
    page = Math.floor(n / 8) + 1;
  }
  // console.warn(page);
  return (
    <>
      <View
        style={{
          width: '100%',
          flex: 1,
          aspectRatio: 1.55 / 1,
          //backgroundColor: 'red',
          position: 'absolute',
          top: '46%',
          flexDirection: 'column',
        }}>
        <View style={styles.tableHeading}>
          <View style={styles.TableheadText1}>
            <Text style={{color: '#fff'}}> Date</Text>
          </View>
          <View style={styles.TableheadText2}>
            <Text style={{color: '#fff'}}>Total Calories</Text>
          </View>
          <View style={styles.TableheadText3}>
            <Text style={{color: '#fff'}}>Options</Text>
          </View>
        </View>
        <View style={styles.tableBody}>
          {page > 0
            ? tableData
                .slice((pageNumber - 1) * 8, pageNumber * 8)
                .map((data, index) => {
                  console.log(pageNumber);
                  return (
                    <View
                      style={[styles.tableRow].concat(
                        index % 2 ? [styles.bgcolor2] : [styles.bgcolor1],
                      )}
                      key={data.date}>
                      <View style={styles.TableBodyText1}>
                        <Text
                          style={index % 2 ? {color: '#fff'} : {color: '#000'}}>
                          {data.date}
                        </Text>
                      </View>
                      <View style={styles.TableBodyText2}>
                        <Text
                          style={index % 2 ? {color: '#fff'} : {color: '#000'}}>
                          {data.totcal}
                        </Text>
                      </View>
                      <View style={styles.TableBodyText3}>
                        <Icon
                          name={'trash'}
                          size={20}
                          color={'#000'}
                          onPress={() =>
                            console.log((pageNumber - 1) * 8 + index)
                          }
                        />
                        <Icon name={'pen'} size={20} color={'#000'} />
                        <Icon name={'bars'} size={20} color={'#000'} />
                      </View>
                    </View>
                  );
                })
            : null}
        </View>
      </View>
      <View style={styles.pagination}>
        {pageNumber == 1 ? (
          <Pressable
            disabled={true}
            onPress={() => console.warn('previous ')}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'angle-left'} color={'#fff'} size={18} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setPageNumber(pageNumber - 1)}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name={'angle-left'} color={'#000'} size={18} />
          </Pressable>
        )}
        <View
          style={{
            flex: 1,
            backgroundColor: '#646873',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.paginationfont}> {pageNumber}</Text>
        </View>

        {pageNumber == page ? (
          <Pressable
            disabled={true}
            onPress={() => setPageNumber(pageNumber + 1)}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={'angle-right'} color={'#fff'} size={18} />
          </Pressable>
        ) : (
          <Pressable
            onPress={() => setPageNumber(pageNumber + 1)}
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Icon name={'angle-right'} color={'#000'} size={18} />
          </Pressable>
        )}
      </View>
    </>
  );
}

const styles = EStyleSheet.create({
  tableHeading: {
    flex: 0.7,
    backgroundColor: '#082B85',
    flexDirection: 'row',
  },
  tableBody: {
    flex: 4,
    backgroundColor: 'green',
  },
  TableheadText1: {
    flex: 1.2,
    alignItems: 'center',

    justifyContent: 'center',
  },
  TableheadText2: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TableheadText3: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TableBodyText1: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TableBodyText2: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TableBodyText3: {
    flex: 1.5,
    alignItems: 'center',
    //justifyContent: 'center',

    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  tableRow: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    borderWidth: 0.4,
  },
  bgcolor1: {
    backgroundColor: '#fff',
  },
  bgcolor2: {
    backgroundColor: '#646873',
  },
  pagination: {
    flex: 1,
    maxWidth: '55%',
    aspectRatio: 4.5 / 1,
    position: 'absolute',
    // alignSelf: 'flex-end',
    bottom: '16%',
    right: '2%',
    //backgroundColor: 'blue',
    flexDirection: 'row',
  },
  paginationfont: {
    fontSize: '1.4rem',
    color: '#000',
  },
});
