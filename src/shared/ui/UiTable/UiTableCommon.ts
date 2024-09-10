export interface TableHeadItem {
  key: string
  title?: string
  sortable?: boolean
}

export interface TableFilter {
  value: string
  text: string
  children?: TableFilter[]
}
