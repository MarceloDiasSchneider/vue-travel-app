<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue Router Travel App</router-link>
    <router-link :to="{ name: 'brazil' }">Brazil</router-link>
    <router-link :to="{ name: 'hawaii' }">Hawaii</router-link>
    <router-link :to="{ name: 'panama' }">Panama</router-link>
    <router-link :to="{ name: 'jamaica' }">Jamaica</router-link>
    <router-link
      v-for="destination in destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      {{ destination.name }}
    </router-link>
    <router-link :to="{ name: 'protected' }">Protected</router-link>
    <router-link :to="{ name: 'login' }">Login</router-link>
  </div>
</template>

<script>
import sourceData from "@/data.json";

export default {
  data() {
    return {
      destinations: sourceData.destinations,
    };
  },
};
</script>

<style scoped>
#nav a.nav-link-active:not(#logo) {
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
}
</style>
