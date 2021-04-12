<template>
  <div>
    <deposit-option
      v-for='(option, index) in options'
      :key = 'index'
      :countedSum="total(index)"
      :noteText="option.noteText"
      :popupText="option.popupText"
      :url="option.url"
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
        noteText: 'если складывать под матрас',
        popupText: 'В этом мало смысла — такие накопления «съедает» инфляция',
      },
      {
        rate: 0.0698,
        noteText: 'если откладывать на депозит',
        popupText: 'Ставки по вкладам различны в разныхбанках и зависят от многих факторов, в частности, от ключевой ставки Центрального банка РФ¹.',
        url: 'https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#1'
      },
      {
        rate: 0.7121,
        noteText: 'если инвестировать в ПИФ «Альфа-Капитала»',
        popupText: 'Вы становитесь инвестором набора компаний, который определяют профессиональные управляющие. Они решают, когда покупатьи продавать ценные бумаги, чтобыобеспечить инвестиционный доход. Купить или продать паи фонда можнов любой момент².',
        url: 'https://vc.ru/promo/76505-alfa-kapital-yuridicheskaya-informaciya?ea=678fa71362d1b64dda32a1e6c54730abd442d756633f11fa1548bfcc17e7bfb5#2'
      }
      ]
    }
  },
  methods: {
    total(idx) {
      let sum = this.deferredSum
      function updateCoinEquivalent(sum) {
        if (Math.round(sum) / 10 > localStorage.getItem('coinEquivalent')) {
          localStorage.setItem('coinEquivalent', Math.round(sum) / 10)
        }
      }
      switch (idx) {
        case 0:
          sum = this.deferredSum * 36
          updateCoinEquivalent(sum)
          break
        case 1:
          for (let i = 1; i < 35; i++) {
            sum += this.deferredSum * ((1 + this.options[idx].rate / 12) ** i)
          }
          updateCoinEquivalent(sum)
          break
        case 2:
          sum = this.deferredSum * 36 * (this.options[idx].rate + 1)
          updateCoinEquivalent(sum)
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
