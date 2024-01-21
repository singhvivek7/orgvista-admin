const path = require('path');

const buildEslintCommand = (filenames) =>
  `prettier --write --ignore-path .gitignore ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
