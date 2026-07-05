import type { Item } from '../types/item'

export const API_URL = 'http://localhost:3001'

export async function fetchItems(): Promise<Item[]> {
  const res = await fetch(`${API_URL}/items`)
  if (!res.ok) throw new Error('Failed to fetch items')
  return res.json()
}

export async function fetchItem(id: string): Promise<Item | undefined> {
  const res = await fetch(`${API_URL}/items/${id}`)
  if (res.status === 404) return undefined
  if (!res.ok) throw new Error('Failed to fetch item')
  return res.json()
}
