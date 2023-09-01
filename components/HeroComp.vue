<template>
  <div id="hero">
    <Carousel
      :autoplay="3000"
      :transition="1000"
      :wrap-around="true"
      :items-to-show="1"
    >
      <Slide :key="1">
        <div class="carousel__item">
          <img src="~/assets/carousel/1.jpg" alt="" />
        </div>
      </Slide>
      <Slide :key="2">
        <div class="carousel__item">
          <img src="~/assets/carousel/2.jpg" alt="" />
        </div>
      </Slide>
      <Slide :key="3">
        <div class="carousel__item">
          <img src="~/assets/carousel/3.jpg" alt="" />
        </div>
      </Slide>
      <Slide :key="2">
        <div class="carousel__item">
          <img src="~/assets/carousel/4.jpg" alt="" />
        </div>
      </Slide>
      <Slide :key="5">
        <div class="carousel__item">
          <img src="~/assets/carousel/5.jpg" alt="" />
        </div>
      </Slide>
      <Slide :key="6">
        <div class="carousel__item">
          <img src="~/assets/carousel/6.jpg" alt="" />
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
</script>

<style lang="scss" scoped>
#hero {
  padding-top: 5em;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: cover;
    aspect-ratio: 16/6;
    width: 100%;
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

@media (max-width: 35em) {
  #hero {
    padding-top: 0;
  }

  .carousel__item {
    min-height: 200px;
    width: 100%;
    background-color: var(--vc-clr-primary);
    color: var(--vc-clr-white);
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      object-fit: cover;
      aspect-ratio: 16/10;
      width: 100%;
    }
  }
}
</style>
