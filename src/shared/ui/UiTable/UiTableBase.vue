<script setup lang="ts">
import { computed, ref } from 'vue'
import { VDataTable } from 'vuetify/components'

import UiTableTop from '@/shared/ui/UiTable/UiTableTop/UiTableTop.vue'
import UiTableSearch from '@/shared/ui/UiTable/UiTableSearch/UiTableSearch.vue'
import UiTableFilters from '@/shared/ui/UiTable/UiTableFilters/UiTableFilters.vue'
import UiTableHeadItem from '@/shared/ui/UiTable/UiTableHeadItem/UiTableHeadItem.vue'
import UiTableFooter from '@/shared/ui/UiTable/UiTableFooter/UiTableFooter.vue'
import type { TableHeadItem, TableFilter } from '@/shared/ui/UiTable/UiTableCommon'

const props = defineProps<{
  isLoading?: boolean
  hasPagination?: boolean
  hasSearch?: boolean
  headers: TableHeadItem[]
  headerFilters?: TableFilter[]
  items: unknown[]
}>()

const emit = defineEmits<{
  filterBy: [{ filterCategory?: string; filters: string[] }]
}>()

const itemsPerPage = ref(10)
const currentPage = ref(1)
const searchValue = ref('')

const pageCount = computed(() => Math.ceil(props.items.length / itemsPerPage.value))
</script>

<template>
  <div class="table">
    <UiTableTop>
      <UiTableSearch v-if="hasSearch" v-model:search="searchValue" />
      <UiTableFilters :filters="headerFilters" @filterBy="emit('filterBy', $event)" />
    </UiTableTop>

    <VDataTable
      class="table__inner"
      :headers="headers"
      :items="items"
      :itemsPerPage="itemsPerPage"
      :loading="isLoading"
      :search="searchValue"
      v-model:page="currentPage"
    >
      <template v-for="th in headers" :key="th.key" v-slot:[`header.${th.key}`]="">
        <UiTableHeadItem :item="th" />
      </template>

      <!--
        Pass parent slots to VDataTable
        Paul.
      -->
      <template v-for="(_, name) in $slots" v-slot:[name]="payload">
        <slot :name="name" v-bind="payload" />
      </template>

      <template v-if="hasPagination" v-slot:bottom>
        <UiTableFooter
          class="table__footer"
          :pageCount="pageCount"
          :itemsPerPage="itemsPerPage"
          v-model:page="currentPage"
        />
      </template>
    </VDataTable>
  </div>
</template>

<style scoped lang="scss">
.table {
  &__inner {
    --v-table-header-height: 62px;
    // Design height=64 + 3px padding bottom
    // Paul
    --v-table-row-height: 67px;
    --v-border-color: transparent;

    &:deep(.v-data-table__td) {
      padding: 0 24px;
      padding-bottom: 3px;
    }

    &:deep(thead .v-data-table__td) {
      padding-bottom: 2px;
    }
  }

  &__footer {
    margin-top: 24px;
  }
}
</style>
