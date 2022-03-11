import { format } from "date-fns"

export default function getDayName(forecast) {
  const date = new Date(parseInt(forecast.dt) * 1000)
  return format(date, "EEE")
}
