import { NavLink } from 'react-router-dom'

const statuses = ['want', 'active', 'done', 'dropped']

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'

function NavBar() {
  return (
    <nav className="flex gap-4 p-4 border-b">
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
    </nav>
  )
}

export default NavBar
