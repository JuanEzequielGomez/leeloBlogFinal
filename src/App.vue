<script setup>

import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import FooterApp from './components/FooterApp.vue';
import Header from './components/Header.vue'
import user from './store/User.js';

onMounted(()=>{
  let localUser = JSON.parse(localStorage.getItem('user'))
  if(localUser){
    user.value = {
      ...localUser
    }
  }
})

</script>

<!-- <template>
  <Header />

  <RouterView />

  <FooterApp />
</template>

<style scoped>
</style> -->


<template>
  <div class="body">
    <Header />
    <RouterView />
    <FooterApp />
  </div>
</template>

<style scoped>
/* .body {
  min-height: 100vh;
} */
</style>
