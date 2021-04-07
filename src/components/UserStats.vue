<template>
  <transition name="">
    <div class="user-stats">
      <div class="user-stats__average average-value stats-item">
        <div class="stats-item__display average-value__display">
          <img :src="image" alt="" class="average-value__image">
          <span class="average-value__value">
            ~ {{ averageSum + ' ₽'}}
          </span>
        </div>
        <p class="average-value__text text">
          в среднем откладывают читатели vc.ru
        </p>
      </div>
      <div class="user-stats__infographics infographics stats-item">
        <div class="infographics__item">
          <div class="infographics__display stats-item__display">
            <vc-donut
              background="#FEEBEF"
              foreground="#fff"
              :total="100"
              :size="126"
              :thickness="20"
              unit="px"
              :sections="[{value: percentageOverThousand}]"
            >
            </vc-donut>
            <span class="infographics__text">
              {{percentageOverThousand + ' %'}}
            </span>
          </div>
          <p class="average-value__text text">
            читателей откладывают больше 1000 ₽ в месяц
          </p>
        </div>
        <div class="infographics__item">
          <div class="infographics__display stats-item__display">
            <vc-donut
              background="#FEEBEF"
              foreground="#fff"
              :total="100"
              :size="126"
              :thickness="20"
              unit="px"
              :sections="[{value: percentageOverTenThousand, color: '#FE4D4A'}]"
            >
            </vc-donut>
            <span class="infographics__text">
              {{percentageOverTenThousand + ' %'}}
            </span>
          </div>
          <p class="average-value__text text">
            читателей откладывают больше 10 000 ₽ в месяц
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Donut from 'vue-css-donut-chart';
import 'vue-css-donut-chart/dist/vcdonut.css';
import { Vue } from 'vue-property-decorator';

Vue.use(Donut)

export default {
  props: {
    averageSum: {
      type: Number,
      required: true
    },
    percentageOverThousand: {
      type: Number,
      required: true
    },
    percentageOverTenThousand: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      image: 'assets/img/average-1.svg',
    }
  },
  watch: {
    averageSum() {
      if (this.averageSum <= 10000) {
        this.image = 'assets/img/average-1.svg'
      } else if (this.averageSum > 11000 && this.averageSum <= 20000 ) {
        this.image = 'assets/img/average-2.svg'
      } else if (this.averageSum > 21000 && this.averageSum <= 30000 ) {
        this.image = 'assets/img/average-3.svg'
      } else if (this.averageSum > 31000 && this.averageSum <= 40000 ) {
        this.image = 'assets/img/average-4.svg'
      } else if (this.averageSum > 41000 && this.averageSum <= 50000 ) {
        this.image = 'assets/img/average-5.svg'
      }
    }
  }
}
</script>
