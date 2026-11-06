export function sampleWithoutReplacement<T>(
  items: readonly T[],
  count: number,
  random: () => number = Math.random,
): T[] {
  if (
    !Array.isArray(items) ||
    !Number.isSafeInteger(count) ||
    count < 0 ||
    count > items.length ||
    typeof random !== 'function'
  )
    throw new RangeError('Invalid array, count, or random source');
  const copy = [...items];
  for (let i = 0; i < count; i++) {
    const value = random();
    if (!Number.isFinite(value) || value < 0 || value >= 1)
      throw new RangeError('Random source must return [0,1)');
    const j = i + Math.floor(value * (copy.length - i));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy.slice(0, count);
}
