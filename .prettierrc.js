module.exports = {
  // Maximum line length (adjust as needed)
  printWidth: 80,

  // Use single quotes instead of double quotes
  singleQuote: true,

  // Trailing commas help with git diffs
  trailingComma: 'es5',

  // Indentation with 2 spaces (common for JS)
  tabWidth: 2,

  // Use spaces instead of tabs for indentation
  useTabs: false,

  // Semicolons are generally preferred for consistency
  semi: false,

  // Enforce consistent use of single quotes in JSX
  jsxSingleQuote: true,

  // Consistent formatting for React/JSX components
  jsxBracketSameLine: false,

  // Group files with similar extensions for cleaner imports
  importOrder: [
    '^react(.*)$',
    '^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$', // Adjust for your project structure
    '^@/styles/(.*)$', // Adjust for your project structure
    '^[./]',
  ],

  // Sort imports within groups alphabetically
  importOrderSeparation: true,

  // Allow Prettier to format Markdown files
  // (helpful for README.md, etc.)
  proseWrap: 'preserve',
}
