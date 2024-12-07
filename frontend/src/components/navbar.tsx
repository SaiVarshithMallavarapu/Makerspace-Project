import Link from "next/link"
import { User } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-8">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/faculty">Faculty</NavItem>
          <NavItem href="/course">Course</NavItem>
          <NavItem href="/machinery">Machinery</NavItem>
          <NavItem href="/forms">Forms</NavItem>
          <NavItem href="/gallery">Gallery</NavItem>
          <li>
            <Link
              href="/profile"
              className="block p-4 text-gray-600 hover:text-gray-900"
            >
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

function NavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li>
      <Link
        href={href}
        className="block p-4 text-gray-600 hover:text-gray-900 transition-colors"
      >
        {children}
      </Link>
    </li>
  )
}

