<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: 'sm' | 'md' | 'lg'
    variant?: 'primary' | 'secondary'
  }>(),
  {
    size: 'md',
    variant: 'primary'
  }
)
</script>

<template>
  <div
    class="card"
    :class="{
      [`card_${size}`]: size,
      [`card_${variant}`]: variant
    }"
  >
    <slot />
  </div>
</template>

<style scoped lang="scss">
$cardBgcolorPrimary: #ffffff;
$cardPaddingMd: 20px;
$cardBdRs: 20px;

.card {
  border-radius: $cardBdRs;

  &_md {
    padding: $cardPaddingMd;
  }

  &_primary {
    background-color: $cardBgcolorPrimary;
  }
}
</style>
