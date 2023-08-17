<template>
<!-- <div class="hero" id="home">
    <div class="heroimage">
       <img class="hero" src="../assets/background.jpeg"/>
    </div>
  </div> -->
    
<div>
    <div class="heroimage" id="home">
    
 <figure class="hero">
    <img class="heroimage" src="../assets/background.jpeg"/>
 </figure>
 
 </div>
 
    </div>
</template>

<script >


</script>

<style scoped>
body{
    margin:0;
    padding:0;
}
.hero {
  margin: 100px 0 50px 0;
  width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

.heroimage {
  width: 100%;
  height: auto;
}

.heroimage img {
  object-fit: contain;
  width: 100%;
  height: auto;
}


@media (max-width: 35em) {
  .hero {
    margin: 0;
  }
}
</style>