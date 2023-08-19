<template>
  <Carousel :autoplay="3000" :wrap-around="true">
    <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">
        <img :src="getImgUrl(slide)" class="image-style" alt="" />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
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
      return require(`~/assets/Background/${index}.png`);
    },
  },
});
</script>

<style>
.carousel__item {
  height: 600px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  /* border-radius: 8px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-style {
  width: 100%;
  height: 100%;
}
.carousel__slide {
  /* padding: 10px; */
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  /* border: 5px solid white; */
  color: white;
}
.carousel__prev,
.carousel__next:hover {
  box-sizing: content-box;
  /* border: 5px solid white; */
  color: rgb(195, 195, 195);
}
</style>
