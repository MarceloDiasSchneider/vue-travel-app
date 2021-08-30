<template>
  <section>
    <div class="experience-details">
      <h1>{{ experience.name }}</h1>
      <img :src="`/images/${experience.image}`" :alt="experience.name" />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script>
import sourceData from "@/data.json";

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
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>
