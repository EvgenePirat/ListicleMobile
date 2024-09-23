import React from 'react';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/color';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function App() {

  const theme = {
    colors: {
      backround: colors.white
    }
  }

  return (  
    <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ animationTypeForReplace: 'push', animation: 'fade'}}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}} />
            <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false}} />
            <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;