const { foo } = require('./index');

test('foo function to testing set up environment', () => {
  const actual = foo('bar');

  expect(actual).toMatch('foo bar');
});