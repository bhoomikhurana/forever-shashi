<template>
  <div>
    <nav>
      <div class="navbar container">
        <div class="logo">
          <img src="~/assets/forever-shashi-logo.png" alt="" />
        </div>
        <div>
          <ul>
            <a href="#hero"><li>Home</li></a>
            <a href="#about"><li>About</li></a>
            <a href="#vision"><li>Vision</li></a>
            <a href="#our-work"><li>Our Work</li></a>
            <a href="#values"><li>Our Values</li></a>
            <a href="#join-us"><li>Join Us</li></a>
            <a href="#contact-us"><li>Contact Us</li></a>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
nav {
  position: fixed;
  background-color: white;
  z-index: 999;
  width: 100%;
}
.navbar {
  padding: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;

  .logo {
    width: 6em;
    height: auto;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;

    a {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9rem;
      text-decoration: none;
      color: #191919;
      font-family: "Montserrat", sans-serif;
    }
  }
}
</style>
