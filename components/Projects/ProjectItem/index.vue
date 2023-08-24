<style scoped></style>

<template>
  <div>
    <h1 id="desc">{{ project.desc }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style>
.img-container {
  width: ;
}
#desc {
  font-size: 1rem;
  border-radius: 10px;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.177);
  backdrop-filter: blur(5px);
  padding: 2%;
}
.texture-img {
  width: 100%;
}
</style>
