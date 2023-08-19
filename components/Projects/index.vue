<template>
  <div class="our-work" id="projects">
    <div class="container">
      <div class="heading">
        <h3>OUR PROJECTS</h3>
      </div>
      <p>
        Our foundation offers various programs and activities that foster civic
        engagement, social awareness, leadership skills and personal growth. Our
        focus areas include:
      </p>
      <br />
      <ul>
        <li>Environmental awareness</li>
        <li>Actions against Climate Change</li>
        <li>Food Sustainability</li>
        <li>Green Regeneration</li>
        <li>Civic responsibilities and duties</li>
        <li>Awareness on Gender rights and issues</li>
        <li>Leadership skills development</li>
      </ul>
      <br />
      <p class="main-body" id="pr">
        Some of projects that we have worked on are:
      </p>
      <br />
      <br />

      <!-- <div class="main-body"> -->
      <!-- <div v-for="p in projects" :key=>
            <Project1 :project="p"> -->
      <!-- </div> -->
      <div class="box">
        <ProjectsProject1 />
        <ProjectsProject2 />
      </div>
    </div>
  </div>
</template>

<script></script>

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
  font-size: 1.4rem;
  align-items: left;
  font-weight: 500;
  /* margin-left: 4%; */
  position: absolute;
  left: 13%;
}
ul {
  list-style-type: ">";
}
</style>
