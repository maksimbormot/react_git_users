export function formatDate(str) {
  const day = new Date(str);
  return day.getFullYear() + '-' + ('0' + (day.getMonth() + 1)).slice(-2) + '-' + ('0' + day.getDate()).slice(-2);
}