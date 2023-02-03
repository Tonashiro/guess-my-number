module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "babel-eslint",
  env: {
    browser: true,
  },
  plugins: ["react-native", "jsx-a11y", "import"],
  rules: {},
  settings: {
    "import/resolver": {
      node: {
        paths: [""],
        alias: {
          _assets: "./src/assets",
          _components: "./src/components",
          _routes: "./src/routes",
          _views: "./src/views",
          _services: "./src/services",
          _styles: "./src/styles",
          _utils: "./src/utils",
        },
      },
    },
  },
};
