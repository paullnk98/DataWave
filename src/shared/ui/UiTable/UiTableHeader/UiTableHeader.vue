<script setup lang="ts">
import { ref } from 'vue'

import UiBtn from '@/shared/ui/UiBtn/UiBtn.vue'
import UiMenu from '@/shared/ui/UiMenu/UiMenu.vue'
import UiCheckbox from '@/shared/ui/UiCheckbox/UiCheckbox.vue'
import UiInputField from '@/shared/ui/UiInputField/UiInputField.vue'
import type { TableFilter } from '@/shared/ui/UiTable/UiTableCommon'

import SearchIcon from '@/icons/SearchIcon.vue'
import CloseIcon from '@/icons/CloseIcon.vue'

defineProps<{
  hasSearch?: boolean
  filters?: TableFilter[]
}>()

const emit = defineEmits<{
  filterBy: [{ filterCategory?: string; filters: string[] }]
}>()

const searchModel = defineModel('search')
const filtersLocal = ref([])

function filterBy(filterCategory: string) {
  emit('filterBy', { filterCategory: filterCategory, filters: filtersLocal.value })
}

function hasSelectedFilters(filter: TableFilter) {
  if (!filter.children || !filtersLocal.value.length) {
    return
  }

  return true
}

function clearFilters() {
  filtersLocal.value = []
  emit('filterBy', { filterCategory: '', filters: filtersLocal.value })
}
</script>
<!--
  This component should actually be split.
  Paul.
-->
<template>
  <header class="table-header">
    <UiInputField
      v-if="hasSearch"
      class="table-header__search"
      placeholder="Suche"
      v-model="searchModel"
    >
      <template #prependInner>
        <SearchIcon />
      </template>
    </UiInputField>

    <UiBtn v-for="filter in filters" :key="filter.value" :active="hasSelectedFilters(filter)">
      {{ filter.text }}

      <span v-if="hasSelectedFilters(filter)" class="table-header__menu-counter">
        <i class="table-header__menu-dot"></i>
        {{ filtersLocal.length }}

        <button class="table-header__menu-close" @click="clearFilters">
          <CloseIcon />
        </button>
      </span>

      <UiMenu
        v-if="filter.children"
        class="table-header__menu"
        activator="parent"
        :items="filter.children as unknown as Record<string, unknown>[]"
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
  </header>
</template>

<style scoped lang="scss">
.table-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;

  &__search {
    max-width: 237px;
  }

  &__menu-counter {
    display: flex;
    align-items: center;
    font-size: inherit;
    font-weight: inherit;
  }

  &__menu-dot {
    width: 2px;
    height: 2px;
    margin: 0 3px;
    background-color: currentColor;
    border-radius: 50%;
  }

  &__menu-close {
    display: flex;
    margin-left: 8px;
    margin-right: -4px;
  }
}
</style>
