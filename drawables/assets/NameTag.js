import {View, Text} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

export default function NameTag(props) {
  return (
    <View style={styles.headingBox}>
      <Text style={styles.headingText}>{`${props.Name}`}</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  headingBox: {
    aspectRatio: 4 / 1,
    backgroundColor: '#082B85',
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //flex: 1,
    //flexDirection: 'column',
    borderRadius: 25,
    top: '4.5%',
    left: '2%',
    borderWidth: 2,
    borderColor: '#9E8585',
    padding: 7.2,
    //border: '50px solid #9E8585',
  },
  headingText: {
    fontSize: '1.5rem',
    //fontWeight: 'bold',
    color: '#fff',
  },
});
