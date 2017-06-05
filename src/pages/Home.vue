<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const name = 'JuanMa'
export default {
  name: 'home',
  data () {
    return {
      msg: `I'm ${name} and this is my The Home Page`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blue;
}
</style>
