<script setup lang="ts">
import { VPagination } from 'vuetify/components'

import UiBtn from '@/shared/ui/UiBtn/UiBtn.vue'

import PrevIcon from '@/icons/PrevIcon.vue'
import NextIcon from '@/icons/NextIcon.vue'

defineProps<{
  length: number
}>()

const page = defineModel<number>('page', { required: true })
</script>

<template>
  <VPagination
    class="pagination"
    rounded="circle"
    :length="length"
    :totalVisible="10"
    v-model="page"
  >
    <template v-slot:prev="props">
      <UiBtn v-bind="props" size="sm" variant="tertiary" iconOnly circle>
        <PrevIcon />
      </UiBtn>
    </template>

    <template v-slot:item="{ page, props, isActive }">
      <UiBtn v-bind="props" :active="isActive" size="sm" variant="tertiary" iconOnly circle>
        {{ page }}
      </UiBtn>
    </template>

    <template v-slot:next="props">
      <UiBtn v-bind="props" size="sm" variant="tertiary" iconOnly circle>
        <NextIcon />
      </UiBtn>
    </template>
  </VPagination>
</template>

<style scoped lang="scss">
.pagination {
  &:deep(.v-pagination__list) {
    gap: 7px;
  }

  &:deep(.v-pagination__next),
  &:deep(.v-pagination__prev),
  &:deep(.v-pagination__item) {
    margin: 0;
  }
}
</style>
