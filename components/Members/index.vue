<template>
  <div class="bg">
    <h1 class="fsf">FSF MEMBERS</h1>
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
</template>

<script>
export default {
  //   computed: {
  //     imageSource() {
  //       return require(`~/assets/background.jpeg`);
  //     },
  //   },
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
.bg {
  background-color: #f3f3f3;
}
.fsf {
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 2em;
  padding-top: 2em;
  font-weight: 800;
  font-family: "Montserrat";
  letter-spacing: 1px;
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
  /* background-color: #868686; */
  margin-top: 2%;
  display: flex;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  /* background: rgb(0,212,255); */
  /* background-color: #000000; */
  background: radial-gradient(
    circle at 24.1% 68.8%,
    rgb(50, 50, 50) 0%,
    rgb(0, 0, 0) 99.4%
  );
  /* photo background */
  /* background-image: url(https://images.unsplash.com/photo-1619204715997-1367fe5812f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1889&q=80); */
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 22vw;
}
</style>
