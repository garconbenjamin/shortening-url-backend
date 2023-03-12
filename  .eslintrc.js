module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard-with-typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "simple-import-sort", "prettier"],
  ignorePatterns: ["*.js"],
  rules: {
    // missing return type on functions
    "@typescript-eslint/explicit-function-return-type": "off",
    // allow semi colons
    semi: "off",
    "@typescript-eslint/semi": "off",
    // allow use before definition
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "off",
    // new line after import
    "import/newline-after-import": ["error", { count: 1 }],
    // Enforce spacing before function definition opening parenthesis
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": "off",
    // Enforce the use of either backticks, double, or single quotes
    quotes: ["error", "single", { avoidEscape: true }],
    // Does not force delimiter standard to type declaration
    "@typescript-eslint/member-delimiter-style": "off",
    // allow use of casual boolean condition
    "@typescript-eslint/strict-boolean-expressions": "off",
    // turn off @typescript-eslint/indent
    "@typescript-eslint/indent": "off",
    // Use type for object definitions
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    // disable return-await
    "@typescript-eslint/return-await": "off",
    // disable no-dynamic-delete
    "@typescript-eslint/no-dynamic-delete": "off",
    // Enforce line breaks after opening and before closing braces
    "object-curly-newline": [
      "error",
      {
        consistent: true,
      },
    ],
    // Require or disallow trailing commas
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "ignore",
      },
    ],
    // Sort imports in specific orders
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          [
            "^@?\\w",
            // Side effect imports.
            "^\\u0000",
            // Internal packages.
            "^(controllers|constants|server|graphql|models|services|swagger|utils)(/.*|$)",
            // Parent imports. Put `..` last.
            "^\\.\\.(?!/?$)",
            "^\\.\\./?$",
            // Other relative imports. Put same-folder imports and `.` last.
            "^\\./(?=.*/)(?!/?$)",
            "^\\.(?!/?$)",
            "^\\./?$",
          ],
        ],
      },
    ],
    "simple-import-sort/exports": "error",
  },
};
