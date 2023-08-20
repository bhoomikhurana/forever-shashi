<style scoped></style>

<template>
  <div>
    <h1 id="name">{{ project.name }}</h1>
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
#desc {
  font-size: 1rem;
}
</style>
