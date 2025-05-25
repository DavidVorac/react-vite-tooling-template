/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  arrowParens: 'avoid',
  bracketSameLine: false,
  endOfLine: 'auto', // set to "auto" otherwise gitlab pipeline fails on prettier check due to Gitlab using Linux that uses "lf" and we are using "crlf" in repo
  jsxSingleQuote: true,
  printWidth: 120,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  overrides: [
    {
      files: '.eslintrc',
      options: {
        parser: 'json',
      },
    },
  ],
}

export default config
