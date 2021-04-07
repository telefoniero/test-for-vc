<template>
  <div>
    <deposit-option
      v-for='(option, index) in options'
      :key = 'index'
      :countedSum="total(index)"
      :noteText="option.noteText"
    >
    </deposit-option>
  </div>
</template>

<script>
import DepositOption from './DepositOption.vue'

export default {
  props: {
    deferredSum: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      options: [{
        rate: 0,
        noteText: 'если складывать под матрас'
      },
      {
        rate: 0.0698,
        noteText: 'если откладывать на депозит'
      },
      {
        rate: 0.7121,
        noteText: 'если инвестировать в ПИФ «Альфа-Капитала»'
      }
      ]
    }
  },
  methods: {
    total(idx) {
      let sum = this.deferredSum
      switch (idx) {
        case 0:
          sum = this.deferredSum * 36
          break
        case 1:
          for (let i = 1; i < 35; i++) {
            sum += this.deferredSum * ((1 + this.options[idx].rate / 12) ** i)
          }
          break
        case 2:
            sum = this.deferredSum * 36 * (this.options[idx].rate + 1)
          break
      }
      return Math.round(sum)
    }
  },
  components: {
    DepositOption
  }
}
</script>
