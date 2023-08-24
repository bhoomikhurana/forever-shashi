<template>
  <div class="home" id="home">
    <Carousel :autoplay="3000" :wrap-around="true">
      <Slide v-for="slide in 6" :key="slide">
        <div class="carousel__item">
          <img :src="getImgUrl(slide)" class="image-style" alt="" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";
export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  methods: {
    getImgUrl(index) {
      return require(`~/assets/Background/${index}.jpg`);
    },
  },
});
</script>

<style>
.home {
  margin-top: 6%;
  /* height: 200px; */
}
.carousel__item {
  object-fit: cover;
  height: 540px;
  /* height: 100%; */
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-style {
  width: 100%;
  height: 100%;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: white;
}
.carousel__prev:hover,
.carousel__next:hover {
  box-sizing: content-box;
  color: rgb(195, 195, 195);
}
</style>
