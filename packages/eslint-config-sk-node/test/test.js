// eslint-disable-next-line import/no-extraneous-dependencies
const eslint = require('eslint');

describe('test eslint config', () => {
  beforeAll(async () => {
    // console.log('jestPath', jestPath);
  });

  it('eslint should pass without errors and no warnings', async () => {
    const input = ['index.js', 'test/test.js'];

    const output = new eslint.CLIEngine({
      envs: ['es6', 'node'],
      configFile: 'index.js',
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
});
