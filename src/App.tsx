import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-redux'
import store from '@/store'
import ApplicationNavigator from '@/navigators/ApplicationNavigator'
import './translations'

const App = () => (
  <Provider store={store}>
    <ApplicationNavigator />
  </Provider>
)

export default App
