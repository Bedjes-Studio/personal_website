module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
  },
  'extends': 'google',
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
  },
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "linebreak-style": ["error", "windows"],
    "indent": ["error", 4],
    "max-len": ["error", 120],
    "object-curly-spacing": ["error", "always"]
}
};
