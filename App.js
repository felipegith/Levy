import 'react-native-gesture-handler';
import Toast from 'react-native-toast-message'
import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import {  
    Raleway_300Light,
    Raleway_500Medium,
    Raleway_700Bold,
    Raleway_400Regular
} from '@expo-google-fonts/raleway'

import Routes from './src/Routes/Routes'
import { UserContextProvider } from './src/Context/UserContext'

export default function App() {
  const [fontsLoaded] = useFonts({
      Raleway_300Light,
      Raleway_500Medium,
      Raleway_700Bold,
      Raleway_400Regular
  })
  if (!fontsLoaded) {
    return null;
  }
  return (
    <UserContextProvider>
      <>
      <Routes/>
      <StatusBar style="auto" backgroundColor="#fff" />
      <Toast ref={(ref) => Toast.setRef(ref)}/>
      </>
    </UserContextProvider> 
  );
}


