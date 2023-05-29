/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import BottomDrawer from './componenets/Home/BottomDrawer';

import Home from './componenets/Home/Home';
import Calorie from './componenets/Calorie/Calorie';
import TodayWorkout from './componenets/TodayWorkoutPage/TodayWorkout';
import LoginMain from './componenets/LoginPage/LoginMain';
//import {Shadow} from './chartAdds';

EStyleSheet.build();

export default function App() {
  const [selectedIcon, setSelectedicon] = useState('home');

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const onIconPress = pressedIcon => {
    setSelectedicon(pressedIcon);
  };
  return (
    <SafeAreaView>
      <View style={styles.mainWindow}>
        <LoginMain />

        {/*         
        {selectedIcon == 'home' ? (
          <Home />
        ) : selectedIcon == 'calorie' ? (
          <Calorie />
        ) : selectedIcon == 'today' ? (
          <TodayWorkout></TodayWorkout>
        ) : selectedIcon == 'book' ? (
          <Text>book page</Text>
        ) : (
          <Text>friends page</Text>
        )} */}
        {/* 
        <BottomDrawer iconPress={onIconPress} /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = EStyleSheet.create({
  mainWindow: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
