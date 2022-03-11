import { format } from "date-fns"

export function getDayName(forecast) {
  const date = new Date(parseInt(forecast.dt) * 1000)
  return format(date, "EEE")
}

export function getShortDate(forecast) {
  const date = new Date(parseInt(forecast.dt) * 1000)
  return format(date, "dd/MM")
}

export function getShortTime(forecast) {
  const date = new Date(parseInt(forecast.dt) * 1000)
  return format(date, "HH:mm")
}

export const nameCapitalized = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1)
