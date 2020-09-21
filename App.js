import { StatusBar } from 'expo-status-bar'
import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import {AppLoading} from 'expo'
import { bootstrap } from './src/bootstrap'
import store from './src/store'
import AppNavigation from './src/navigation/AppNavigation'

export default function App() {

  const [isReady, setIsReady] = useState(false)

  if(!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={()=>setIsReady(true)}
        onError={error => console.log(error)}
      />
    )
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
