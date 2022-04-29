import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './Src/Navigation/Navigation';

export default function App({ navigation }) {
  return (
    <NavigationContainer >
      <Navigation {...navigation} />
    </NavigationContainer>
  );
}
