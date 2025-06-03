module.exports = {
  root: true,
  extends: ['@react-native-community', '@react-native'],
  ignorePatterns: ['!**/*', 'public', '.cache', 'node_modules'],
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn'],
    '@typescript-eslint/func-call-spacing': 'off',
  },
};
