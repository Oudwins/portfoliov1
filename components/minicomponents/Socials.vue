<template>
  <div>
    <a
      :href="social.url"
      target="_blank"
      rel="noopener noreferrer nofollow"
      class="hero-social"
      v-for="social in socials"
      :key="social.id"
    >
      <i :alt="social.name" :class="social.class"></i>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      socials: this.$store.state.socials,
    };
  },
};
</script>

<style>
</style>