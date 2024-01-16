import React, { useLayoutEffect, useState } from 'react'
import {
  Image,
  ImageProps,
  ImageSourcePropType,
  TouchableOpacity,
  ViewStyle
} from 'react-native'

interface Props extends ImageProps {
  /**
   * How wide should the image be?
   */
  maxWidth?: number
  /**
   * How tall should the image be?
   */
  maxHeight?: number

  containerStyles?: ViewStyle

  onPress?: () => void
}

/**
 * A hook that will return the scaled dimensions of an image based on the
 * provided dimensions' aspect ratio. If no desired dimensions are provided,
 * it will return the original dimensions of the remote image.
 *
 * How is this different from `resizeMode: 'contain'`? Firstly, you can
 * specify only one side's size (not both). Secondly, the image will scale to fit
 * the desired dimensions instead of just being contained within its image-container.
 *
 */
function useAutoImage(
  source: ImageSourcePropType,
  dimensions: [maxWidth: number, maxHeight: number]
): [width: number, height: number] {
  const [[width, height], setImageDimensions] = useState([0, 0])

  const [maxWidth, maxHeight] = dimensions

  useLayoutEffect(() => {
    if (!source) {
      return
    }

    const assetImage = Image.resolveAssetSource(source)
    setImageDimensions([assetImage.width, assetImage.height])
  }, [source])

  let aspectRatio = width / height

  if (Number.isNaN(aspectRatio)) {
    return [0, 0]
  }

  if (maxWidth && maxHeight) {
    aspectRatio = Math.min(maxWidth / width, maxHeight / height)
    return [width * aspectRatio, height * aspectRatio]
  }

  if (maxWidth) {
    return [maxWidth, maxWidth / aspectRatio]
  }

  if (maxHeight) {
    return [maxHeight * aspectRatio, maxHeight]
  }

  return [width, height]
}

export default function AutoStaticImage(props: Props) {
  const { maxWidth, maxHeight, ...WrapProps } = props

  const [width, height] = useAutoImage(props.source, [
    maxWidth || 0,
    maxHeight || 0
  ])

  return (
    <TouchableOpacity
      disabled={!props.onPress}
      onPress={props.onPress}
      style={props.containerStyles}
    >
      <Image {...WrapProps} style={[{ width, height }, props.style]} />
    </TouchableOpacity>
  )
}
