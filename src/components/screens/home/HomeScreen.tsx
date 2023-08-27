import React from 'react';
import {Text} from 'react-native-paper';
import Screen from '../base/Screen';

interface Props {}
const HomeScreen: React.FC<Props> = () => {
  return (
    <Screen>
      <Text>Hello worldd</Text>
    </Screen>
  );
};

export default HomeScreen;
