module.exports = function (api) {
  api.cache(true)

  return {
    presets: [
      ['module:@react-native/babel-preset', { useTransformReactJSX: true }],
    ],
    plugins: [
      // react-native-reanimated/plugin has to be listed last.
      // Reason: In short, the Reanimated babel plugin automatically converts special JavaScript functions (called worklets) to allow them to be passed and run on the UI thread.
      'react-native-reanimated/plugin',
    ],
  }
}
