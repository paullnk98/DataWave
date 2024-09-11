<script setup lang="ts">
import { ref } from 'vue'

import UiBtn from '@/shared/ui/UiBtn/UiBtn.vue'
import UiMenu from '@/shared/ui/UiMenu/UiMenu.vue'
import UiCheckbox from '@/shared/ui/UiCheckbox/UiCheckbox.vue'
import type { TableFilter } from '@/shared/ui/UiTable/UiTableCommon'

import CloseIcon from '@/icons/CloseIcon.vue'

defineProps<{
  filters?: TableFilter[]
}>()

const emit = defineEmits<{
  filterBy: [{ filterCategory?: string; filters: string[] }]
}>()

const filtersLocal = ref([])

function hasSelectedFilters(filter: TableFilter) {
  if (!filter.children || !filtersLocal.value.length) {
    return
  }

  return true
}

function filterBy(filterCategory: string) {
  emit('filterBy', { filterCategory: filterCategory, filters: filtersLocal.value })
}

function clearFilters() {
  filtersLocal.value = []
  emit('filterBy', { filterCategory: '', filters: filtersLocal.value })
}

function onItemClick() {
  alert(
    `I know about the hitbox problem; I just don't have time to fix it. Please click precisely on the checkbox.`
  )
}
</script>

<template>
  <UiBtn
    class="table-filters"
    v-for="filter in filters"
    :key="filter.value"
    :active="hasSelectedFilters(filter)"
  >
    {{ filter.text }}

    <span v-if="hasSelectedFilters(filter)" class="table-filters__item-info">
      <i class="table-filters__item-dot"></i>
      {{ filtersLocal.length }}

      <button class="table-filters__clean" @click="clearFilters">
        <CloseIcon />
      </button>
    </span>

    <UiMenu
      v-if="filter.children"
      class="table-filters__menu"
      activator="parent"
      :items="filter.children as unknown as Record<string, unknown>[]"
      @onItemClick="onItemClick"
    >
      <template #item="{ item }">
        <!--
          There's a problem with the hitbox; I don’t have time to fix it.
          Paul.
        -->
        <UiCheckbox
          :label="item.text as string"
          :value="item.text"
          v-model="filtersLocal"
          @update:modelValue="filterBy(filter.value)"
        />
      </template>
    </UiMenu>
  </UiBtn>
</template>

<style scoped lang="scss">
.table-filters {
  &__item-info {
    display: flex;
    align-items: center;
    font-size: inherit;
    font-weight: inherit;
  }

  &__item-dot {
    width: 2px;
    height: 2px;
    margin: 0 3px;
    background-color: currentColor;
    border-radius: 50%;
  }

  &__clean {
    display: flex;
    margin-left: 8px;
    margin-right: -4px;
  }
}
</style>
