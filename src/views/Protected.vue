<template>
  <div>
    <h1>Protected</h1>
    <p>Hi {{ username }}</p>
    <p>You got access to this page</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: window.user,
    };
  },
  methods: {
    logout() {
      window.user = null;
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
