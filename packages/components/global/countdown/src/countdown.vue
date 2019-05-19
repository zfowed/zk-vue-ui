<template>
  <span class="zk-countdown">
    <slot
      :days="days"
      :hours="hours | pad0"
      :minutes="minutes | pad0"
      :second="second | pad0">
      <span>{{ days }}</span>
      <span>天</span>
      <span>{{ hours | pad0 }}</span>
      <span>时</span>
      <span>{{ minutes | pad0 }}</span>
      <span>分</span>
      <span>{{ second | pad0 }}</span>
      <span>秒</span>
    </slot>
  </span>
</template>

<script>
export default {
  name: 'ZkCountdown',
  props: {
    date: {
      type: [String, Number, Date],
      required: true
    }
  },
  data () {
    const secondTimestamp = 1000
    const minuteTimestamp = 60 * secondTimestamp
    const hourTimestamp = 60 * minuteTimestamp
    const dayTimestamp = 24 * hourTimestamp

    return {
      secondTimestamp,
      minuteTimestamp,
      hourTimestamp,
      dayTimestamp,
      dateObject: new Date(),
      diffmo: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      second: 0
    }
  },
  watch: {
    date: 'startTimer'
  },
  filters: {
    pad0 (value, number) {
      return String(value).padStart(number || 2, '0')
    }
  },
  methods: {
    toDate (dateString) {
      if (typeof dateString === 'string') {
        return new Date(dateString.replace(/-/g, '/'))
      }
      return new Date(dateString)
    },
    startTimer () {
      this.timer = setInterval(this.calculationTimer, 1000)
      this.calculationTimer()
    },
    calculationTimer () {
      if (typeof this.date === 'undefined') return
      this.dateObject = this.toDate(this.date)
      this.diffmo = new Date(this.dateObject) - new Date()

      this.days = Math.floor(this.diffmo / this.dayTimestamp)
      this.hours = Math.floor(this.diffmo % this.dayTimestamp / this.hourTimestamp)
      this.minutes = Math.floor(this.diffmo % this.hourTimestamp / this.minuteTimestamp)
      this.second = Math.floor(this.diffmo % this.minuteTimestamp / this.secondTimestamp)

      if (this.days < 0) this.days = 0
      if (this.hours < 0) this.hours = 0
      if (this.minutes < 0) this.minutes = 0
      if (this.second < 0) this.second = 0

      if (this.diffmo < 0) clearInterval(this.timer)
    }
  },
  created () {
    this.startTimer()
  },
  beforeDestroy () {
    if (this.timer) clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
</style>
