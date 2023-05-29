import {View, Text} from 'react-native';
import React from 'react';

import NameTag from '../../drawables/assets/NameTag';
import Bubbles from '../../drawables/assets/Bubbles';
import TodayHistory from './TodayHistory';
import WorkoutAdd from './WorkoutAdd';
import WorkoutSelector from './WorkoutSelector';
export default function TodayWorkout() {
  return (
    <>
      <NameTag Name={`Today's Workout`} />
      <WorkoutSelector />
      <WorkoutAdd />
      <TodayHistory />
      <Bubbles />
    </>
  );
}
