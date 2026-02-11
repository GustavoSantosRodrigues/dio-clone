import { user } from '@/assets/images'

export default function FeedCard() {
  return (
    <article className="bg-[#2e2a3a] rounded-lg overflow-hidden">
      
      <div className="bg-white h-48" />

      <div className="p-4 text-white">

        <div className="flex items-center gap-3 mb-3">
          <img src={user} className="w-8 h-8 rounded-full" />
          <div>
            <p className="text-sm font-semibold">Gustavo</p>
            <span className="text-xs text-zinc-400">Há 8 minutos</span>
          </div>
        </div>

        <h3 className="font-semibold mb-1">
          Projeto para curso de HTML e CSS
        </h3>

        <p className="text-sm text-zinc-300 mb-2">
          Projeto feito no curso de html e css no bootcamp da dio do Global avanade...{' '}
          <span className="text-pink-400 cursor-pointer">Ver mais</span>
        </p>
        
        <div className="flex gap-2 text-xs text-zinc-400">
          <span>#HTML</span>
          <span>#CSS</span>
          <span>#JavaScript</span>
        </div>
      </div>
    </article>
  )
}
