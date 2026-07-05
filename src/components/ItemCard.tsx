import { Link } from 'react-router-dom'
import type { Item } from '../types/item'
import { useUiStore } from '../store/useUiStore'

function ItemCard({ item }: { item: Item }) {
  const density = useUiStore((state) => state.density)

  if (density === 'compact') {
    return (
      <Link
        to={`/items/${item.id}`}
        className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
      >
        <span>{item.title}</span>
        <span className="text-xs uppercase text-gray-500 dark:text-gray-400">
          {item.status}
        </span>
      </Link>
    )
  }

  return (
    <Link
      to={`/items/${item.id}`}
      className="block border rounded-lg p-4 hover:border-gray-400 dark:border-gray-700 dark:hover:border-gray-500"
    >
      <h2 className="font-semibold">{item.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {item.creator}, {item.year}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-500">{item.genre}</p>
      <span className="inline-block mt-2 text-xs uppercase text-gray-500 dark:text-gray-400">
        {item.status}
      </span>
    </Link>
  )
}

export default ItemCard
