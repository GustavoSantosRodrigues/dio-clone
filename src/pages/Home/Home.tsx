import { bannerHome } from '@/assets/images'
import ButtonDefault from '../../components/Button/buttonDefault'

export default function Home() {
  return (
    <section className="banner-home w-full bg-linear-to-br from-[#1b1530] to-[#120d1f]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 items-center min-h-[calc(100vh-47px)] gap-8">

          {/* Texto */}
          <div className="col-span-12 md:col-span-6 text-white">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-pink-500">Implemente</span><br />
              o seu futuro global<br />
              agora!
            </h1>

            <a href="/feed" className="text-pink-500 hover:text-pink-400 transition">Ver feed</a>

            <p className="mt-6 text-zinc-300 max-w-md">
              Domine as tecnologias utilizadas pelas empresas mais inovadoras
              do mundo e encare seu novo desafio profissional, evoluindo em
              comunidade com os melhores experts.
            </p>

            <a href="/register">
              <ButtonDefault title="Começar agora" className=" cursor-pointer mt-8 px-6 py-3 rounded-full bg-pink-600 hover:bg-pink-500 transition" />
            </a>
          </div>

          {/* Imagem */}
          <div className="col-span-12 md:col-span-6 flex justify-center">
            <img
              src={bannerHome}
              alt="Banner Home"
              className="max-w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  )
}