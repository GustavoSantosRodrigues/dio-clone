import Header from '../components/header/Header'
import { email, password, user } from '@/assets/images'

export default function Register() {
  return (
    <>
    {/* <Header /> */}
     <section className="w-full min-h-[calc(100vh-47px)] bg-gradient-to-br from-[#1b1530] to-[#120d1f]">
      <div className="container h-full">

        <div className="grid grid-cols-12 items-center gap-8 min-h-[calc(100vh-47px)]">

          {/* Coluna esquerda */}
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-white text-4xl leading-tight font-bold">
              A plataforma para você <br />
              aprender com experts, <br />
              dominar as principais <br />
              tecnologias e entrar <br />
              mais rápido nas <br />
              empresas mais <br />
              desejadas.
            </h1>
          </div>

          {/* Coluna direita */}
          <div className="col-span-12 md:col-span-6 flex justify-end">
            <div className="w-full max-w-sm text-white">

              <h2 className="text-2xl font-bold mb-2">
                Comece agora grátis
              </h2>

              <p className="text-sm text-zinc-300 mb-6">
                Crie sua conta e make the change._
              </p>

              {/* Input nome */}
              <div className="flex items-center gap-3 border-b border-white/30 py-2 mb-4">
                <img src={user} alt="" className="h-4" />
                <input
                  type="text"
                  placeholder="Nome completo"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>

              {/* Input email */}
              <div className="flex items-center gap-3 border-b border-white/30 py-2 mb-4">
                <img src={email} alt="" className="h-4" />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>

              {/* Input senha */}
              <div className="flex items-center gap-3 border-b border-white/30 py-2 mb-6">
                <img src={password} alt="" className="h-4" />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent outline-none text-sm w-full"
                />
              </div>

              {/* Botão */}
              <button className="w-full h-10 rounded-full bg-pink-600 hover:bg-pink-500 transition">
                Criar minha conta
              </button>

              {/* Termos */}
              <p className="text-xs text-zinc-300 mt-4 leading-relaxed">
                Ao clicar em "criar minha conta grátis", declaro que aceito as{' '}
                <span className="text-white underline cursor-pointer">
                  Políticas de Privacidade
                </span>{' '}
                e os{' '}
                <span className="text-white underline cursor-pointer">
                  Termos de Uso da DIO
                </span>.
              </p>

              <p className="text-xs mt-3">
                Já tenho conta.{' '}
                <span className="text-green-400 cursor-pointer">
                  Fazer login
                </span>
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}


