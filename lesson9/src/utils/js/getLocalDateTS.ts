// Аргументы date - timestamp UTC времени. Возвращает timestamp локального времени
export function getLocalDateTS(dateTS: number) {
  return dateTS - new Date(dateTS).getTimezoneOffset() * 60000;
}
