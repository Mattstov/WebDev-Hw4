import { useParams } from 'react-router-dom'

function ListByStatus() {
  const { status } = useParams()
  return <div>Items with status: {status}</div>
}

export default ListByStatus
