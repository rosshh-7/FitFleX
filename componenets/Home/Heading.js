import {View, Text, Image} from 'react-native';
import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
export default function Heading() {
  return (
    <>
      {/* heading Area Start */}
      <View style={styles.headingBox}>
        <Image
          style={styles.profilePhoto}
          resizeMode="contain"
          source={require('../../drawables/images/adi.jpg')}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.greeting}>Welcome Roshan,</Text>
          <Text style={styles.dayInfo}>Today is Chest Day</Text>
        </View>
      </View>
      {/*  heading Area End */}
    </>
  );
}
const styles = EStyleSheet.create({
  headingBox: {
    position: 'absolute',
    flex: 1,
    alignSelf: 'center',
    //width: '90%',
    flexDirection: 'row',
    zIndex: 999,
    top: '5%',
    elevation: Platform.OS === 'android' ? 50 : 0,
  },
  profilePhoto: {
    flex: 1.5,
    aspectRatio: 1 / 1,
    //backgroundColor: 'blue',
    borderRadius: 5000,
    margin: '6%',
    //backgroundColor: 'grey',
  },
  profileInfo: {
    flex: 6,
    margin: '6%',
  },
  greeting: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'black',
  },
  dayInfo: {
    fontSize: '0.90rem',
    //fontWeight: 'bold',
    color: '#646873',
  },
});
