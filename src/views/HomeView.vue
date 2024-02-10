<template>
  <main>
    <h1>Home</h1>
    <p>Welcome to the home page</p>
    <ConditionalImageVue :showImage="mostrarImagen" />
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ConditionalImageVue from '@/components/ConditionalImage.vue'; 

const mostrarImagen = ref(false);

</script>
