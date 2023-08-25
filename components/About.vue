<template>
  <div>
    <WhoAreWe />

    <Inspiration :imgSource="require(`~/assets/mrs-shashi-img.png`)" />
  </div>
</template>

<script>
import WhoAreWe from "./Utilities/WhoAreWe.vue";
import Inspiration from "./Utilities/Inspiration.vue";

export default {
  data() {
    return {
      WhoAreWe,
      Inspiration,
    };
  },
  components: {
    WhoAreWe,
    Inspiration,
  },
};
</script>

<style></style>
