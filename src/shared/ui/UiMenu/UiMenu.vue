<script setup lang="ts">
import { VMenu, VList, VListItem } from 'vuetify/components'

defineProps<{
  activator: 'parent'
  items: Record<string, unknown>[]
}>()

const emit = defineEmits<{
  (e: 'onItemClick', value: Record<string, unknown>): void
}>()
</script>

<template>
  <VMenu class="menu" :activator="activator" :closeOnContentClick="false">
    <VList>
      <!--
        key="index"
        The key should be unique and needs to be fixed.
        Paul.
      -->
      <VListItem
        v-for="(item, index) in items"
        :key="index"
        :value="index"
        @click="emit('onItemClick', item)"
      >
        <slot name="item" :item="item" />
      </VListItem>
    </VList>
  </VMenu>
</template>

<style scoped lang="scss">
$menuBgClr: #ffffff;
$menuShadowClr: #29292917;

.menu {
  .v-list {
    margin-top: 6px;
    background-color: $menuBgClr;
    padding: 6px;
    border-radius: 16px;
    // I have a problem exporting the box shadow from Figma.
    // Paul
    box-shadow: 7px 20px 21px 10px $menuShadowClr;
    min-width: 211px;
  }

  .v-list-item {
    padding: 8px 12px;
    min-height: 37px;
    border-radius: 6px !important;
    margin-bottom: 2px;
  }
}
</style>
