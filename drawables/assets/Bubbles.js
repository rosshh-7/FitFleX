import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function Bubbles() {
  return (
    <>
      {/* side bubbles Start */}
      <View style={styles.bubble1}></View>
      <View style={styles.bubble2}></View>
      {/* side bubbles End */}
    </>
  );
}

const styles = EStyleSheet.create({
  bubble1: {
    position: 'absolute',
    width: '28%',
    aspectRatio: 1 / 1,
    backgroundColor: '#082B85',
    borderRadius: 5555,
    opacity: 0.18,
    //alignSelf: 'flex-end',
    top: '6%',
    right: '-8%',
    zIndex: 99,
    elevation: 99,
  },
  bubble2: {
    position: 'absolute',
    width: '24%',
    aspectRatio: 1 / 1,
    backgroundColor: '#082B85',
    borderRadius: 5555,
    opacity: 0.2,
    //alignSelf: 'flex-end',
    top: '15%',
    right: '-9%',
    elevation: 100,
  },
});
