<template>
  <div class="value-choice">
    <div class="container">
      <div class="wrapper">
        <h2 class="value-choice__title title">
          Сколько денег вы откладываете в месяц?
        </h2>
        <span class="value-choice__text text">
          Ответьте и узнаете, сколько копят другие.
        </span>
        <div class="value-choice__value-range value-range">
          <span class="value-range__limit">{{limits[0]}} &#8381;</span>
          <range-slider
            class="value-range__range" 
            type="range" 
            v-model="value"
            width="100%"
            :min="limits[0]"  
            :max="limits[1]"
            height="9"
            :dot-size="9"
            formatter="{value} ₽"
            :bg-style="{borderRadius: '8px'}"
            :process-style="{background: 'linear-gradient(90deg, #FF9796 4.65%, #FE4D4A 101.3%)'}"
          >
          </range-slider>
          <span class="value-range__limit">{{limits[1]}} &#8381;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-range-component/dist/vue-range-slider.css'
import RangeSlider from 'vue-range-component'

export default {
  data() {
    return {
      limits: [0, 50000],
      value: 0
    }
  },
  components: {
    RangeSlider
  }
}
</script>