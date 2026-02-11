import { user } from '@/assets/images'

export default function Ranking() {
  return (
    <aside>
      <h2 className="text-white text-sm font-semibold mb-6">
        # RANKING 5 TOP DA SEMANA
      </h2>

      <div className="flex flex-col gap-5">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <div key={index} className="flex items-center gap-3">
            <img src={user} className="w-8 h-8 rounded-full" />

            <div className="flex-1">
              <p className="text-white text-sm font-medium">
                Gustavo
              </p>

              <div className="w-full h-2 bg-zinc-700 rounded-full mt-1">
                <div className="h-2 bg-green-400 rounded-full w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
