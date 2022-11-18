import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TrendingView, FavoriteView } from '@/Navigators/Stack'

const Tab = createBottomTabNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Trending"
        component={TrendingView}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon'
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteView}
        options={{
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'beside-icon'
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
