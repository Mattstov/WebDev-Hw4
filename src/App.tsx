import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Catalog from './pages/Catalog'
import ItemDetail from './pages/ItemDetail'
import ListByStatus from './pages/ListByStatus'
import About from './pages/About'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/items/:id" element={<ItemDetail />} />
          <Route path="/list/:status" element={<ListByStatus />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
