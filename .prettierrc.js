module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  plugins: [require.resolve('prettier-plugin-organize-imports'), require.resolve('prettier-plugin-packagejson')],
};
