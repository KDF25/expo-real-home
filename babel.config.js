module.exports = function (api) {
    api.cache(true);
    return {
      presets: [
        ["babel-preset-expo", { jsxImportSource: "nativewind" }],
        "nativewind/babel",
      ],
      plugins: [
        [
            'module-resolver',
            {
              extensions: ['.js', '.jsx', '.ts', '.tsx'],
              alias: {
                '@': './',
              },
            },
          ],
        // Required for expo-router
        // "expo-router/babel",
        "react-native-reanimated/plugin",
      ]
    };
  };