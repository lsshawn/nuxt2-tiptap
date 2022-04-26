import Vue from 'vue'

const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000)
  let interval = Math.floor(seconds / 31536000)

  interval = Math.floor(seconds / 86400)
  // if interval is negative, it's a future dated post
  if (interval < 0) {
    return '0 secs ago'
  }

  if (interval >= 1) {
    if (interval <= 3) {
      if (interval === 1) {
        return interval + ' day ago'
      } else {
        return interval + ' days ago'
      }
    } else {
      return date.toDateString().slice(4, 15)
    }
  }
  interval = Math.floor(seconds / 3600)
  if (interval >= 1) {
    return interval + ' hours ago'
  }
  interval = Math.floor(seconds / 60)
  if (interval >= 1) {
    return interval + ' mins ago'
  }
  if (seconds) {
    return Math.floor(seconds) + ' secs ago'
  } else {
    return '0 secs ago'
  }
}

Vue.filter('timeSince', function(dt) {
  if (dt) {
    const date = new Date(dt)
    // if Invalid Date, it's YYYYMMDD
    if (isNaN(date.getMonth())) {
      const year = date.substring(0, 4)
      const month = date.substring(4, 6)
      const day = date.substring(6, 8)
      return timeSince(new Date(year, month - 1, day))
    } else {
      return timeSince(new Date(dt))
    }
  }
})
