import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ICustomQueryError } from 'shared/ts/interfaces';

export const parseDate = (date: Date) => {
  const newDate = new Date(date);
  const dateParsed = newDate.toISOString().split('T')[0];

  return dateParsed;
};

export const transformErrorResponse = (
  error: FetchBaseQueryError | SerializedError | undefined,
) => {
  if (error !== undefined && 'status' in error) {
    if ('error' in error) {
      return error.error;
    } else {
      const newError = error as ICustomQueryError;
      return newError.data.message;
    }
  } else {
    return 'Something went wrong';
  }
};
