export function inputValidator(value: string) {
  const number = parseInt(value);

  if (isNaN(number) || number <= 0 || number > 99) {
    return false;
  }

  return true;
}
