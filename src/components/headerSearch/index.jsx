import { user, dioLogo } from '@/assets/images'
import { Search } from 'lucide-react'

export default function HeaderSearch() {
  return (
    <header className="w-full h-14 bg-black/90">
      <div className="container h-full flex items-center justify-between">

        {/* Logo + busca */}
        <div className="flex items-center gap-6">
          <a href="/">
            <img src={dioLogo} alt="DIO" className="h-6" />
          </a>

          <div className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-full w-64">
            <Search size={16} className="text-zinc-400" />
            <input
              type="text"
              placeholder="BUSCAR"
              className="bg-transparent outline-none text-sm text-white w-full"
            />
          </div>
        </div>

        {/* Menu */}
        <nav className="flex items-center gap-6 text-sm text-white">
          <span className="cursor-pointer">Live Code</span>
          <span className="cursor-pointer">Global</span>

          <div className="flex items-center gap-2 cursor-pointer">
            <img src={user} className="w-7 h-7 rounded-full" />
            <span className="text-xs">▼</span>
          </div>
        </nav>
      </div>
    </header>
  )
}
