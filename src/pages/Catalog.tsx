import { useQuery } from '@tanstack/react-query'
import { fetchItems } from '../api/items'
import ItemCard from '../components/ItemCard'

function Catalog() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['items'],
    queryFn: fetchItems,
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Something went wrong loading items.</div>

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {data?.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Catalog
