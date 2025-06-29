<template>
  
  <div>
    <Navbar />
    <router-view />
    <FooterVue/>
   
  </div>
  
 
</template>

<script setup>
import FooterVue from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>
 
