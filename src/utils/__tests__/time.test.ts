import { describe, expect, test } from 'vitest';

import { getFormattedTime } from '../time';

describe('getFormattedTime', () => {
  test('AM', () => {
    expect(getFormattedTime(new Date('January 1, 2022 09:15:00'))).toEqual('9:15 AM');
  });

  test('PM', () => {
    expect(getFormattedTime(new Date('January 1, 2022 15:30:00'))).toEqual('15:30 PM');
  });

  test('prepends trailing 0 for one digit minutes', () => {
    expect(getFormattedTime(new Date('January 1, 2022 15:01:00'))).toEqual('15:01 PM');
  });
});
