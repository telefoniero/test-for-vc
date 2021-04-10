<template>
  <div class="info-frame">
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
        :shown="statsShown"
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
    }
  }
}
</script>
