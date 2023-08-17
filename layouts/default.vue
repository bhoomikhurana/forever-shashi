<template>
    <div>
    <header>
        <div class="logo">
        <figure>
          <NuxtLink to='/'>
    <img src="../assets/forever_shashi_logo.png"/>
    </NuxtLink>
 </figure>
        </div>
        <nav>
            <ul>
                <NuxtLink to='/'><li>HOME</li></NuxtLink>
                <NuxtLink to='/about'><li>ABOUT</li></NuxtLink>
                <li>VISION</li>
                <li>PROJECTS</li>
                <li>VALUES</li>
                <li>TEAM</li>
                <li>JOIN US</li>
                <li>CONTACT US</li>
                    
                
            </ul>
        </nav>
    </header>
    <div>
        <slot />
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.logo {
  width: 100px;
  height: auto;
  
}

.logo img {
  width: 100%;
  height: auto;
}
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  font-weight: 900;
  position: fixed;
  top: 0;
  left:0;
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
}
</style>