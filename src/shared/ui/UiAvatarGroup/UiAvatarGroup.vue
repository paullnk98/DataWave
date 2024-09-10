<script setup lang="ts">
import UiAvatar from '@/shared/ui/UiAvatar/UiAvatar.vue'
import UiTypography from '@/shared/ui/UiTypography/UiTypography.vue'

defineProps<{
  src: string
  title: string
}>()
</script>

<template>
  <div class="avatar-group">
    <UiAvatar :src="src" />

    <div class="avatar-group__content">
      <UiTypography type="text15-semibold"> {{ title }} </UiTypography>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar-group {
  display: flex;
  align-items: center;
  gap: 12px;

  &__content {
    margin-top: 4px;
  }
}
</style>
