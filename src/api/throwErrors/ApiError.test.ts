import { ApiError } from './ApiError';

test('Error 404', () => {
  expect(new ApiError(404).message).toMatch('Not Found');
});
test('Error 400', () => {
  expect(new ApiError(400).message).toMatch('Bad Request');
});
test('Error 500', () => {
  expect(new ApiError(500).message).toMatch('Server Error');
});
test('Wrong number', () => {
  expect(new ApiError(5300).message).toBeUndefined();
});
test('Empty', () => {
  expect(new ApiError().message).toBeUndefined();
});

test('Error 404', () => {
  expect(new ApiError(404).code).toBe(404);
});
test('Error 400', () => {
  expect(new ApiError(400).code).toBe(400);
});
test('Error 500', () => {
  expect(new ApiError(500).code).toBe(500);
});
test('Wrong number', () => {
  expect(new ApiError(5300).code).toBe(5300);
});
