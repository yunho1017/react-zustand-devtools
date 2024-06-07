export function formatDate(date?: number): string {
  if (!date) {
    return "";
  }
  return new Date(date).toLocaleTimeString();
}
