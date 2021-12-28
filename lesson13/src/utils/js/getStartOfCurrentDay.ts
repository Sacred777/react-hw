// Возвращает объек даты начала текущего дня 00:00
export function getStartOfCurrentDay() {
  const currentDate = new Date();

  return new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate()
  );
}