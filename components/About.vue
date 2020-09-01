<template>
  <!-- 2 col layout, with image on side  -->
  <div class="about">
    <div class="left">
      <img src="~assets/img/about/image.jpeg" alt="Personal Photo" />
    </div>
    <div class="right">
      <h2>Sobre Mí</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eligendi quibusdam earum dolorem blanditiis nesciunt saepe alias consectetur omnis ut.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eligendi quibusdam earum dolorem blanditiis nesciunt saepe alias consectetur omnis ut.</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: $spacer4;
  > div {
    flex: 1 1 50%;
  }
  h2 {
    margin: $spacer 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  p {
    font-size: 1.2rem;
  }
}

.right {
  text-align: justify;
  padding: 0 $spacer3;
}

@media all and (min-width: 992px) {
  .about {
    flex-direction: row;
    padding: 0;
    margin: 0;
  }

  .right {
    @include flex_center;
    flex-direction: column;
  }
}
</style>