<script setup lang="ts">
import UiInputField from '@/shared/ui/UiInputField/UiInputField.vue'
import SearchIcon from '@/icons/SearchIcon.vue'

const searchModel = defineModel('search')
</script>

<template>
  <UiInputField class="table-header-search" placeholder="Suche" v-model="searchModel">
    <template #prependInner>
      <SearchIcon />
    </template>
  </UiInputField>
</template>

<style scoped lang="scss">
.table-header-search {
  max-width: 237px;
}
</style>
