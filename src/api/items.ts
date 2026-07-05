import type { Item } from '../types/item'

export const API_URL = 'http://localhost:3001'

export async function fetchItems(): Promise<Item[]> {
  const res = await fetch(`${API_URL}/items`)
  if (!res.ok) throw new Error('Failed to fetch items')
  return res.json()
}
