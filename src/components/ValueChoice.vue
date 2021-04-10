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
          <vue-slider 
            v-model="value" 
            width="100%"
            height="9px"
            :lazy="true"
            dotSize="25"
            :min="limits[0]"
            :max="limits[1]"
            @change="passValue"
            @dragging="onDrag"
          >
          <template v-slot:dot>
            <div class="value-range__dot"></div>
          </template>
          <template v-slot:tooltip="{ value }">
            <div class="value-range__tooltip">{{ value + ' ₽'}}</div>
          </template>
          <template v-slot:process="{style}">
            <div class="value-range__process" :style="[style]"></div>
          </template>
          </vue-slider>
          <span class="value-range__limit">{{limits[1]}} &#8381;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'

export default {
  data() {
    return {
      limits: [0, 50000],
      value: 0,
    }
  },
  components: {
    VueSlider
  },
  methods: {
    passValue() {
      this.$emit('pass-value', this.value)
    },
    onDrag() {
      this.$emit('dragging-value')
    }
  }
}
</script>