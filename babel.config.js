const presets = ['module:metro-react-native-babel-preset']
const plugins = [
  [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json'],
      alias: {
        '@': './src',
        icons: './src/assets/icons',
        images: './src/assets/images'
      }
    }
  ],
  'react-native-reanimated/plugin',
  [
    'babel-plugin-inline-import',
    {
      extensions: ['.svg']
    }
  ]
]

module.exports = {
  presets,
  plugins
}
