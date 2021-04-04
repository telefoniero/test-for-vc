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
            :min="limits[0]"  
            :max="limits[1]"
            width="100%"
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

<style>
  .value-choice__title{
    margin-bottom: 11px;
  }

  .value-choice__text {
    margin-bottom: 42px;
    display: block;
  }

  .value-range {
    display: flex;
    align-items: center;
  }

  .value-range__limit {
    flex-shrink: 0;
    font-weight: 500;
  }

  .vue-range-slider.slider-component .slider-tooltip-wrap.slider-tooltip-top {
    left: calc(50% - 5px);
    top: -16px;
  }

  .vue-range-slider.slider-component .slider-tooltip-wrap .slider-tooltip {
    padding: 4px 6px;
    border: none;
    min-width: 0;
    font-size: 1rem;
    line-height: 19px;
    background-color: #FE4D4A;
  }

  .vue-range-slider.slider-component .slider-tooltip-wrap.slider-tooltip-top .slider-tooltip::before {
    transform: none;
    border-top-color: #FE4D4A;
  }

  .vue-range-slider.slider-component .slider .slider-dot {
    box-shadow: none;
    border: 8px solid #FE4D4A;
    top: -8px!important;
  }
</style>