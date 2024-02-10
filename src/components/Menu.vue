<template>
    <div>
        <button @click="reverseOrder">Cambiar orden</button>
        <MenuItem v-for="(routes, index) in routeViews" :key="index" :name="routes.name" :path="routes.path" />
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import router from '@/router';
import type IMenuItem from '@/Interface/IMenuItem';
import MenuItem from './MenuItem.vue';

const routeViews = ref(
    router.options.routes.filter(route => {
        return { name: route.name, path: route.path };
    }) as IMenuItem[]
);

function reverseOrder() {
    routeViews.value.reverse();
}
</script>