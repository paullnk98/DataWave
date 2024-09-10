<template>
  <div class="layout-default">
    <div class="layout-default__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-default {
  padding: 32px 0;

  &__container {
    max-width: 1260px;
    margin: 0 auto;
    padding: 0 20px;
  }
}
</style>
