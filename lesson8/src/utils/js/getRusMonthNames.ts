// Аргументы - month - номер месяца от 0 до 11. Возвращает строку названия месяца в родительном падеже
export function getRusMonthNames(month: number | string) {
  if (+month < 0 || +month > 12) return '';

  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабя',
  ];

  return months[+month];
}
