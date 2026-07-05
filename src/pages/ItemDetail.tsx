import { useParams } from 'react-router-dom'

function ItemDetail() {
  const { id } = useParams()
  return <div>Item detail for id {id}</div>
}

export default ItemDetail
