<template>
  <div class="skills">
    <app-skill v-for="skill in skills" :key="skill.name" :skill="skill"></app-skill>
  </div>
</template>

<script>
import Skill from "./minicomponents/Skill.vue";
export default {
  props: ["skills"],
  components: {
    appSkill: Skill
  }
};
</script>

<style lang="scss">
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: $spacer0 $spacer0;
}
</style>