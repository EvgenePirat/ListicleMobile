import React from 'react';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';
import Home from './src/screens/app/Home'
import Favorites from './src/screens/app/Favorites'
import Profile from './src/screens/app/Profile'
import Settings from './src/screens/app/Settings'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/color';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from "react-native";
import ProductDetails from './src/screens/app/ProductDetails';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ animationTypeForReplace: 'push', animation: 'fade'}}>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false}} />
    </Stack.Navigator>
  )
}

const Tabs = () => {
  return ( 
    <Tab.Navigator 
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              icon = focused
                ? require('./src/assets/tabs/home_active.png')
                : require('./src/assets/tabs/home.png')
            } else if (route.name === 'ProfileStack') {
              icon = focused
                ? require('./src/assets/tabs/profile_active.png')
                : require('./src/assets/tabs/profile.png')
            }else if (route.name === 'Favorites') {
              icon = focused
                ? require('./src/assets/tabs/favorites_active.png')
                : require('./src/assets/tabs/favorites.png')
            }
    
            return <Image style={{ width: 30, height: 30 }} source={icon} />
          },
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: colors.lightWhite, padding: 10, paddingBottom: 10, height: 80 }
        })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
      <Tab.Screen name="Favorites" component={Favorites} /> 
    </Tab.Navigator>
  );
}

function App() {

  const isSignedIn = true;

  const theme = {
    colors: {
      backround: colors.white
    }
  }

  return (  
    <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{ animationTypeForReplace: 'push', animation: 'fade'}}>

            {isSignedIn ? (
              <>
                <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false}} />
                <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false}} />
              </>
            ) : (
              <>      
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}} />
              <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false}} />
              <Stack.Screen name="Signin" component={Signin} options={{ headerShown: false}} />
              </>
            )}
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;