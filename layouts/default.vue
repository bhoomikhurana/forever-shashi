<template>
  <div>
    <header>
      <NavbarComp />
    </header>
    <slot />
    <footer>
      <FooterComp />
    </footer>
  </div>
</template>

<script setup lang="ts">
const scrollTop = () => {
  return new Promise((resolve) => {
    resolve({ left: 0, top: 0 });
  });
};
</script>

<style scoped>
.logo {
  width: 100px;
  height: auto;
}

.logo img {
  width: 100px;
  height: auto;
}
header {
  padding: 0.7rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  font-weight: 900;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  z-index: 9999;
  transition: left 0.3s ease-out;
}
nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2em;
  list-style: none;
}
nav ul a {
  text-decoration: none;
  color: #191919;
  text-transform: uppercase;
  font-weight: 700;
}
.mobile-menu {
  display: none;
}

.showMenu {
  left: 0%;
}

.hideMenu {
  left: 0%;
}

.ghost-button {
  border: 2px solid #8b231d;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
}
.ghost-button a {
  color: #8b231d;
}

.contact-us {
  background-color: #191919;
}
.heading h3 {
  font-size: 1.2rem;
  margin-bottom: 2em;
  color: white;
}

.main-body p,
a {
  color: white;
}
@media (max-width: 35em) {
  header {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    left: -50%;
    top: 0;
  }

  nav ul {
    margin-top: 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    font-size: 1.3rem;
    font-weight: 600;
    font-family: "Poppins";
  }
  nav ul a {
    text-transform: lowercase;
    font-weight: 600;
  }
  .mobile-menu {
    display: block;
    position: fixed;
    top: 2em;
    right: 3em;
    width: 50px;
    height: 50px;
    padding: 10px;
    border-radius: 50%;
    border: 3px solid #191919;
    background-color: white;
  }

  .mobile-menu img {
    width: 100%;
    height: auto;
  }

  .showMenu {
    left: 0%;
  }

  .hideMenu {
    left: -100%;
  }
}
</style>
