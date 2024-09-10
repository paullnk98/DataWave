<script setup lang="ts">
import { computed } from 'vue'
import { VCheckbox } from 'vuetify/components'

import UiTypography from '@/shared/ui/UiTypography/UiTypography.vue'

const props = defineProps<{
  label?: string
  value?: unknown
}>()

const model = defineModel({ required: true })

const isChecked = computed(() => {
  if (Array.isArray(model.value)) {
    return model.value.includes(props.value)
  }

  return !!model.value
})
</script>

<template>
  <VCheckbox
    class="checkbox"
    :class="{ checkbox_checked: isChecked }"
    :value="value"
    hideDetails
    v-model="model"
  >
    <template #label>
      <UiTypography class="checkbox__label" type="text14-semibold">
        {{ label }}
      </UiTypography>
    </template>
  </VCheckbox>
</template>

<style scoped lang="scss">
$checkboxLabelClr: #000000;
$checkboxInactiveBdClr: #c0c0c0;
$checkboxActiveBdClr: #000000;
$checkboxActiveBgClr: #000000;

.checkbox {
  &:deep(.v-selection-control) {
    --v-selection-control-size: auto;
  }

  &:deep(.v-input__control) {
    --v-input-control-height: auto;
  }

  &:deep(.v-label) {
    opacity: 1;
  }

  &:deep(.v-selection-control__input) {
    margin-right: 12px;

    i {
      font-size: initial;
      border-radius: 4px;
      border: 2px solid $checkboxInactiveBdClr;
      width: 16px;
      height: 16px;
      background-position: center;
    }
  }

  &_checked {
    &:deep(.v-selection-control__input) {
      i {
        border-color: $checkboxActiveBdClr;
        background-color: $checkboxActiveBgClr;
        // icon should be place differently
        // Paul.
        background-image: url('@/assets/checked-icon.svg');
      }
    }
  }

  &__label {
    color: $checkboxLabelClr;
  }
}
</style>
