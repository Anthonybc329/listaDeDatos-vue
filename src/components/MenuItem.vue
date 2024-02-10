<template>
    <div>
        <nav :style="{ backgroundColor: colorNav }">
            <RouterLink :to=data.path :style="{ backgroundColor: colorFondo }">{{ data.name }}</RouterLink>
        </nav>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import type IMenuItem from '@/Interface/IMenuItem'
import { RouterLink } from 'vue-router';

const data = defineProps<IMenuItem>();

const colorFondo = 'red';
const colorNav = 'blue';

</script>
