const { Bundler } = require('scss-bundle');
const fs = require('fs');
const path = require('path');

const lib = 'time-select';
const dir = `projects/${lib}`;
const out = `dist/${lib}`;

function theming() {
  const entryPoint = path.join(dir, 'src', '_index.scss');
  const allDedupeGlobs = [path.join(dir, 'src', '*.scss')];
  const includePaths = [];
  const ignoredImports = ['@angular/material'];
  return new Bundler().bundle(entryPoint, allDedupeGlobs, includePaths, ignoredImports).then(result => {
    fs.writeFileSync(path.join(out, '_index.scss'), result.bundledContent);
  });
}

exports.theming = theming;
