import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="h-14 border-b flex items-center px-4 shrink-0">
      <nav className="flex gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
      </nav>
    </header>
  )
}
