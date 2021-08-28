<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'brazil' }">Brazil</router-link>
    <router-link :to="{ name: 'hawaii' }">Hawaii</router-link>
    <router-link :to="{ name: 'panama' }">Panama</router-link>
    <router-link :to="{ name: 'jamaica' }">Jamaica</router-link>
  </div>
</template>

<style scoped>
#nav a.nav-link-active {
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
}
</style>
