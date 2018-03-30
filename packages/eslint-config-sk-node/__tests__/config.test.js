// eslint-disable-next-line import/no-extraneous-dependencies
const eslint = require('eslint');
const path = require('path');

const srcPath = path.resolve(__dirname, '../');

describe('test eslint config', () => {
  it('eslint should pass without errors and no warnings', async () => {
    const input = [path.resolve(srcPath, 'index.js'), path.resolve(__dirname, __filename)];

    const output = new eslint.CLIEngine({
      configFile: path.resolve(srcPath, 'index.js'),

      useEslintrc: false,
    }).executeOnFiles(input);

    input.forEach((file, index) => {
      if (output.results[index].messages.length) {
        // eslint-disable-next-line no-console
        console.log(output.results[index].messages);
      }
      // eslint-disable-next-line no-console
      // console.log(output.results[index]);
      expect(output.results[index].filePath.endsWith(file)).toBeTruthy();
    });

    expect(output.errorCount).toBe(0);
    expect(output.warningCount).toBe(0);
  });

  it('eslint should show 2 errors', async () => {
    const input = [path.resolve(__dirname, 'fixtures', 'fail.js')];

    const output = new eslint.CLIEngine({
      configFile: path.resolve(srcPath, 'index.js'),
      useEslintrc: false,
    }).executeOnFiles(input);

    input.forEach((file, index) => {
      if (output.results[index].messages.length) {
        // eslint-disable-next-line no-console
        console.log(output.results[index].messages);
      }
      // eslint-disable-next-line no-console
      // console.log(output.results[index]);
      expect(output.results[index].filePath.endsWith(file)).toBeTruthy();
    });

    expect(output.errorCount).toBe(2);
    expect(output.warningCount).toBe(0);
  });

  it('eslint should fix code and show 1 errors', async () => {
    const input = [path.resolve(__dirname, 'fixtures', 'fixme.fail.js')];

    const output = new eslint.CLIEngine({
      configFile: path.resolve(srcPath, 'index.js'),
      useEslintrc: false,
      fix: true,
    }).executeOnFiles(input);

    input.forEach((file, index) => {
      if (output.results[index].messages.length) {
        // eslint-disable-next-line no-console
        console.log(output.results[index].messages);
      }
      // eslint-disable-next-line no-console
      // console.log(output.results[index]);
      expect(output.results[index].filePath.endsWith(file)).toBeTruthy();
    });

    expect(output.errorCount).toBe(1);
    expect(output.warningCount).toBe(0);
  });

  it('eslint should fix code without errors', async () => {
    const input = [path.resolve(__dirname, 'fixtures', 'fixme.success.js')];

    const output = new eslint.CLIEngine({
      configFile: path.resolve(srcPath, 'index.js'),
      useEslintrc: false,
      fix: true,
    }).executeOnFiles(input);

    input.forEach((file, index) => {
      if (output.results[index].messages.length) {
        // eslint-disable-next-line no-console
        console.log(output.results[index].messages);
      }
      // eslint-disable-next-line no-console
      // console.log(output.results[index]);
      expect(output.results[index].filePath.endsWith(file)).toBeTruthy();
    });

    expect(output.errorCount).toBe(0);
    expect(output.warningCount).toBe(0);
  });
});
