
import { email, password } from '@/assets/images'


export default function Login() {
    return (
        <>
            {/* <Header /> */}
            <section className="w-full min-h-[calc(100vh-47px)] bg-gradient-to-br from-[#1b1530] to-[#120d1f]">
                <div className="container h-full">
                    <div className="grid grid-cols-12 items-center gap-10 min-h-[calc(100vh-47px)]">

                        {/* Coluna esquerda */}
                        <div className="col-span-12 md:col-span-6">
                            <h1 className="text-white text-4xl font-bold leading-tight">
                                A plataforma para você aprender <br />
                                com experts, dominar as principais <br />
                                tecnologias e entrar mais rápido <br />
                                nas empresas mais desejadas.
                            </h1>
                        </div>

                        {/* Coluna direita */}
                        <div className="col-span-12 md:col-span-6 flex justify-end">
                            <div className="w-full max-w-sm text-white">
                                <h2 className="text-2xl font-bold mb-2">
                                    Faça seu cadastro
                                </h2>

                                <p className="text-sm text-zinc-300 mb-6">
                                    Faça seu login e make the change._
                                </p>

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
                                <button className="w-full py-3 rounded-full bg-pink-600 hover:bg-pink-700 transition font-semibold mb-6">
                                    Entrar
                                </button>

                                {/* Links */}
                                <div className="flex justify-between text-sm">
                                    <a href="#" className="text-yellow-400 hover:underline">
                                        Esqueci minha senha
                                    </a>

                                    <a href="/cadastro" className="text-green-400 hover:underline">
                                        Criar conta
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}


