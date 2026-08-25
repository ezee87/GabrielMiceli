export function getAvailableScholarships(date = new Date()) {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const remainingDaysIncludingToday = daysInMonth - day + 1
  const value = Math.ceil((remainingDaysIncludingToday / daysInMonth) * 10)

  return Math.min(10, Math.max(1, value))
}
