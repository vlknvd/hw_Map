import ErrorRepository from '../index';

test('translate err', () => {
  const err = new ErrorRepository();
  expect(err.translate(1)).toBe('first err');
});

test('translate unknown err', () => {
  const err = new ErrorRepository();
  expect(err.translate(4)).toBe('Unknown error');
});
