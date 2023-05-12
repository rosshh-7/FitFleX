/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {SafeAreaView, StyleSheet, Text, View, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {useEffect, useState} from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CircularProgress from 'react-native-circular-progress-indicator';
import BottomDrawer from './componenets/Home/BottomDrawer';
import GraphBox from './componenets/Home/GraphBox';
import Bubbles from './componenets/Home/Bubbles';
import NavigationBlock from './componenets/Home/NavigationBlock';
import Heading from './componenets/Home/Heading';
import Progressbar from './componenets/Home/Progressbar';
import Home from './componenets/Home/Home';
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
        {selectedIcon == 'home' ? (
          <Home />
        ) : selectedIcon == 'calorie' ? (
          <Text>Calorie page</Text>
        ) : selectedIcon == 'book' ? (
          <Text>book page</Text>
        ) : (
          <Text>friends page</Text>
        )}

        <BottomDrawer iconPress={onIconPress} defaultIcon={selectedIcon} />
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
