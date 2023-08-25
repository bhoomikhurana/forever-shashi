<template>
  <div class="our-work" id="projects">
    <div class="container">
      <div class="heading">
        <h3>OUR WORK</h3>
      </div>
      <p>
        Our mission is to promote environmental conservation, sustainable
        living, and compassion for all living beings. We organize various
        initiatives, workshops, and events that focus on raising awareness about
        environmental issues, organizing tree-planting drives, and working
        towards the welfare of society.
      </p>
      <div class="row">
        <h3 class="areas">Areas of Action</h3>
        <div class="col">
          <img src="~/assets/Environmental.png" class="environmental" />
        </div>
        <div class="col">
          <img src="~/assets/illustration.png" class="illustration" />
        </div>
        <div class="col">
          <img src="~/assets/social.png" class="social" />
        </div>
      </div>
      <p>
        Our foundation offers various programs and activities that foster civic
        engagement, social awareness, leadership skills and personal growth. Our
        focus areas include:
      </p>
      <br />
      <ul>
        <li>Environmental Education trainings at schools and communities</li>
        <li>Food Sustainability awareness and drive</li>
        <li>Green Regeneration activities</li>
        <li>
          Civic responsibilities and duties awareness through trainings and
          workshops
        </li>
        <li>Awareness and trainings on Gender rights and issues</li>
        <li>Leadership skills development programs for youth</li>
      </ul>
      <br />
      <br />
      <h3 class="main-body" id="pr">PAST PROJECTS</h3>
      <br />
      <br />
      <p class="pr-para">
        We have organized several activities and events since our inception to
        mobilise the community and raise awareness on our areas of actions. Some
        of the activities we have organised are:
      </p>
      <br />
      <br />

      <ProjectItem
        class="box"
        v-for="project in projects"
        :key="project"
        :project="project"
      />
    </div>
  </div>
</template>

<script>
import ProjectItem from "./Utilities/ProjectItem.vue";

export default {
  data() {
    return {
      ProjectItem,
    };
  },
  components: {
    ProjectItem,
  },

  created() {
    this.projects = [
      {
        desc: "We have organised several events to raise awareness around festival season (such as Diwali) to advocate and raise awareness for more eco-friendly and sustainable gifting items among our relatives, our society and schools. Gifts like indoor plants planted in green shells of coconut were promoted. ",
      },
      {
        desc: "In several events at schools we held workshops to teach children to conduct a plastic and paper audit to analyze first-hand the quantity of plastic and paper being used and thrown by them on a daily to weekly basis. This was done to help the children realise the amount of waste generated and a dialogue was held with the children, families and teachers to discuss the need for sustainability and reducing waste. Further, alternative options and solutions were discussed to reduce unnecessary plastic and paper usage in their daily lives.",
      },
      {
        desc: "We have even provided training to the domestic workers in our society on understanding the basics of waste segregation, reducing wastefulness and water conservation during household cleaning activities.",
      },
      {
        desc: "Training was also provided to women in nearby financially impoverished communities to make reusable cloth bags from waste materials to sell in nearby vicinities to earn economic remuneration while practicing sustainable economy practices.",
      },
    ];
  },
};
</script>

<style scoped>
.heading h3 {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2em;
}

.main-body {
  display: flex;
  gap: 2em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#pr {
  font-size: 1.2rem;
  align-items: left;
  font-weight: 600;

  /* margin-left: 4%; */
  position: absolute;
  /* left: 13%; */
}
.pr-para {
  font-weight: 600;
}
ul {
  list-style-type: ">";
}
.illustration {
  width: 110%;
  margin-left: 0px;
  margin-top: 20px;
  /* height: 50vh; */
}
.areas {
  text-align: center;
  margin-top: 6%;
  position: absolute;
  margin-left: 31%;
  color: #696969;
  /* bottom: 20vh; */
  /* margin-bottom: 2px; */
}
.environmental {
  width: 100%;
  /* display: inline;
  margin-left: 1%;
  margin-right: auto; */
  /* margin-top: 6%; */
  /* margin-bottom: 8%; */
  /* position: absolute;
  top: 60px;
  left: 80px; */
}
.social {
  width: 100%;
  /* display: inline;
  margin-left: auto;
  margin-right: auto; */
  margin-left: 2%;
}
.row {
  display: flex;
}
.col {
  flex: 33.33%;
  /* padding: 1px; */
}
.box {
  width: 100%;
  font-size: 20px;
  padding: 1em;
  border-radius: 10px;
  /* background-color: #f6f6f6; */
  margin-top: 2%;
  /* background-color: rgba(113, 113, 113, 0.803); */
  background-color: #c3cbdc;
  background-image: linear-gradient(147deg, #c3cbdc 0%, #edf1f4 74%);

  /* backdrop-filter: blur(5px); */
}
</style>
