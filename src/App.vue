<template>
  <div id="nav">
    <TheNavigation />
    <router-view v-slot="{ Component }">
      <!-- <transition name="moveUp"> -->
      <!-- <transition name="slide" mode="out-in"> -->
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>
  </div>
</template>
<script>
import TheNavigation from "@/components/TheNavigation";

export default {
  components: {
    TheNavigation,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        document.title = to.meta.title || "Travel App";
      },
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.8s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.6s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.input {
  border: 1px solid green;
  padding: 10px;
  margin-bottom: 20px;
}
.btn {
  background-color: green;
  color: white;
  padding: 10px;
}
</style>
