<script setup>
// import TwPosteos from './twPosteos.vue';


</script>

<template>
 <main class="d-flex flex-column align-items-center">
  <div class="d-flex flex-column align-items-center header-main">
    <img src="../assets/logo_completo.png" class="logo" alt="Leelo">
    <p>LeeLo is a counseling service, general information and posts on celiac disease and lifestyle aimed at people who suffer from this disease and want to improve their lifestyle.</p>
   <RouterLink to="/about" class="btn btn-more">Know more about us</RouterLink>
  </div>
  <div class="mt-5 d-flex flex-column align-items-center">
    <h2>What will you find here?</h2>

      <div class="mt-5 d-flex align-items-center justify-content-center flex-wrap moreinfo">
        <article>
        <h5>Updated news on the world of celiac disease.</h5>
        </article>
        <article>
          <h5>Tips and advice from the Leelo team as well as from the rest of the community.</h5>
        </article>
        <article>
          <h5>Promotions and raffles for being part of the community.</h5>
        </article>
        <article>
          <h5>The possibility of coming into contact with thousands of celiacs.</h5>
        </article>
      </div>
  </div>
  <div class="d-flex flex-column align-items-center header-main2">
    <img src="../assets/logo_completo5.png" class="logo" alt="Leelo">
    <p>If you also want to contribute your grain of sand in this world, created exclusively for celiacs, you can do so by joining our work team from the following access or you can directly visit the "work with us" section directly.</p>
   <RouterLink to="/workwithus" class="btn btn-more">Work with us</RouterLink>
  </div>
  <div class="d-flex flex-column align-items-center header-main3">
    <img src="../assets/logo_completo4.png" class="logo" alt="Leelo">
    <p>If you have questions or queries, do not hesitate to contact us below.</p>
   <RouterLink to="/contact" class="btn btn-more">Send us a message</RouterLink>
  </div>
  <div class="d-flex flex-column align-items-center header-main4">
    <img src="../assets/logo_completo3.png" class="logo" alt="Leelo">
    <p>Last but not least, through the "Let's connect" button we encourage customers to take the next step in a friendly and accessible way. So don't hesitate, because LeeLo will open the doors to a new world of health and new experiences, it will accompany you at all times to help you decide on your eating plans and improve your diet, and it will also offer you the latest news from the gluten-free world.</p>
    <p>It is the ideal companion to advise you on this path.</p>
    <p>Don't wait any longer and join the LeeLo world.</p>
   <RouterLink to="/login" class="btn btn-more">Let's connect</RouterLink>
  </div>

  <!-- <TwPosteos /> -->

 </main>
</template>

<style scoped>
  /* .logo{
    width: clamp(280px, 50%, 400px);
  } */

  .logo{
    width: 10rem;
    /* padding-top: 3rem; */
    padding-bottom: 2rem;
  }

  .header-main{
    border-bottom: solid 1px #557571;
    padding-bottom: 3rem;
    width: 90%;
  }
  .header-main2{
    padding-top: 1rem;
    border-bottom: solid 1px #557571;
    padding-bottom: 3rem;
    width: 90%;
  }

  .header-main2 p{
    padding-bottom: 2rem;
    text-align: justify;
  }

  .header-main3{
    padding-top: 1rem;
    border-bottom: solid 1px #557571;
    padding-bottom: 3rem;
    width: 90%;
  }

  .header-main3 p{
    padding-bottom: 2rem;
    text-align: justify;
    width: 90%;
  }

  .header-main4{
    padding-top: 1rem;
    padding-bottom: 3rem;
    width: 90%;
  }

  .header-main4 p{
    padding-bottom: 2rem;
    text-align: justify;
    width: 90%;
  }

  main div .moreinfo p,  main .header-main p{
    margin-top: 2rem;
    padding-bottom: 2rem;
    text-align: justify;
  }
  
  .bulbasaur{
    margin-top: 2rem;
    width: 250px;
  }
  .moreinfo article{
    background-color: var(--color-primary);
    color: var(--color-text-ligth);
    text-align: center;
    width: 80%;
    margin: .5rem;
    height: 6rem;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .moreinfo{
    border-bottom: solid 1px #557571;
    padding-bottom: 3rem;
    width: 90%;
  }
  .recomended{
    width: 90%;
    gap: 2rem;
  }
  .recomended .centro1{
    padding-right: 1.5rem;
    border-right: solid 1px rgba(177, 177, 177, 0.2);
  }
  .recomended article{
    color: var(--color-text-ligth);
    text-align: center;
    width: clamp(290px, 40%, 600px);
    margin: .5rem;
    padding: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .recomended article img{
    width: 90%;
    margin-bottom: 1rem;
  }
 .pokedex{
  width: 280px;
 }
 .pokedex img{
  width: 100% !important;
 }
  @media screen and (max-width: 818px){
    .recomended .centro1{
    padding-bottom: 1.5rem;
    border-bottom: solid 1px #557571;
    border-right: none;
  }
    
  }
</style>