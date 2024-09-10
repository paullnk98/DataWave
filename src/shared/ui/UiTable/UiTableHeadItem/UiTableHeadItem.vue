<script setup lang="ts">
import { type TableHeadItem } from '@/shared/ui/UiTable/UiTableCommon'
import UiTypography from '@/shared/ui/UiTypography/UiTypography.vue'

import FilterIcon from '@/icons/FilterIcon.vue'

defineProps<{
  item: TableHeadItem
}>()
</script>

<template>
  <div class="table-head-item">
    <UiTypography type="text15-semibold">{{ item.title }}</UiTypography>

    <FilterIcon v-if="item.sortable" class="table-head-item__sort-icon" />
  </div>
</template>

<style scoped lang="scss">
.table-head-item {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
