import { parseDate } from 'shared/utils/functions';
import { describe, expect, it } from 'vitest';

describe('Utility functions', () => {
  it('should parse the date correctly', () => {
    const date = new Date('2023-05-05');

    expect(parseDate(date)).toStrictEqual('2023-05-05');
  });
});
