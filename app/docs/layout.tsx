'use client'

import Link from 'next/link'
// import { Button } from "@/components/ui/button"
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '#getting-started', label: 'Getting Started' },
  { href: '#supported-commands', label: 'Supported Commands' },
  { href: '#features', label: 'Features' },
  { href: '#troubleshooting', label: 'Troubleshooting' },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-64 p-6 md:sticky md:top-14 md:h-[calc(100vh-3.5rem)] md:overflow-y-auto">
        <nav className="space-y-2">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={`/docs${href}`}
              className={`block transition-colors duration-200 ${
                pathname === '/docs' + href
                  ? 'text-blue-600 font-semibold'
                  : 'hover:text-blue-600'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}

