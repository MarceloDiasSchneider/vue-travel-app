<template>
  <DestinationsShortView />
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>

<script>
// import sourceData from "@/data.json";
import DestinationsShortView from "@/components/DestinationsShortView.vue";

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  components: {
    DestinationsShortView,
  },
  data() {
    return {
      destination: null,
    };
  },
  methods: {
    async fecthDestination() {
      const response = await fetch(
        `https://travel-dummy-api.netlify.app/${this.slug}`
      );
      this.destination = await response.json();
    },
  },
  async created() {
    this.fecthDestination();
    // this.$watch(
    //   () => this.$route.params,
    //   async () => {
    //     this.fecthDestination();
    //   }
    // );
  },
};
</script>
