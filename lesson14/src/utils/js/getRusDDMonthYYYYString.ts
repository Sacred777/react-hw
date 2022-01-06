import { getRusMonthNames } from './getRusMonthNames'

// Аргументы timeStamp. Возвращает строку дыты в формате ДД Месяц ГГГГ
export function getRusDDMonthYYYYString(timeStamp: string | number) {
  const date = new Date(+timeStamp)

  return (
      date.getDate() + ' ' +
      getRusMonthNames(date.getMonth()) + ' ' +
      date.getFullYear()
  );
}