import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeView } from '@/Navigators/Stack'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeView}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon'
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
