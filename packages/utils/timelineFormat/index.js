function toDate (dateString) {
  if (typeof dateString !== 'string') return new Date(dateString)
  const dateArr = dateString.split(/[- :/]/).map(item => Number(item))
  dateArr[1] -= 1
  return new Date(...dateArr)
}

export default function (datetime) {
  const diffmo = new Date() - toDate(datetime)

  const secondTimestamp = 1000
  const minuteTimestamp = 60 * secondTimestamp
  const hourTimestamp = 60 * minuteTimestamp
  const dayTimestamp = 24 * hourTimestamp
  const weekTimestamp = 7 * dayTimestamp
  const monthTimestamp = 30 * dayTimestamp
  const yearTimestamp = 365 * dayTimestamp

  const years = Math.floor(diffmo / yearTimestamp)
  const months = Math.floor(diffmo / monthTimestamp)
  const weeks = Math.floor(diffmo / weekTimestamp)
  const days = Math.floor(diffmo / dayTimestamp)
  const hours = Math.floor(diffmo / hourTimestamp)
  const minutes = Math.floor(diffmo / minuteTimestamp)
  // const second = Math.floor(diffmo / secondTimestamp)

  if (years > 0) {
    return `${years}年前`
  } else if (months > 0) {
    return `${months}月前`
  } else if (weeks > 0) {
    return `${weeks}周前`
  } else if (days > 0) {
    return `${days}天前`
  } else if (hours > 0) {
    return `${hours}小时前`
  } else if (minutes > 0) {
    return `${minutes}分前`
  } else {
    return `刚刚`
  }
}
