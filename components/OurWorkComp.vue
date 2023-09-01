<template>
  <div id="our-work" class="container">
    <div class="heading">
      <h2>our work</h2>
    </div>
    <p>
      Our mission is to promote environmental conservation, sustainable living,
      and compassion for all living beings. We organize various initiatives,
      workshops, and events that focus on raising awareness about environmental
      issues, organizing tree-planting drives, and working towards the welfare
      of society.
    </p>
    <br />
    <div>
      <h3>Areas of Action</h3>
      <br />
      <div class="areas-of-work">
        <div class="environmental">
          <img src="~/assets/ourwork-environmental.png" alt="" />
        </div>

        <div class="social">
          <img src="~/assets/ourwork-social.png" alt="" />
        </div>
      </div>
    </div>

    <p>
      Our foundation offers various programs and activities that foster civic
      engagement, social awareness, leadership skills and personal growth. Some
      of our activities are:
    </p>
    <ul>
      <li>Environmental Education trainings at schools and communities</li>
      <li>Food Sustainability awareness and drives</li>
      <li>Green Regeneration activities</li>
      <li>
        Civic responsibilities and duties awareness through trainings and
        workshops
      </li>
      <li>Awareness and trainings on Gender rights and issues</li>
      <li>Leadership skills development programs for youth</li>
    </ul>

    <br />
    <div class="subheading">
      <h3>Past Projects</h3>
    </div>
    <p>
      We have organized several activities and events since our inception to
      mobilise the community and raise awareness on our areas of actions. Some
      of the activities we have organised are:
    </p>
    <ul>
      <li>
        We have organised several events to raise awareness around festival
        season (such as Diwali) to advocate and raise awareness for more
        eco-friendly and sustainable gifting items among our relatives, our
        society and schools. Gifts like indoor plants planted in green shells of
        coconut were promoted.
      </li>
      <li>
        In several events at schools we held workshops to teach children to
        conduct a plastic and paper audit to analyze first-hand the quantity of
        plastic and paper being used and thrown by them on a daily to weekly
        basis. This was done to help the children realise the amount of waste
        generated and a dialogue was held with the children, families and
        teachers to discuss the need for sustainability and reducing waste.
        Further, alternative options and solutions were discussed to reduce
        unnecessary plastic and paper usage in their daily lives.
      </li>
      <li>
        We have even provided training to the domestic workers in our society on
        understanding the basics of waste segregation, reducing wastefulness and
        water conservation during household cleaning activities.
      </li>
      <li>
        Training was also provided to women in nearby financially impoverished
        communities to make reusable cloth bags from waste materials to sell in
        nearby vicinities to earn economic remuneration while practicing
        sustainable economy practices.
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#our-work {
  padding-top: 3em;

  .areas-of-work {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;

    * {
      flex: 0 0 50%;
      width: 100%;

      img {
        width: 100%;
        object-fit: contain;
      }
    }
  }

  h3 {
    text-align: center;
    text-decoration: underline;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }
}

@media (max-width: 35em) {
  #our-work {
    padding-top: 0;
  }

  .areas-of-work {
    justify-content: space-around;
  }
}
</style>
