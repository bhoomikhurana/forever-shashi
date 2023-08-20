<template>
  <div class="member-container">
    <div class="member-wrapper">
      <img :src="imageURL" alt="" class="banner-image" />
      <h1 class="member-name">{{ member.name }}</h1>
      <div class="member-des">
        <p class="btn fill">{{ member.designation }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: Object,
    imageURL: String,
  },
};
</script>

<style>
.member-container {
  border-radius: 12px;
  padding: 38px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.member-wrapper {
  width: 80%;
  height: 110%;
}

.banner-image {
  margin-top: 2px;
  height: 200px;
  width: 100%;
  border-radius: 12px;
}

.member-name {
  font-family: "Righteous", sans-serif;
  font-family: "Montserrat";
  color: rgba(255, 255, 255, 0.98);
  text-transform: uppercase;
  font-size: 1.4rem;
}

.member-des {
  color: #fff;
  font-family: "Lato", sans-serif;
  font-family: "Montserrat";
  text-align: center;
  /* font-size: 1.8rem; */
  line-height: 150%;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-top: 10%;
}

/* .button-wrapper {
  margin-top: 18px;
} */

.btn {
  border: none;
  padding: 12px 24px;
  border-radius: 12px;
  /* font-size: 12px; */
  font-size: 1rem;
  letter-spacing: 2px;
  /* cursor: pointer; */
}

/* .btn + .btn {
  margin-left: 10px;
} */

/* .outline {
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  transition: all 0.3s ease;
} */

/* .outline:hover {
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
} */

.fill {
  background: rgba(255, 255, 255, 0.95);
  color: black;
  filter: drop-shadow(0);
  font-weight: bold;
  /* transition: all 0.3s ease; */
}
</style>
