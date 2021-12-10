export function getFormattedTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedMinutes = minutes > 9 ? minutes : '0' + minutes;
  const period = hours >= 12 ? 'PM' : 'AM';

  return `${hours}:${formattedMinutes} ${period}`;
}
