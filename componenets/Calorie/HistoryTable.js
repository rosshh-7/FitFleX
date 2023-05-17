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
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table style={{flex: 1}}>
            <Row
              data={tableHead}
              widthArr={widthArr}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={widthArr}
                  style={[
                    styles.row,
                    index % 2 && {backgroundColor: '#F7F6E7'},
                  ]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = EStyleSheet.create({
  container: {flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff'},
  header: {height: 50, backgroundColor: '#537791'},
  text: {textAlign: 'center', fontWeight: '100'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor: '#E7E6E1'},
});
