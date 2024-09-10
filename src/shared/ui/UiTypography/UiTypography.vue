<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: 'text15-semibold' | 'text15-regular' | 'text14-semibold'
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
  }>(),
  {
    tag: 'p',
    type: 'text15-regular'
  }
)
</script>

<template>
  <component :is="tag" class="typography" :class="`typography_${type}`">
    <slot />
  </component>
</template>

<style scoped lang="scss">
.typography_text15-regular {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.5;
}

.typography_text15-semibold {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
}

.typography_text14-semibold {
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
}
</style>
