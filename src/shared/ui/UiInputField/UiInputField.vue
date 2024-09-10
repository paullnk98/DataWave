<script setup lang="ts">
import { VTextField } from 'vuetify/components'

withDefaults(
  defineProps<{
    placeholder: string
    type?: 'email' | 'password' | 'text' | 'number' | 'tel'
  }>(),
  {
    type: 'text'
  }
)
</script>

<template>
  <VTextField
    class="input-field"
    variant="solo"
    :placeholder="placeholder"
    :type="type"
    hideDetails
  >
    <template v-if="$slots.prependInner" #prepend-inner>
      <slot name="prependInner"></slot>
    </template>
  </VTextField>
</template>

<style scoped lang="scss">
$inputFieldBg: #f7f7f8;
$inputFieldPlaceholderClr: #838784;
$inputFieldBdRadius: 12px;

.input-field:deep(.v-field) {
  --v-input-control-height: 37px;

  background-color: $inputFieldBg;
  border-radius: $inputFieldBdRadius;
  padding: 8px 16px;
  box-shadow: none;
}

.input-field:deep(.v-field__input) {
  min-height: auto;
  line-height: 21px;
  padding: 0;
}

.input-field:deep(.v-field__input::placeholder) {
  color: $inputFieldPlaceholderClr;
  opacity: 1;
}

.input-field:deep(.v-field__prepend-inner) {
  margin-right: 11px;
}
</style>
