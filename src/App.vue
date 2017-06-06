<template>
  <div id="app">
    <nav class="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
      <router-link :to="{ name: 'Profile' }">Profile</router-link>
      <router-link :to="{ name: 'Applicants' }">Applicants</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
