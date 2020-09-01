<template>
  <div class="skill">
    <img :src="require(`~/assets/img/${skill.img}`)" :alt="skill.name + ' icono'" v-if="skill.img" />
    <p class="skill-name">{{ skill.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["skill"]
};
</script>

<style lang="scss">
.skill {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 5px 5px;
  margin: 5px;
  border: 2px solid $primary;
}

.skill img {
  height: 25px;
  width: 25px;
  margin-right: 5px;
}
</style>