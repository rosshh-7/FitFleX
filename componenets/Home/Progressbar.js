import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CircularProgress from 'react-native-circular-progress-indicator';
export default function Progressbar() {
  return (
    <>
      {/* Progess bar Start */}
      <View style={styles.progressBar}>
        <View style={styles.progressText}>
          <Text style={styles.line1}>Workout Progress</Text>
          <Text style={styles.line2}> Let's GO</Text>
        </View>
        <View style={styles.progressCircle}>
          <CircularProgress
            value={60}
            radius={30}
            valueSuffix={'%'}
            inActiveStrokeColor={'#646873'}
            activeStrokeColor={'#fff'}
            inActiveStrokeOpacity={0.2}
          />
        </View>
      </View>
      {/* Progess bar End */}
    </>
  );
}
const styles = EStyleSheet.create({
  progressBar: {
    position: 'absolute',
    width: '80%',
    aspectRatio: 4.5 / 1,
    flex: 1,
    backgroundColor: '#082B85',
    alignSelf: 'center',
    top: '19.2%',
    flexDirection: 'row',
    borderRadius: 5550,
    overflow: 'hidden',
  },
  progressText: {
    flex: 2.5,
    //backgroundColor: 'green',
    justifyContent: 'center',
  },
  progressCircle: {
    flex: 2,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line1: {
    left: '3.0rem',
    fontSize: '0.98rem',
    color: 'white',
    fontWeight: 'bold',
  },
  line2: {
    left: '3.0rem',
    fontSize: '0.84rem',
    color: 'white',
  },
});
