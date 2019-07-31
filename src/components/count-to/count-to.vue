<template>
  <div>
    <h1 :id="eleId"></h1>
    <!-- <span :id="eleId"></span> -->
  </div>
</template>
<script>
import CountUp from 'countup.js'
export default {
  // name: 'CountTo',
  data () {
    return {
      counter: {}
    }
  },
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    }
  },
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
      // default: 10000
    },
    decimals: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    useEasing: {
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.counter = new CountUp(this.eleId, this.endVal, {
        startVal: this.startVal,
        decimalPlaces: this.decimals,
        duration: this.duration,
        useEasing: this.useEasing
      })
      // setTimeout(() => {
      this.counter.start()
      // }, this.delay)
    })

    console.log(this._uid)
  }
}
</script>
