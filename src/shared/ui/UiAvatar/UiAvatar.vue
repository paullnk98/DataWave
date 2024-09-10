<script setup lang="ts">
import { VAvatar, VImg } from 'vuetify/components'

defineProps<{
  src: string
  alt?: string
}>()
</script>

<template>
  <VAvatar :size="40">
    <VImg :alt="alt" :src="src" />
  </VAvatar>
</template>
