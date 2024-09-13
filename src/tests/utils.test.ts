import { parseDate } from 'shared/lib/functions';
import { describe, expect, it } from 'vitest';

describe('Utility functions', () => {
  it('should parse the date correctly', () => {
    const date = new Date(2023, 4, 5); // 5th of May 2023

    expect(parseDate(date)).toStrictEqual('2023-05-05');
  });
});
