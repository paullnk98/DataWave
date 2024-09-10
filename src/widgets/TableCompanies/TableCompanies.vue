<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type CompanyListItemModel } from '@/models/Company/CompanyListModel'

import { UiTableBase } from '@/shared/ui/UiTable'
import UiBtn from '@/shared/ui/UiBtn/UiBtn.vue'
import UiAvatarGroup from '@/shared/ui/UiAvatarGroup/UiAvatarGroup.vue'
import UiBadge from '@/shared/ui/UiBadge/UiBadge.vue'
import UiTypography from '@/shared/ui/UiTypography/UiTypography.vue'
import {
  headerFilters,
  tableHeaders,
  BADGE_VARIANTS,
  type BadgeType,
  type BadgeVariantValue
} from '@/widgets/TableCompanies/TableCompaniesCommon'
import DotsIcon from '@/icons/DotsIcon.vue'

const companies = ref<CompanyListItemModel[]>([])
const isLoading = ref(true)
const localComapnies = ref<CompanyListItemModel[]>([])

function badgeVariant(badge: BadgeType): BadgeVariantValue {
  const lowercaseBadge = badge.toLowerCase() as BadgeType

  return BADGE_VARIANTS[lowercaseBadge] || 'error'
}

function filterCompanies(filterCompanies: { filterCategory?: string; filters: string[] }) {
  const { filterCategory, filters } = filterCompanies
  const category = filterCategory as keyof CompanyListItemModel

  if (!filters.length) {
    localComapnies.value = companies.value

    return
  }

  localComapnies.value = companies.value.filter((company) => {
    return filters.some((filter) => {
      if (company[category] === filter) {
        return true
      }
    })
  })
}

onMounted(async () => {
  isLoading.value = true

  try {
    const res = await import('@/data/fakeData.json')

    companies.value = res.default
    localComapnies.value = companies.value
    isLoading.value = false
  } catch {
    isLoading.value = false
    console.error('Failed to load data')
  }
})
</script>

<template>
  <UiTableBase
    class="table-comapnies"
    hasSearch
    hasPagination
    :isLoading="isLoading"
    :headerFilters="headerFilters"
    :headers="tableHeaders"
    :items="localComapnies"
    @filterBy="filterCompanies"
  >
    <template v-slot:[`header.actions`]>
      <div class="text-end">
        <UiBtn variant="tertiary" iconOnly>
          <DotsIcon />
        </UiBtn>
      </div>
    </template>

    <template v-slot:[`item.firma`]="{ item }">
      <UiAvatarGroup :src="item.firmaImg" :title="item.firmaName" />
    </template>

    <template v-slot:[`item.contactPerson`]="{ item }">
      <UiTypography type="text15-regular" class="table-comapnies__text">
        {{ item.contactPerson }}
      </UiTypography>
    </template>

    <template v-slot:[`item.email`]="{ item }">
      <UiTypography type="text15-regular" class="table-comapnies__text">
        {{ item.email }}
      </UiTypography>
    </template>

    <template v-slot:[`item.phone`]="{ item }">
      <UiTypography type="text15-regular" class="table-comapnies__text">
        {{ item.phone }}
      </UiTypography>
    </template>

    <template v-slot:[`item.group`]="{ item }">
      <UiBadge variant="purple" size="md">{{ item.group }}</UiBadge>
    </template>

    <template v-slot:[`item.status`]="{ item }">
      <UiBadge :variant="badgeVariant(item.status)" size="md" hasDot>
        {{ item.status }}
      </UiBadge>
    </template>

    <template v-slot:[`item.actions`]>
      <div class="text-end">
        <UiBtn variant="tertiary" iconOnly>
          <DotsIcon />
        </UiBtn>
      </div>
    </template>
  </UiTableBase>
</template>

<style scoped lang="scss">
$defTextClr: #667085;

.table-comapnies {
  &__text {
    color: $defTextClr;
  }
}
</style>
