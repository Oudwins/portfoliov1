<template>
  <!-- Project Item -->
  <div class="projects">
    <app-project v-for=" project in projects" :key="project.name" :project="project"></app-project>
  </div>
  <!-- Project Item End -->
</template>

<script>
import Project from './minicomponents/project.vue'
export default {
  props: ['projects'],
  components: {
    appProject: Project
  }
}
</script>

<style>
</style>
