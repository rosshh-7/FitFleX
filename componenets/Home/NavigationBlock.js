import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EStyleSheet from 'react-native-extended-stylesheet';
EStyleSheet.build();
export default function NavigationBlock() {
  return (
    <>
      {/* Navigation divs Start */}
      <View style={styles.mainBlock}>
        <Pressable
          style={styles.navBlock1}
          onPress={() => console.log('journey')}>
          <ImageBackground
            source={require('../../drawables/images/navImage.jpg')}
            resizeMode="contain"
            style={styles.navImage}>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}>
              <MaterialCommunityIcons
                name={'weight-lifter'}
                color={'black'}
                size={60}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.navText}>My Workout</Text>
              <Text style={styles.navText}>Journey</Text>
            </View>
          </ImageBackground>
        </Pressable>
        <Pressable
          style={styles.navBlock2}
          onPress={() => console.log('Routine')}>
          <ImageBackground
            source={require('../../drawables/images/navImage.jpg')}
            resizeMode="contain"
            style={styles.navImage}>
            <View
              style={{
                flex: 2,
                flexDirection: 'row',

                alignItems: 'flex-end',
              }}>
              <MaterialCommunityIcons
                name={'timetable'}
                color={'black'}
                size={60}
              />
            </View>
            <View
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={styles.navText}>Set My</Text>
              <Text style={styles.navText}>Routine</Text>
            </View>
          </ImageBackground>
        </Pressable>
      </View>
      {/* Navigation divs End */}
    </>
  );
}
const styles = EStyleSheet.create({
  mainBlock: {
    //backgroundColor: 'red',
    width: '100%',
    flexDirection: 'row',
    top: '59.2%',
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  navBlock1: {
    width: '40%',
    aspectRatio: 1 / 1,
    backgroundColor: '#1D48B9',

    borderRadius: 52,

    overflow: 'hidden',
  },
  navBlock2: {
    width: '40%',
    aspectRatio: 1 / 1,
    backgroundColor: '#1D48B9',

    borderRadius: 52,
    flexWrap: 'wrap',
    overflow: 'hidden',
  },
  navImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',

    alignItems: 'center',
    //aspectRatio: 1 / 1,
  },
  navText: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: 'white',
  },
});
