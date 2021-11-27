// Аргументы value - число или строка. Возвращает строки в формате: до 999 - NNN, до 9999 - NтN, до 99999 - NNт, свыше - 'ОГО'
export function getKarmaValue(value: string | number) {
  const karmaNumber = +value;
  const karmaString = '';
  if (karmaNumber === 0) return '0';
  if (karmaNumber < 999) {
    return karmaNumber.toString();
  } else if (karmaNumber < 9999) {
    return (Math.floor(karmaNumber / 100) / 10).toFixed(1).replace('.', 'т');
  } else if (karmaNumber < 99999) {
    return Math.floor(karmaNumber / 1000) + 'т';
  } else {
    return 'ОГО'
  }
}
