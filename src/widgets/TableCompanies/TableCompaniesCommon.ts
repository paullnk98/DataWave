import { type TableHeadItem } from '@/shared/ui/UiTable/UiTableCommon'

export const headerFilters = [
  {
    value: 'firma',
    text: 'Kunde'
  },
  {
    value: 'contactPerson',
    text: 'Ansprechpartner'
  },
  {
    value: 'group',
    text: 'Kundengruppe'
  },
  {
    value: 'status',
    text: 'Status',
    children: [
      {
        value: 'aktiv',
        text: 'Aktiv'
      },
      {
        value: 'inaktiv',
        text: 'Inaktiv'
      },
      {
        value: 'gast',
        text: 'Gast'
      },
      {
        value: 'registriert',
        text: 'Registriert'
      }
    ]
  },
  {
    value: 'weitere',
    text: 'Weitere Filter'
  }
]

export const tableHeaders: TableHeadItem[] = [
  { title: 'Firmenname', key: 'firma', sortable: false },
  { title: 'Ansprechpartner', key: 'contactPerson', sortable: false },
  { title: 'E-Mail Adresse', key: 'email', sortable: true },
  { title: 'Telefon', key: 'phone', sortable: false },
  { title: 'K-Gruppe', key: 'group', sortable: false },
  { title: 'Status', key: 'status', sortable: false },
  { key: 'actions', sortable: false }
]

export const BADGE_VARIANTS = {
  aktiv: 'success',
  inaktiv: 'error',
  gast: 'warning',
  registriert: 'info'
} as const

export type BadgeType = keyof typeof BADGE_VARIANTS
export type BadgeVariantValue = (typeof BADGE_VARIANTS)[BadgeType]
