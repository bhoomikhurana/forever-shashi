<template>
  <div class="about" id="about">
    <div class="container">
      <div class="heading">
        <h3>about</h3>
      </div>
      <p>
        Forever Shashi Foundation (FSF) a registered pan-India NGO with the aim
        to educate and empower adolescents and youth on various social and
        environmental issues. We employ experiential and participatory learning
        to the issues via workshops, training, campaigns and community building
        activities
      </p>
      <br />
      <p>
        The foundation’s methodology is founded in the belief that by engaging
        children in these issues from an early age, they can foster a culture of
        responsibility, awareness and action among the future generations.
      </p>
      <br />
      <p>
        The inspiration for our organization emanates from the remarkable Late
        Mrs. ____ Shashi. She has been the motivation for us to improve and
        challenge ourself through compassionate and charitable acts of giving
        back to the society to forge a community of people who uplift and
        support people as well as nature around us. Her channeled energy and
        efficiency, drives our passion in creating this venture and to make
        world a better place than before.
      </p>
    </div>
    <!-- <div id="quote">
      ❝ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel,
      reiciendis.❞
    </div> -->
    <blockquote class="quote">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
      laudantium!
    </blockquote>
    <cite class="quote" id="author">~Mrs Shashi</cite>
    <div>
      <img src="../assets/mrs-shashi.png" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.heading h3 {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2em;
}
.about p {
  font-weight: 600;
  position: relative;
  /* top: 20%; */
  color: black;
}
.quote {
  font-style: italic;
  text-align: center;
  font-family: "Special Elite", cursive;
  background: #ffffff;
  color: #9a9a9a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#author {
  color: #9a9a9a;
}
img {
  width: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
body {
}

blockquote {
  font-weight: 100;
  font-size: 2rem;
  max-width: 600px;
  line-height: 1.4;
  position: relative;
  margin-left: 30%;
  padding: 0.5rem;
}

blockquote:before,
blockquote:after {
  position: absolute;
  color: #9a9a9a;
  font-size: 8rem;
  width: 4rem;
  height: 4rem;
}

blockquote:before {
  content: "“";
  left: -5rem;
  top: -2rem;
}

blockquote:after {
  content: "”";
  right: -5rem;
  bottom: 1rem;
}

cite {
  line-height: 3;
  text-align: left;
}
</style>
