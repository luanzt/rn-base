import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { SplashView, LoginView } from '@/navigators/Stack'
import MainNavigator from '@/screens/main'
import { navigationRef } from './NavigationHelpers'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef} theme={MyTheme}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={SplashView} />
          <Stack.Screen name="Login" component={LoginView} />
          <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  }
}

export default ApplicationNavigator
