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
    <div class="bottom-test-block"></div>
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
      let valCount = 0
      for (let key of Object.keys(localStorage)) {
        if (key !== 'imagePath' && key !== 'coinEquivalent') {
          this.averageSum += parseInt(localStorage.getItem(key))
          valCount++
        }
      }
      this.averageSum = Math.round(this.averageSum/valCount)
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
      if (value !== 0) {
        this.showFrame = true
        this.updateSum(value)
        this.updateAverage()
        this.updateStats()

        localStorage.setItem('coinEquivalent', this.deferredSum * 36 / 10)

        if (this.averageSum <= 10000) {
          localStorage.setItem('imagePath','assets/img/average/average-1.png')
        } else if (this.averageSum > 11000 && this.averageSum <= 20000 ) {
          localStorage.setItem('imagePath','assets/img/average/average-2.png')
        } else if (this.averageSum > 21000 && this.averageSum <= 30000 ) {
          localStorage.setItem('imagePath','assets/img/average/average-3.png')
        } else if (this.averageSum > 31000 && this.averageSum <= 40000 ) {
          localStorage.setItem('imagePath','assets/img/average/average-4.png')
        } else if (this.averageSum > 41000 && this.averageSum <= 50000 ) {
          localStorage.setItem('imagePath','assets/img/average/average-5.png')
        }
      }
    },
    hideFrame() {
      this.showFrame = false
    }
  }
}
</script>