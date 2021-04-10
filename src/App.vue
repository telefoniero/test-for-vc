<template>
  <div class="widget">
    <div class="top-test-block"></div>
    <value-choice
      @dragging-value="hideFrame"
      @pass-value="updatingData"
    ></value-choice>
    <info-frame
      :deferredSum="deferredSum"
      :averageSum="averageSum"
      :percentageOverThousand="percentageOverThousand"
      :percentageOverTenThousand="percentageOverTenThousand"
      :frameShown="showFrame"
    ></info-frame>
  </div>
</template>

<script>
import ValueChoice from './components/ValueChoice.vue'
import InfoFrame from './components/InfoFrame.vue'
export default {
  components: {
    ValueChoice,
    InfoFrame
  },
  data() {
    return {
      deferredSum: 0,
      averageSum: 0,
      percentageOverThousand: 0,
      percentageOverTenThousand: 0,
      showFrame: false
    }
  },
  methods: {
    updateSum(val) {
      this.deferredSum = val
      localStorage.setItem(`#${localStorage.length + 1}`, val)
    },
    updateAverage() {
      this.averageSum = 0
      for (let key of Object.keys(localStorage)) {
        this.averageSum += parseInt(localStorage.getItem(key))
      }
      this.averageSum = Math.round(this.averageSum/(localStorage.length))
    },
    updateStats() {
      let thousand = 0
      let tenThousand = 0
      for (let key of Object.keys(localStorage)) {
        let value = parseInt(localStorage.getItem(key))
        if (value > 1000 && value <= 10000) {
          thousand +=1
        } else if (value > 10000) {
          tenThousand +=1
        }
      }
      this.percentageOverThousand = Math.round((thousand/localStorage.length)*100)
      this.percentageOverTenThousand = Math.round((tenThousand/localStorage.length)*100)
    },
    updatingData(value) {
      this.showFrame = true
      this.updateSum(value)
      this.updateAverage()
      this.updateStats()
    },
    loaded() {
      this.updateAverage()
      this.updateStats()
    },
    hideFrame() {
      this.showFrame = false
    }
  }
}
</script>