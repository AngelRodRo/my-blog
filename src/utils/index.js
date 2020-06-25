const formatDate = date => {
    const format = new Intl.DateTimeFormat('es', { year: 'numeric', month: '2-digit', day: '2-digit' }) //eslint-disable-line
    const [{ value: day },,{ value: month },,{ value: year }] = format.formatToParts(date)
    return `${day}/${month}/${year}`
}

export default {
    formatDate
}
