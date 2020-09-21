/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import {
  StyleSheet
} from 'react-native';

import TransactionDetails from './screens/transactions/details/index';
import TransactionList from './screens/transactions/list/index';


const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='List'>
        <Stack.Screen name='List' component={TransactionList} />
        <Stack.Screen name='Details' component={TransactionDetails} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
