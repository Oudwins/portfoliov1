<template>
  <!-- Project Item -->
  <div
    class="project"
    :style="'background: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(' + path() + ') center/cover no-repeat'"
  >
    <div class="project--normal">
      <h3>{{ project.name }}</h3>
      <p>{{ project.smDescription }}</p>
    </div>
    <div class="project--hover">
      <i class="fas fa-search-plus"></i>
    </div>
  </div>
  <!-- Project Item End -->
</template>

<script>
export default {
  props: ["project"],
  methods: {
    path(path) {
      return require(`~/assets/img/${this.project.imgCover}`);
    },
  },
};
</script>

<style lang="scss">
.project {
  flex: 1 1 500px;
  position: relative;
  height: 250px;
  text-align: center;
  margin: $spacer $spacer;
  @include box_shadow;
  color: white;
  cursor: pointer;
  overflow: hidden;
}

/* Center all things inside project s & place above  bg */
.project--normal,
.project--hover {
  @include abs_center;
  z-index: 1;
}

/* Prepare for hover effect */
.project--normal {
  opacity: 1;
  transition: opacity 400ms ease-in 100ms;
}

.project--hover {
  font-size: 3rem;
  opacity: 0;
  pointer-events: none;
}

/* Hover Effects */
.project:hover .project--normal {
  @include transition_basic;
  opacity: 0;
}

.project:hover .project--hover {
  transition: opacity 200ms ease-in 200ms;
  opacity: 1;
}

@media all and (min-width: 1150px) {
  .project {
    flex-basis: 45%;
  }
}
</style>
