<template>
  <div>
    <h1>{{text}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: 'hello'
    }
  }
}
</script>

<style>
  h1 {
    color:red;
    text-align: center;
  }
</style>