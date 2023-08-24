<template>
  <div class="about" id="about">
    <div class="container">
      <!-- <div class="heading"> -->
      <!-- <h3>about</h3> -->
      <h4 id="sub-heading">Inspiration</h4>
      <!-- </div> -->

      <p>
        Our NGO, <span class="decor"> Forever Shashi Foundation</span> , is
        dedicated to preserving and promoting the values and passions of our
        beloved founder, <span class="decor"> Mrs. Shashi Sinha</span> . She was
        not just a homemaker but also a source of inspiration and a role model
        for many. Her love for nature and her compassionate nature shaped the
        lives of her family and those around her. She was a strong and empowered
        woman who constantly uplifted those around her.
      </p>
      <br />
      <p>
        Mrs. Shashi Sinha's roots were deeply connected to the lap of nature, as
        she grew up in small green townships where she developed a profound
        appreciation for the natural world. Despite shifting to the bustling
        city of Delhi after her marriage, she refused to let go of her love for
        nature. In fact, she embraced every opportunity to be close to it,
        cherishing every vacation trip by immersing herself in the beauty of
        natural waters and forests.
      </p>
      <br />
      <p>
        Her passion for nature was truly remarkable. Mrs. Sinha had an
        extraordinary ability to recognize different trees from a distance just
        by observing their leaves, a skill honed by her deep connection with the
        natural world. This love for nature also influenced her perspective on
        life and how she raised her children.
      </p>
      <br />
    </div>
    <div class="containertwo">
      <p class="break">
        As a mother, she devoted herself to grooming her three daughters and one
        son into not just successful professionals but also kind-hearted and
        compassionate individuals. She believed in nurturing them not just for
        personal success, but also for the betterment of society. Her children
        imbibed her values and carried them forward as they grew into adulthood,
        becoming an integral part of Forever Shashi Foundation.
      </p>
      <br />
      <p class="break">
        Join us in celebrating the life of a remarkable woman, Mrs. Shashi
        Sinha, whose passion for nature and compassion for humanity continue to
        inspire us. Forever Shashi Foundation is a tribute to her legacy, and we
        strive to uphold the values she instilled in her family.
      </p>
      <br />
      <p class="break">
        Together, let's build a greener and more compassionate world with the
        Forever Shashi Foundation. Let's come together and make a positive
        impact on our planet, just as she did throughout her life.
      </p>
    </div>
    <div class="photo">
      <img :src="imgSource" alt="" />

      <h4 id="auth">Mrs Shashi Sinha</h4>
    </div>
  </div>

  <!-- <div id="quote">
      ❝ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
      reiciendis.❞
    </div> -->
  <!-- <blockquote class="quote">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
      laudantium!
    </blockquote>-->
  <!-- <cite class="quote" id="author">~Mrs Shashi</cite> -->
  <!-- <div class="photo"> -->
</template>

<script>
export default {
  props: {
    imgSource: String,
  },
};
</script>

<style scoped>
.container {
  width: 50%;
  text-align: left;
  margin-inline-start: 11%;
  /* display: flex; */
  /* justify-content: flex-start; */
}
.heading h3 {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2em;
}
.about p {
  font-weight: 400;
  position: relative;
  /* top: 20%; */
  color: black;
}
.containertwo {
  /* width: 70%; */
  text-align: left;
  /* margin: 10px 10%; */
  margin-inline-start: 13%;
  margin-inline-end: 13%;
  margin-bottom: 2%;
  /* margin-right: 200px; */
}
.photo {
  /* display: flex;
  justify-content: flex-end; */
  position: absolute;
  right: 10%;
  top: 150%;
  /* margin-inline-end: 10%; */
}
#sub-heading {
  padding-bottom: 1rem;
}
.decor {
  text-decoration: underline;
  text-decoration-color: rgb(255, 102, 0);
  font-weight: 500;
}

#auth {
  text-align: center;
  position: absolute;
  top: 78%;
  left: 32%;

  /* right: 10%; */

  /* margin-top: 1%; */
  /* padding: 2%; */
}

img {
  width: 28vw;
  min-height: 44vh;

  margin: 20px;
}
</style>
