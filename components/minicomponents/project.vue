<template>
  <!-- Project Item -->
  <div class="project">
    <div class="project--normal">
      <h3>{{ project.name }}</h3>
      <p>{{ project.smDescription }}</p>
    </div>
    <div class="project--hover">
      <i class="fas fa-search-plus"></i>
    </div>
    <div class="project--bg">
      <div class="project--overlay"></div>
      <img :src="project.imgCover" :alt="project.name + ' imagen'" />
    </div>
  </div>
  <!-- Project Item End -->
</template>

<script>
export default {
  props: ['project']
}
</script>

<style>
</style>
