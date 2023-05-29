import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import WorkoutHeading from './WorkoutHeading';
import WeightRow from './WeightRow';

export default function TodayHistory() {
  return (
    <>
      <View style={styles.updatesHeading}>
        <Text style={styles.updatesText}>TODAY'S UPDATES</Text>
      </View>
      <View style={styles.exerciseBlock}>
        <ScrollView>
          <WorkoutHeading />
          <WeightRow />
          <WeightRow />
          <WeightRow />
          <WorkoutHeading />
          <WeightRow />
          <WeightRow />
        </ScrollView>
      </View>
    </>
  );
}
const styles = EStyleSheet.create({
  updatesHeading: {
    flex: 1,
    width: '96%',

    flexDirection: 'row',
    //maxHeight: '58%',
    aspectRatio: 8.1 / 1,
    position: 'absolute',
    top: '45.5%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  updatesText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderBottomWidth: 2,
  },
  exerciseBlock: {
    width: '96%',
    //height: '65%',
    aspectRatio: 1.6 / 1,

    flex: 1,
    position: 'absolute',
    top: '52%',
    alignSelf: 'center',
    flexDirection: 'column',
  },
});
