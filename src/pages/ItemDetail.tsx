import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { fetchItem, updateItem } from '../api/items'
import type { Status } from '../types/item'

const statuses: Status[] = ['want', 'active', 'done', 'dropped']

function ItemDetail() {
  const { id } = useParams()
  const queryClient = useQueryClient()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['items', id],
    queryFn: () => fetchItem(id!),
    enabled: !!id,
  })

  const [note, setNote] = useState('')

  useEffect(() => {
    setNote(data?.note ?? '')
  }, [data])

  function onSuccess() {
    queryClient.invalidateQueries({ queryKey: ['items'] })
  }

  const statusMutation = useMutation({
    mutationFn: (status: Status) => updateItem(id!, { status }),
    onSuccess,
  })

  const ratingMutation = useMutation({
    mutationFn: (rating: number | null) => updateItem(id!, { rating }),
    onSuccess,
  })

  const noteMutation = useMutation({
    mutationFn: (note: string) => updateItem(id!, { note: note || null }),
    onSuccess,
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

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={data.status}
          onChange={(e) => statusMutation.mutate(e.target.value as Status)}
          className="border rounded px-2 py-1"
        >
          {statuses.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Rating</label>
        <select
          value={data.rating ?? ''}
          onChange={(e) =>
            ratingMutation.mutate(e.target.value ? Number(e.target.value) : null)
          }
          className="border rounded px-2 py-1"
        >
          <option value="">Not rated</option>
          {[1, 2, 3, 4, 5].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium mb-1">Note</label>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="border rounded w-full p-2"
        />
        <button
          onClick={() => noteMutation.mutate(note)}
          className="mt-2 border rounded px-3 py-1"
        >
          Save note
        </button>
      </div>
    </div>
  )
}

export default ItemDetail
