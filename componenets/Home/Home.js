import {View, Text} from 'react-native';
import React from 'react';
import Heading from './Heading';
import NavigationBlock from './NavigationBlock';
import Progressbar from './Progressbar';
import GraphBox from './GraphBox';
import Bubbles from './Bubbles';

export default function Home() {
  return (
    <>
      <Heading />
      <Bubbles />
      <Progressbar />
      <NavigationBlock />
      <GraphBox />
    </>
  );
}
