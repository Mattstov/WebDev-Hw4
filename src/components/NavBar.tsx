import { NavLink } from 'react-router-dom'
import { useUiStore } from '../store/useUiStore'
import type { Density } from '../store/useUiStore'

const statuses = ['want', 'active', 'done', 'dropped']

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? 'text-blue-600 dark:text-blue-400 font-semibold'
    : 'text-gray-600 dark:text-gray-300'

function NavBar() {
  const theme = useUiStore((state) => state.theme)
  const toggleTheme = useUiStore((state) => state.toggleTheme)
  const density = useUiStore((state) => state.density)
  const setDensity = useUiStore((state) => state.setDensity)

  return (
    <nav className="flex flex-wrap items-center gap-3 p-4 border-b dark:border-gray-700">
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>
      {statuses.map((status) => (
        <NavLink key={status} to={`/list/${status}`} className={linkClass}>
          {status}
        </NavLink>
      ))}
      <NavLink to="/about" className={linkClass}>
        About
      </NavLink>

      <div className="flex flex-wrap items-center gap-2 sm:ml-auto">
        <button
          onClick={toggleTheme}
          className="border rounded px-2 py-1 text-sm dark:border-gray-600"
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
        <select
          value={density}
          onChange={(e) => setDensity(e.target.value as Density)}
          className="border rounded px-2 py-1 text-sm dark:border-gray-600 dark:bg-gray-800"
        >
          <option value="comfortable">Comfortable</option>
          <option value="compact">Compact</option>
        </select>
      </div>
    </nav>
  )
}

export default NavBar
