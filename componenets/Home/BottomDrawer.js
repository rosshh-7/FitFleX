import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {Fragment, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/FontAwesome5';
EStyleSheet.build();
export default function BottomDrawer(props) {
  const [icon, setIcon] = useState('home');

  const onPressHandler = name => {
    setIcon(name);
    props.iconPress(name);
  };

  return (
    <>
      <View style={styles.bottomWidget}>
        <View style={styles.block1}>
          <View style={styles.subblock1}>
            <Icon
              name={'home'}
              color={icon == 'home' ? 'black' : 'white'}
              size={36}
              onPress={() => onPressHandler('home')}
            />
          </View>
          <View style={styles.subblock2}>
            <Icon
              name={'heartbeat'}
              color={icon == 'calorie' ? 'black' : 'white'}
              size={36}
              onPress={() => onPressHandler('calorie')}
            />
          </View>
        </View>
        <View style={styles.block2}>
          <View style={styles.subblock11}>
            <Icon
              name={'book'}
              color={icon == 'book' ? 'black' : 'white'}
              size={36}
              onPress={() => onPressHandler('book')}
            />
          </View>

          <View style={styles.subblock22}>
            <Icon
              name={'user-friends'}
              color={icon == 'friends' ? 'black' : 'white'}
              size={36}
              onPress={() => onPressHandler('friends')}
            />
          </View>
        </View>
      </View>
      <View style={styles.centerWidget}>
        <Icon
          name={'plus'}
          color={icon == 'today' ? 'black' : 'white'}
          size={36}
          onPress={() => onPressHandler('today')}
        />
      </View>
    </>
  );
}

const styles = EStyleSheet.create({
  bottomWidget: {
    width: '94%',
    //height: '14%',
    aspectRatio: 5 / 1,
    backgroundColor: '#082B85',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '3%',
    flexWrap: 'wrap',
    overflow: 'hidden',
    borderRadius: 50,
  },
  centerWidget: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
    //height: '14%',
    aspectRatio: 1 / 1,
    backgroundColor: '#646873',
    alignSelf: 'center',
    position: 'absolute',
    bottom: '0.55%',
    overflow: 'hidden',
    borderRadius: 665,
  },
  block1: {
    width: '34%',
    height: '100%',
    //backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'row',
  },
  subblock1: {
    flex: 1,
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subblock2: {
    flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  block2: {
    position: 'absolute',
    width: '34%',
    right: 0,
    height: '100%',
    //backgroundColor: 'grey',
    flex: 1,
    flexDirection: 'row',
  },
  subblock11: {
    flex: 1,
    //backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subblock22: {
    flex: 1,
    //backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
