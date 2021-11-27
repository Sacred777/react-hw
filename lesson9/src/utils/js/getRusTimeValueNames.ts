export function getRusTimeValueNames(value: number | string, type: 'hour' | 'minute' ) {
  if (+value > 10 && +value < 20) {
    return type === 'hour' ? 'часов' : 'минут';
  }

  const lastNumber = +value < 10 ? +value : +value % 10;
  if (lastNumber === 1) {
    return type === 'hour' ? 'час' : 'минута';
  } else if (lastNumber < 5 && lastNumber !== 0) {
    return type === 'hour' ? 'часа' : 'минуты';
  } else {
    return type === 'hour' ? 'часов' : 'минут';
  }
}
