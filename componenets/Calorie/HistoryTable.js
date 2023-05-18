import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function HistoryTable() {
  const tableHead = ['Head', 'Head2', 'Head3'];
  const widthArr = [windowWidth / 3, windowWidth / 3, windowWidth / 3];
  const windowWidth = Dimensions.get('window').width;
  let tableData = [];
  for (let i = 0; i < 5; i += 1) {
    const rowData = [];
    for (let j = 0; j < 9; j += 1) {
      rowData.push(`${i}${j}`);
    }
    tableData.push(rowData);
  }

  return (
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
        <View style={styles.TableheadText1}></View>
        <View style={styles.TableheadText2}></View>
        <View style={styles.TableheadText3}></View>
      </View>
      <View style={styles.tableBody}>
        <View style={[styles.tableRow, styles.bgcolor1]}>
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
        <View style={[styles.tableRow, styles.bgcolor2]}>
          {/* 2 */}
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
        <View style={[styles.tableRow, styles.bgcolor1]}>
          {/* 3 */}
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
        <View style={[styles.tableRow, styles.bgcolor2]}>
          {/* 4 */}
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
        <View style={[styles.tableRow, styles.bgcolor1]}>
          {/* 5 */}
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
        <View style={[styles.tableRow, styles.bgcolor2]}>
          {/* 6 */}
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
        <View style={[styles.tableRow, styles.bgcolor1]}>
          {/* 7 */}
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
        <View style={[styles.tableRow, styles.bgcolor2]}>
          {/* 8 */}
          <View style={styles.TableBodyText1}></View>
          <View style={styles.TableBodyText2}></View>
          <View style={styles.TableBodyText3}></View>
        </View>
      </View>
    </View>
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
    backgroundColor: 'blue',
  },
  TableheadText1: {
    flex: 1.2,
  },
  TableheadText2: {
    flex: 1.2,
  },
  TableheadText3: {
    flex: 1.5,
  },
  TableBodyText1: {
    flex: 1.2,
  },
  TableBodyText2: {
    flex: 1.2,
  },
  TableBodyText3: {
    flex: 1.5,
  },
  tableRow: {
    //flex: 1,
    width: '100%',
    //maxHeight: '12%',
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
});
