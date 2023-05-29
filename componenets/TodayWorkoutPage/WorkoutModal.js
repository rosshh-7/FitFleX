import {View, Text, TextInput, ScrollView} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function WorkoutModal() {
  return (
    <>
      <View
        style={{
          flex: 1,
          width: '100%',
          maxHeight: '40%',
          backgroundColor: '#c3c6c9',
          //aspectRatio: 8.35 / 1,

          alignSelf: 'center',
        }}>
        <ScrollView>
          <View
            style={{
              width: '100%',
              aspectRatio: 8 / 1,
              flexDirection: 'row',
              flex: 1,
            }}>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.contentSize}>Barbell Chest Press</Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Date- 5/12/23</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              aspectRatio: 8.5 / 1,

              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>Weights (lbs)</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>Reps</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              aspectRatio: 8.5 / 1,

              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>80</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>20</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              aspectRatio: 8.5 / 1,

              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>100</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>15</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              aspectRatio: 8.5 / 1,

              flex: 1,
              flexDirection: 'row',
            }}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>120</Text>
            </View>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.contentSize}>10</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
const styles = EStyleSheet.create({
  weightInput: {
    flex: 3,
    maxWidth: '35%',
    height: '100%',

    justifyContent: 'center',
  },
  weightSelect: {
    flex: 2,
    maxWidth: '25%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightRemove: {
    flex: 1,
    //backgroundColor: 'red',
    maxWidth: '20%',
    height: '100%',
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weightinp: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#D9D9D9',
    fontSize: '1.2rem',
    color: '#000',
  },
  contentSize: {
    fontSize: '1rem',
    color: '#000',
  },
});
