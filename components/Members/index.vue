<template>
  <div class="bg" id="members">
    <div class="container">
      <div class="heading">
        <h3>FSF MEMBERS</h3>
      </div>
      <div class="card-container">
        <MembersTeamMember
          v-for="member in members"
          class="member"
          :key="member"
          :member="member"
          :imageURL="require(`~/assets/team/${member.imgURL}`)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.members = [
      {
        imgURL: "poornima.jpeg",
        name: "a",
        designation: "FOUNDER",
      },
      {
        imgURL: "poornima.jpeg",
        name: "b",
        designation: "FOUNDER",
      },
      {
        imgURL: "poornima.jpeg",
        name: "c",
        designation: "TEAM LEAD",
      },
      {
        imgURL: "poornima.jpeg",
        name: "d",
        designation: "ASSOCIATE",
      },
      {
        imgURL: "poornima.jpeg",
        name: "e",
        designation: "ALLIES",
      },
      {
        imgURL: "poornima.jpeg",
        name: "f",
        designation: "ALLIES",
      },
    ];
  },
};
</script>

<style>
.heading h3 {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2em;
  padding-top: 2em;
  font-weight: 800;
  font-family: "Montserrat";
  letter-spacing: 1px;
}
.bg {
  background-color: #f3f3f3;
}
.fsf {
}
.card-container {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(3, 5fr);
  justify-content: center;
  margin-left: 4%;
}
.member {
  width: 20%;
  margin: 10%;
  min-height: 40%;
  font-size: 20px;
  padding: 2em;
  border-radius: 10px;
  margin-top: 2%;
  display: flex;
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
  );
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 22vw;
}
</style>
