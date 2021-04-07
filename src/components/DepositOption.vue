<template>
  <div class="deposit-option">
    <div class="deposit-option__coins">
    </div>
    <span class="deposit-option__value">
      ~ {{ countedSum + ' ₽'}}
    </span>
    <p class="deposit-option__text text">
      {{noteText}}
      <a class="deposit-option__link" href="#">?</a>
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
  }
}
</script>
