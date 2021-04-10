<template>
  <div class="toggle-btn__container">
    <button type="button" class="toggle-btn__btn" @click="updateBtn">
      <span class="text">{{btnText[opened ? 1 : 0]}}</span>
      <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7.55598 5.95238L14.0892 1" stroke="#FE4D4A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      btnText: ['А как в среднем у читателей vc.ru', 'Свернуть'],
      opened: false
    }
  },
  methods: {
    updateBtn(event) {
      let btn = event.target.closest('button')
      this.opened = !this.opened
      btn.classList.toggle('opened')
      this.$emit('toggle-height', this.opened)
    }
  }
}
</script>
