import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TrendingView, FavoriteView } from '@/Navigators/Stack'
import { connect } from 'react-redux'

const Tab = createBottomTabNavigator()

type props = {
  token: any
}
// @refresh reset
const MainNavigator = (props: any) => {
  console.log(props.token)

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

const mapStatesToProps = (state: any) => {
  return {
    token: state.user.token
  }
}

const mapDispatchToProps = (_dispatch: any) => {
  return {}
}

export default connect(mapStatesToProps, mapDispatchToProps)(MainNavigator)
