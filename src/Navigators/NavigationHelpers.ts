/**
 * Used to navigating without the navigation prop
 * @see https://reactnavigation.org/docs/navigating-without-navigation-prop/
 *
 * You can add other navigation functions that you need and export them
 */
import {
  CommonActions,
  createNavigationContainerRef
} from '@react-navigation/native'

type RootStackParamList = {
  Main: undefined
  Splash: undefined
  Login: undefined
  PlayVideo: undefined
}

export const navigationRef = createNavigationContainerRef<RootStackParamList>()

export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: // this first condition allows us to iterate over a union type
  // This is to avoid getting a union of all the params from `ParamList[RouteName]`,
  // which will get our types all mixed up if a union RouteName is passed in.
  RouteName extends unknown
    ? // This condition checks if the params are optional,
      // which means it's either undefined or a union with undefined
      undefined extends RootStackParamList[RouteName]
      ?
          | [screen: RouteName] // if the params are optional, we don't have to provide it
          | [screen: RouteName, params: RootStackParamList[RouteName]]
      : [screen: RouteName, params: RootStackParamList[RouteName]]
    : never
) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(...args)
  }
}

export function navigateAndReset(routes = [], index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes
      })
    )
  }
}

export function navigateAndSimpleReset(name: string, index = 0) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }]
      })
    )
  }
}

export function goback() {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}
