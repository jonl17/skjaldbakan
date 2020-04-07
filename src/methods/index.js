const dateConfig = {
  days: ["sunnudaginn", "mánudaginn", "þriðjudaginn", "miðvikudaginn",
    "fimmtudaginn", "föstudaginn", "laugardaginn"],
  months: ["janúar", "febrúar", "mars", "apríl", "maí", "júní",
    "júlí", "ágúst", "september", "október", "nóvember", "desember"]
}
const beautifyDate = (date) => {
  const day = dateConfig.days[date.getDay()]
  const month = dateConfig.months[date.getMonth()]
  return day + " "
    + date.getDate()
    + ". " + month
    + " " + date.getFullYear()
}
export const msToDate = (ms) => {
  const date = new Date(ms)
  return beautifyDate(date)
}