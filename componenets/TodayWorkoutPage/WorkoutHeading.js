import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function WorkoutHeading() {
  return (
    <>
      <View style={styles.exerciseHeading}>
        <View style={styles.exerciseName}>
          <Text style={styles.exerciseType}>1. Barbrell Chest Press</Text>
        </View>
        <View style={styles.exerciseAdd}></View>
      </View>
      <View style={styles.weightLabel}>
        <View
          style={{
            flex: 3,

            maxWidth: '35%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={styles.weightLabelText}>Weights (lbs)</Text>
        </View>
        <View
          style={{
            flex: 2,
            // backgroundColor: 'brown',
            maxWidth: '20%',
          }}></View>
        <View
          style={{
            flex: 1,
            // backgroundColor: 'grey',
            maxWidth: '20%',
          }}></View>
      </View>
    </>
  );
}
const styles = EStyleSheet.create({
  exerciseName: {
    flex: 3,
    //backgroundColor: 'yellow',

    alignItems: 'center',
    justifyContent: 'center',
  },
  exerciseAdd: {
    flex: 2,
    //backgroundColor: 'blue',
    padding: 0,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  exerciseType: {
    fontSize: '1rem',
    color: '#000',
  },
  exerciseHeading: {
    flex: 1,

    flexDirection: 'row',
    //maxHeight: '58%',
    aspectRatio: 8.5 / 1,
  },
  weightLabel: {
    flex: 1,
    width: '100%',
    aspectRatio: 12 / 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //backgroundColor: 'blue',
  },
  weightLabelText: {
    // flex: 1,
    fontSize: '1rem',
  },
});
