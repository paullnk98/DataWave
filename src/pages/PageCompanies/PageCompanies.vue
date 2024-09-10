<script setup lang="ts">
import LayoutDefault from '@/shared/layout/LayoutDefault/LayoutDefault.vue'
import UiCardBase from '@/shared/ui/UiCard/UiCardBase.vue'

import TableCompanies from '@/widgets/TableCompanies/TableCompanies.vue'
</script>

<template>
  <LayoutDefault>
    <UiCardBase>
      <TableCompanies />
    </UiCardBase>
  </LayoutDefault>
</template>
