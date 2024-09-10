<script setup lang="ts">
import UiPagination from '@/shared/ui/UiPagination/UiPagination.vue'
import UiBtn from '@/shared/ui/UiBtn/UiBtn.vue'

defineProps<{
  pageCount: number
  itemsPerPage: number
}>()

const page = defineModel<number>('page', { required: true })
</script>

<template>
  <div class="table-footer">
    <UiPagination class="table-footer__pagination" :length="pageCount" v-model:page="page" />

    <UiBtn class="table-footer__btn" size="sm" variant="secondary">
      {{ itemsPerPage }} pro Seite
    </UiBtn>
  </div>
</template>

<style scoped lang="scss">
.table-footer {
  position: relative;
  display: flex;
  justify-content: center;

  &__pagination {
    margin: 0 auto;
  }

  &__btn {
    position: absolute;
    right: 0;
  }
}
</style>
