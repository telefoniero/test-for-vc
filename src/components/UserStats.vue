<template>
  <transition 
    name="show-stats"
    @enter="enter_stats"
    @after-enter="afterEnter_stats"
    @leave="leave_stats"
  >
    <div class="user-stats" v-if="statsShown">
      <div class="user-stats__average average-value stats-item">
        <div class="stats-item__display average-value__display">
          <img :src="image" alt="Масштаб отложенных средств" class="average-value__image">
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
            <div class="infographics__donut donut-chart">
              <div class="donut-chart__white-circle"></div>
                <svg viewBox="0 0 156 156" stroke-dasharray="396px" class="donut-chart__border" style="stroke-dashoffset: 396;">
                  <circle cx="78" cy="78" r="63" fill="none"></circle>
                </svg>
              </div>
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
            <div class="infographics__donut donut-chart">
              <div class="donut-chart__white-circle"></div>
                <svg viewBox="0 0 156 156" stroke-dasharray="396px" class="donut-chart__border" style="stroke-dashoffset: 396;">
                  <circle cx="78" cy="78" r="63" fill="none"></circle>
                </svg>
              </div>
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
    },
    statsShown: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      image: localStorage.getItem('imagePath')
    }
  },
  watch: {
    averageSum() {
      this.image = localStorage.getItem('imagePath')
      this.updateDonuts()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.updateDonuts()
    }) 
  },
  methods: {
    updateDonuts() {
      if (this.$el.children) {
        let donutBorders = this.$el.querySelectorAll('.donut-chart__border');
        if (donutBorders) {
          [this.percentageOverThousand, this.percentageOverTenThousand].forEach((data,idx) => {
            donutBorders[idx].style.strokeDashoffset = `${396 - data / 100 * 396}`
          })
        }
      }
    },
    enter_stats(el) {
      const width = getComputedStyle(el).width;

      el.style.width = width;
      el.style.position = 'absolute';
      el.style.visibility = 'hidden';
      el.style.height = 'auto';

      const height = getComputedStyle(el).height;

      el.style.width = null;
      el.style.position = null;
      el.style.visibility = null;
      el.style.height = 0;

      getComputedStyle(el).height;


      requestAnimationFrame(() => {
        el.style.height = height;
      });
    },
    afterEnter_stats(el) {
      el.style.height = 'auto';
      scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      })
      this.updateDonuts()
    },
    leave_stats(el) {
      const height = getComputedStyle(el).height;
      
      el.style.height = height;

      getComputedStyle(el).height;

      requestAnimationFrame(() => {
        el.style.height = 0;
      });
    }
  }
}
</script>
