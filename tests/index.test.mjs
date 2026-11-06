import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('selects requested count', () => {
  assert.equal(api.sampleWithoutReplacement([1, 2, 3], 2, () => 0).length, 2);
});
test('selects no values', () => {
  assert.deepEqual(api.sampleWithoutReplacement([1], 0), []);
});
test('can select all values', () => {
  assert.deepEqual(
    api.sampleWithoutReplacement([1, 2], 2, () => 0),
    [1, 2],
  );
});
test('does not mutate source', () => {
  const x = [1, 2, 3];
  api.sampleWithoutReplacement(x, 2, () => 0);
  assert.deepEqual(x, [1, 2, 3]);
});
test('supports deterministic sampling', () => {
  assert.deepEqual(
    api.sampleWithoutReplacement([1, 2, 3], 2, () => 0),
    [1, 2],
  );
});
test('rejects invalid count', () => {
  assert.throws(() => api.sampleWithoutReplacement([1], 2), RangeError);
});
