<template>
  <div class="deposit-option">
    <div class="deposit-option__coins">
    </div>
    <span class="deposit-option__value">
      ~ {{ countedSum + ' ₽'}}
    </span>
    <p class="deposit-option__text text">
      {{noteText}}
      <button class="deposit-option__btn" href="#">?</button>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    countedSum: {
      type: Number,
      required: true
    },
    noteText: {
      type: String,
      required: true
    },
    popupText: {
      type: String,
      required: true
    }
  }
}
</script>
