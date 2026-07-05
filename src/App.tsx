import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Catalog from './pages/Catalog'
import ItemDetail from './pages/ItemDetail'
import ListByStatus from './pages/ListByStatus'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { useUiStore } from './store/useUiStore'

function App() {
  const theme = useUiStore((state) => state.theme)

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <NavBar />
        <main className="p-4 max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/items/:id" element={<ItemDetail />} />
            <Route path="/list/:status" element={<ListByStatus />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
