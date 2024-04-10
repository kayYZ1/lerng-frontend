export const ParseDate = (date: Date) => {
  const newDate = new Date(date);
  const dateParsed = newDate.toISOString().split('T')[0];

  return dateParsed;
};
