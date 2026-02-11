
import Feed from '@/components/feedCard/Feed'
import Ranking from '@/components/ranking/ranking'

export default function FeedPage() {
  return (
    <>

      <main className="w-full min-h-screen bg-gradient-to-br from-[#1b1530] to-[#120d1f]">
        <div className="container py-8">
          <div className="grid grid-cols-12 gap-8">
            
            {/* Feed */}
            <div className="col-span-12 lg:col-span-8">
              <Feed />
            </div>

            {/* Ranking */}
            <div className="col-span-12 lg:col-span-4">
              <Ranking />
            </div>

          </div>
        </div>
      </main>
    </>
  )
}
