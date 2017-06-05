<template>
  <div class="profile">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
const name = 'JuanMa'
export default {
  name: 'profile',
  data () {
    return {
      msg: `I'm ${name} and this is my The Profile Page`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: green;
}
</style>
