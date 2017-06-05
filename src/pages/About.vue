<template>
  <div class="about">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const name = 'JuanMa'
export default {
  name: 'about',
  data () {
    return {
      msg: `I'm ${name} and this is my The About Page`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: red;
}
</style>
