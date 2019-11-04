
const { readFile, writeFile } = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

(async () => {
  try {
    const buffer = await readFileAsync('../day01/package.json');
    await writeFileAsync('a.json', buffer);
  } catch (e) {
    console.log(e);
  }
})();