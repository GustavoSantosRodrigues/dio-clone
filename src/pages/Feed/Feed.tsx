
import Feed from '@/components/FeedCard/Feed'
import Ranking from '@/components/Ranking'
import { useAuth } from '@/hooks/userAuth'

export default function FeedPage() {
  const { user } = useAuth()
  return (
    <>
      <main className="w-full min-h-screen bg-linear-to-br from-[#1b1530] to-[#120d1f]">
        {/* <p>{user?.name}</p>
        <p>{user?.email}</p>
        <p>{user?.id}</p> */}
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
