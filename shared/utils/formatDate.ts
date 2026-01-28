export function formatDate(date: Date | string) {
  const d = date instanceof Date ? date : new Date(date);

  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();

  return `${hours}:${minutes} ${day}.${month}.${year}`;
}
