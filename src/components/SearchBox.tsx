import { useSearchParams } from 'react-router-dom'

function SearchBox() {
  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('q') ?? ''

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev)
      if (value) next.set('q', value)
      else next.delete('q')
      return next
    })
  }

  return (
    <input
      type="text"
      value={q}
      onChange={handleChange}
      placeholder="Search by title..."
      className="border rounded px-3 py-2 w-full max-w-sm"
    />
  )
}

export default SearchBox
