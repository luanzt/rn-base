import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { SplashView, LoginView } from '@/Navigators/Stack'
import MainNavigator from '@/Containers/Main'
import { navigationRef } from './utils'

const Stack = createStackNavigator()

const ApplicationNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer ref={navigationRef}>
        <StatusBar barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
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

export default ApplicationNavigator
