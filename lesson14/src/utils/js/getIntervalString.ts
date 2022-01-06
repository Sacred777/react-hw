import { getLocalDateTS } from "./getLocalDateTS";
import { getStartOfCurrentDay } from "./getStartOfCurrentDay";
import { getRusDDMonthYYYYString } from "./getRusDDMonthYYYYString";
import { getRusTimeValueNames } from "./getRusTimeValueNames";
// import { getRusMonthNames } from "./getRusMonthNames";

// Аргументы createTimeTS - строка: timestamp без ms как отдает IPA Reddit. Возвращает строку интервалов времени или дату
export function getIntervalString(createTimeTS = '') {
  const createTimeLocalTS = getLocalDateTS(+createTimeTS * 1000);
  const currentTimeLocalTS = getLocalDateTS(new Date().getTime());
  const startTodayLocalTS = getLocalDateTS(getStartOfCurrentDay().getTime());
  const intervalSec = (currentTimeLocalTS - createTimeLocalTS) / 1000;

  if (startTodayLocalTS > createTimeLocalTS) {
    return getRusDDMonthYYYYString(+createTimeTS * 1000)
  }

  if (intervalSec < 60) return 'сейчас';
  if (intervalSec < 3600) {
    const numberOfMinutes = Math.floor(intervalSec / 60);
    return (
      numberOfMinutes + ' ' +
      getRusTimeValueNames(numberOfMinutes, 'minute') + ' ' +
      'назад'
    );
  } else {
    const numberOfHours = Math.floor(intervalSec / 3600);
    return (
      numberOfHours + ' ' +
      getRusTimeValueNames(numberOfHours, 'hour') + ' ' +
      'назад'
    );
  }
}

