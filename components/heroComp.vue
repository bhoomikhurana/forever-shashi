<template>
  <div>
    <div :style="{ backgroundImage: `url(${backgroundUrl})` }">Content with background here</div>
    <!-- <div class="hero" :style="{ backgroundImage: `url(${backgroundUrl})` }"> -->
  </div>
</template>

<script>
// import backgroundUrl from '../../assets/background.jpeg'
// export default {
//   data() {
//     return { backgroundUrl }
//   }
// }
</script>
<style scoped>
.hero {
  margin: 100px 0 50px 0;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

.heroimage {
  width: 100%;
  height: auto;
}

.heroimage img {
  object-fit: contain;
  width: 100%;
  height: auto;
}

@media (max-width: 35em) {
  .hero {
    margin: 0;
  }
}
</style>