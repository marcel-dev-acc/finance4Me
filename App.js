import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './containers/Home/Home';
import AddAccount from './containers/AddAccount/AddAccount';
import EditAccount from './containers/EditAccount/EditAccount';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Add Account"
          component={AddAccount}
        />
        <Stack.Screen
          name="Edit Account"
          component={EditAccount}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
