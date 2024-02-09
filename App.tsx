/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as Sentry from "@sentry/react-native";
import Home from './Home';

enableScreens();

type RootStackParamList = {
  Home: any;
};

// Initialize Sentry
Sentry.init({
  dsn: "https://1053fff60431161a663298377434614e@o4506716230647808.ingest.sentry.io/4506716232417280",
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const Stack = createStackNavigator<RootStackParamList>();


const App: React.FC = () => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);


export default App;