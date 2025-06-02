import { Item } from '__generated__/types'

export type PackingItem = Pick<Item, 'id' | 'name' | 'packed' | 'recommended'>
