<template>
  <div class="skill">
    <img :src="skill.img" :alt="skill.name + ' icono'" />
    <p class="skill-name">{{ skill.name }}</p>
  </div>
</template>

<script>
export default {
  props: ['skill']
}
</script>

<style>
.skill {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 5px 10px;
  margin: 5px;
  border: 2px solid var(--red);
}

.skill img {
  height: 25px;
  width: 25px;
}
</style>