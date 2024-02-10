<template>
    <div>
        <img v-if="showImage" src="/public/antonioborges.jpg" alt="Imagen">
        <button @click="toggleImage">Ver imagen</button>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const showImage = ref(false);

function toggleImage() {
    showImage.value = !showImage.value;
}

</script>
<style scoped></style>