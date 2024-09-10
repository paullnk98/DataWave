<script setup lang="ts">
import { VBtn } from 'vuetify/components'

withDefaults(
  defineProps<{
    size?: 'sm' | 'md'
    variant?: 'primary' | 'secondary' | 'tertiary'
    tag?: 'button' | 'a' | 'router-link'
    iconOnly?: boolean
    circle?: boolean
    active?: boolean
  }>(),
  {
    size: 'md',
    tag: 'button',
    variant: 'primary'
  }
)
</script>

<template>
  <VBtn
    class="btn"
    :tag="tag"
    :class="{
      [`btn_${size}`]: size,
      [`btn_${variant}`]: variant,
      [`btn_active`]: active,
      'btn_icon-only': iconOnly,
      btn_circle: circle
    }"
    variant="outlined"
  >
    <slot />
  </VBtn>
</template>

<style scoped lang="scss">
// focus, hover, disabled
// Since there are no states in the design, I kept the default Vuetify styles.
// Paul.
$btnPrimaryClr: #2c2c2c;
$btnPrimaryBdRs: 99px;
$btnPrimaryBdClr: #eeeeee;
$btnPrimaryExpandedBdClr: #0e0e0e;
$btnPrimaryActiveClr: #ffffff;
$btnPrimaryActiveBgClr: #0e0e0e;
$btnPrimaryActiveBdClr: #0e0e0e;
$btnSecondaryBgClr: #f7f7f8;
$btnSecondaryBgClrActive: #000000;
$btnSecondaryClrActive: #ffffff;
$btnSecondaryBdRs: 70.16px;

.btn:deep(.v-btn__content) {
  font-weight: inherit;
}

.btn {
  text-transform: initial;

  &_primary {
    color: $btnPrimaryClr;
    border-radius: $btnPrimaryBdRs;
    border: 1px solid $btnPrimaryBdClr;
  }

  &_secondary {
    --v-btn-height: 32px;
    background-color: $btnSecondaryBgClr;
    border: none;
    border-radius: $btnSecondaryBdRs;
  }

  &_tertiary {
    border: 1px solid transparent;

    &.btn_active {
      background-color: $btnSecondaryBgClrActive;
      color: $btnSecondaryClrActive;
    }
  }

  &_active {
    &.btn_primary {
      color: $btnPrimaryActiveClr;
      background-color: $btnPrimaryActiveBgClr;
      border-color: $btnPrimaryActiveBdClr;
    }
  }

  &_md {
    padding: 7px 14px 9px;
    font-size: 15px;
    letter-spacing: normal;
    font-weight: 600;
  }

  &_sm {
    padding: 9px 12px 7px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: normal;
    font-weight: 400;
  }

  &_icon-only {
    padding: 0;
  }

  &_sm.btn_icon-only {
    --v-btn-height: 26px;

    min-width: var(--v-btn-height);
    width: var(--v-btn-height);
    height: var(--v-btn-height);
  }

  &_md.btn_icon-only {
    min-width: 36px;
  }

  &_circle {
    border-radius: 50%;
  }

  &[aria-expanded='true'] {
    border-color: $btnPrimaryExpandedBdClr;

    &:deep(.v-btn__overlay) {
      background-color: transparent;
    }
  }
}
</style>
