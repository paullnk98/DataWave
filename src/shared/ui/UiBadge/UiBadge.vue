<script lang="ts" setup>
import { VChip } from 'vuetify/components'

defineProps<{
  size: 'md'
  variant: 'purple' | 'success' | 'warning' | 'info' | 'error'
  hasDot?: boolean
}>()
</script>

<template>
  <VChip :class="['badge', { [`badge_${variant}`]: variant, [`badge_${size}`]: size }]">
    <span v-if="hasDot" class="badge__dot"></span>

    <slot />
  </VChip>
</template>

<style scoped lang="scss">
$badgePurpleBg: #f9f5ff;
$badgePurpleClr: #6941c6;

$badgeSuccessBg: #ecfdf3;
$badgeSuccessClr: #027a48;
$badgeSuccessDotClr: #12b76a;

$badgeWarningBg: #fff3e0;
$badgeWarningClr: #e65100;

$badgeErrorBg: #ffebee;
$badgeErrorClr: #d32f2f;

$badgeInfoBg: #e3f2fd;
$badgeInfoClr: #1976d2;

.badge {
  :deep(.v-chip__content) {
    font-weight: inherit;
  }

  &_md {
    --v-chip-height: 28px;

    font-size: 13px;
    font-weight: 600;
    // Mismatched spacing in Figma; need to check with the designer.
    padding: 4px 12px;
  }

  &_purple {
    background-color: $badgePurpleBg;
    color: $badgePurpleClr;
  }

  &_success {
    background-color: $badgeSuccessBg;
    color: $badgeSuccessClr;

    .badge__dot {
      background-color: $badgeSuccessDotClr;
    }
  }

  &_warning {
    background-color: $badgeWarningBg;
    color: $badgeWarningClr;
  }

  &_error {
    background-color: $badgeErrorBg;
    color: $badgeErrorClr;
  }

  &_info {
    background-color: $badgeInfoBg;
    color: $badgeInfoClr;
  }

  &__dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: currentColor;
    margin-right: 5px;
  }
}
</style>
