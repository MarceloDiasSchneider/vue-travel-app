<template>
  <div class="brazil">
    <h1>Brazil</h1>
    <button @click="teste = !teste">Teste Brazil</button>
    <div v-if="teste">
      <Teste />
    </div>
  </div>
</template>

<script>
import Teste from "@/components/BrazilTeste";

export default {
  components: {
    Teste,
  },
  // components: {
  //   Teste: () =>
  //     import(
  //       /* webpackChunkName: "brazil-teste" */ "../components/BrazilTeste.vue"
  //     ),
  // },
  data() {
    return {
      teste: false,
    };
  },
};
</script>
