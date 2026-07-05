import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchItems } from '../api/items'
import ItemCard from '../components/ItemCard'
import SearchBox from '../components/SearchBox'

function ListByStatus() {
  const { status } = useParams()
  const [searchParams] = useSearchParams()
  const q = searchParams.get('q') ?? ''

  const { data, isLoading, isError } = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Something went wrong loading items.</div>

  const filtered = (data ?? []).filter(
    (item) =>
      item.status === status &&
      item.title.toLowerCase().includes(q.toLowerCase()),
  )

  return (
    <div>
      <SearchBox />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
        {filtered.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="mt-4 text-gray-500">No items found.</p>
      )}
    </div>
  )
}

export default ListByStatus
