<template>
  <div>
    <value-choice></value-choice>
  </div>
</template>

<script>
import ValueChoice from './components/ValueChoice.vue'
export default {
  components: {
    ValueChoice
  },
  data() {
    return {
      text: 'hello'
    }
  }
}
</script>