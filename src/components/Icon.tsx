import * as React from 'react'
import {
  ColorValue,
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle
} from 'react-native'

export type IconTypes = keyof typeof iconRegistry

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes

  /**
   * An optional tint color for the icon
   */
  color?: ColorValue

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps['onPress']
}

/**
 * A component to render a registered icon.
 * It is wrapped in a <TouchableOpacity /> if `onPress` is provided, otherwise a <View />.
 *
 * - [Documentation and Examples](https://github.com/infinitered/ignite/blob/master/docs/Components-Icon.md)
 */
export function Icon(props: IconProps) {
  const { icon, color, size, style, containerStyle, onPress, ...WrapperProps } =
    props

  return (
    <TouchableOpacity
      {...WrapperProps}
      style={containerStyle}
      disabled={!onPress}
      onPress={onPress}
    >
      <Image
        style={[
          $imageStyle,
          { tintColor: color },
          { width: size, height: size },
          style
        ]}
        source={iconRegistry[icon]}
      />
    </TouchableOpacity>
  )
}

export const iconRegistry = {
  flag: require('icons/ic_flag.png')
}

const $imageStyle: ImageStyle = {
  resizeMode: 'contain'
}
