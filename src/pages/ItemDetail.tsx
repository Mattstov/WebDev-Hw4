import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { fetchItem } from '../api/items'

function ItemDetail() {
  const { id } = useParams()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['items', id],
    queryFn: () => fetchItem(id!),
    enabled: !!id,
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Something went wrong loading this item.</div>
  if (!data) return <div>Not found.</div>

  return (
    <div>
      <h1 className="text-2xl font-semibold">{data.title}</h1>
      <p className="text-gray-600">
        {data.creator}, {data.year}
      </p>
      <p className="text-gray-500">{data.genre}</p>
      <p className="mt-2 uppercase text-sm text-gray-500">{data.status}</p>
      {data.rating && <p className="mt-2">Rating: {data.rating}/5</p>}
      {data.note && <p className="mt-2 italic">{data.note}</p>}
    </div>
  )
}

export default ItemDetail
