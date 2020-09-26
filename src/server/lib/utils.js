const

  formatDate = date => {
    const year = date.getFullYear()
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  },

  makeStartEndDates = date => {

    const start = new Date(date)
    const end = new Date(date)

    start.setDate(start.getDate() - 365);
    end.setDate(end.getDate() - 364);
    
    return {start, end}
  }
;

module.exports = {
  formatDate,
  makeStartEndDates
}
