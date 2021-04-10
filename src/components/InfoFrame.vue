<template>
  <transition
    name="expand-frame"
    @enter="enter_frame"
    @after-enter="afterEnter_frame"
    @leave="leave_frame"
  >
    <div class="info-frame" v-if="frameShown">
      <div class="container">
        <div class="wrapper">
          <h2 class="info-frame__title title">
            Вы откладываете {{ deferredSum + ' ₽'}} в месяц.
            <br />
            За три года вы бы заработали:
          </h2>
            <deposit-list
              class="info-frame__list"
              :deferredSum="deferredSum"
            >
            </deposit-list>
        </div>
        <user-stats
          :averageSum="averageSum"
          :percentageOverThousand="percentageOverThousand"
          :percentageOverTenThousand="percentageOverTenThousand"
          :statsShown="statsShown"
          ></user-stats>
        <toggle-btn
          @toggle-height="toggleStatsHeight"
        ></toggle-btn>
        <div class="info-frame__info-btns info-btns">
          <span class="info-btns__text text">
            Как начать инвестировать?
          </span>
          <a
            href="https://alfabank.ru/make-money/investments/"
            class="info-btns__link"
            target="_blank"
          >
            Узнать
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import DepositList from './DepositList.vue'
import UserStats from './UserStats.vue'
import ToggleBtn from './ToggleBtn.vue';

export default {
  props: {
    deferredSum: {
      type: Number,
      required: true
    },
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
    frameShown: {
      type: Boolean,
      required: true
    }
  },
  components: {
    DepositList,
    UserStats,
    ToggleBtn
  },
  data() {
    return {
      statsShown: false
    }
  },
  methods: {
    toggleStatsHeight(value) {
      this.statsShown = value
    },
    enter_frame(el) {
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
    afterEnter_frame(el) {
      el.style.height = 'auto';
      el.style.opacity = '1'
      let top = el.getBoundingClientRect().top
      scrollTo({
        top: top,
        behavior: 'smooth'
      })
    },
    leave_frame(el) {
      const height = getComputedStyle(el).height;
      
      el.style.height = height;

      getComputedStyle(el).height;

      requestAnimationFrame(() => {
        el.style.height = 0;
        el.style.opacity = 0
      });
    }
  }
}
</script>
