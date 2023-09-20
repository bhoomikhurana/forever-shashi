<template>
  <div id="about" class="container">
    <div class="heading">
      <h2>about</h2>
    </div>
    <div class="who-we-are">
      <div class="subheading">
        <h3>who we are</h3>
      </div>
      <p>
        Forever Shashi Foundation (FSF) is a registered pan-India NGO with the
        aim to educate and empower adolescents and youth on various social and
        environmental issues. We employ experiential and participatory learning
        approaches via workshops, training, campaigns and community building
        activities to impact change.
      </p>
      <p>
        The foundation’s methodology is founded in the belief that by engaging
        children in these issues from an early age, they can foster a culture of
        responsibility, awareness and action among the future generations.
      </p>

      <br />
      <div class="subheading">
        <h3>Inspiration</h3>
        <div class="text-and-image">
          <div class="text">
            <p>
              Our NGO, Forever Shashi Foundation, is dedicated to preserving and
              promoting the values and passions of our beloved founder, Mrs.
              Shashi Sinha. She was not just a homemaker but also a source of
              inspiration and a role model for many. Her love for nature and her
              compassionate nature shaped the lives of her family and those
              around her. She was a strong and empowered woman who constantly
              uplifted those around her.
            </p>
            <p>
              Mrs. Shashi Sinha's roots were deeply connected to the lap of
              nature, as she grew up in small green townships where she
              developed a profound appreciation for the natural world. Despite
              shifting to the bustling city of Delhi after her marriage, she
              refused to let go of her love for nature. In fact, she embraced
              every opportunity to be close to it, cherishing every vacation
              trip by immersing herself in the beauty of natural waters and
              forests.
            </p>
            <p>
              Her passion for nature was truly remarkable. Mrs. Sinha had an
              extraordinary ability to recognize different trees from a distance
              just by observing their leaves, a skill honed by her deep
              connection with the natural world. This love for nature also
              influenced her perspective on life and how she raised her
              children.
            </p>
            <p>
              As a mother, she devoted herself to grooming her three daughters
              and one son into not just successful professionals but also
              kind-hearted and compassionate individuals. She believed in
              nurturing them not just for personal success, but also for the
              betterment of society. Her children imbibed her values and carried
              them forward as they grew into adulthood, becoming an integral
              part of Forever Shashi Foundation.
            </p>
            <p>
              Join us in celebrating the life of a remarkable woman, Mrs. Shashi
              Sinha, whose passion for nature and compassion for humanity
              continue to inspire us. Forever Shashi Foundation is a tribute to
              her legacy, and we strive to uphold the values she instilled in
              her family.
            </p>
            <p>
              Together, let's build a greener and more compassionate world with
              the Forever Shashi Foundation. Let's come together and make a
              positive impact on our planet, just as she did throughout her
              life.
            </p>
          </div>
          <div class="image">
            <!-- <img
              src="https://ik.imagekit.io/fawaazfaris/forever-shashi/forever-shashi/mrs-shashi.png"
              alt=""
            /> -->
            <img src="../assets/mrs-shashi.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#about {
  padding-top: 3em;
}
.text-and-image {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2em;

  .text {
    flex: 0 0 70%;
  }

  .image {
    flex: 0 0 25%;

    img {
      max-width: 140%;
    }
  }
}

@media (max-width: 35em) {
  #about {
    padding-top: 0;
  }

  .text-and-image {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;

    .image {
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 50%;
    }
  }
}
</style>
