import { Link } from 'react-router-dom'
import type { Item } from '../types/item'

function ItemCard({ item }: { item: Item }) {
  return (
    <Link
      to={`/items/${item.id}`}
      className="block border rounded-lg p-4 hover:border-gray-400"
    >
      <h2 className="font-semibold">{item.title}</h2>
      <p className="text-sm text-gray-600">
        {item.creator}, {item.year}
      </p>
      <p className="text-sm text-gray-500">{item.genre}</p>
      <span className="inline-block mt-2 text-xs uppercase text-gray-500">
        {item.status}
      </span>
    </Link>
  )
}

export default ItemCard
