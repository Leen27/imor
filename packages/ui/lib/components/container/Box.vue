<template>
    <slot />
</template>
<script setup lang="ts">
import { Box } from '@cvrts/core'

const props = defineProps<{
    name: string
}>()
const box = new Box()
</script>