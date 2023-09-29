module.exports = {
  configs: {
    recommended: {
      extends: ['prettier'],
      rules: {
        semi: [1, 'never'],
        quotes: [1, 'single'],
        'comma-dangle': [1, 'never'],
        'arrow-parens': [1, 'as-needed']
      }
    }
  }
}
