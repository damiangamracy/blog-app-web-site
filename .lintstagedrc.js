const config = {
  "**/*.js": ["prettier --write", "eslint --fix", "git add"],
  "**/*.scss": [
    "prettier --parser scss --write",
    "stylelint --syntax scss --fix",
    "git add"
  ]
};

module.exports = config;
