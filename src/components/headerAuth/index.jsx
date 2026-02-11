import { dioLogo } from '@/assets/images'

export default function Header() {
    return (
        <header className="w-full h-16 bg-[#151515] backdrop-blur-md">
            <div className="container h-full flex items-center justify-between">

                <div className="flex items-center">
                    <a href="/">
                        <img
                            src={dioLogo}
                            alt="DIO Logo"
                            className="h-6"
                        />
                    </a>
                </div>

                <nav className="flex items-center gap-4 text-sm text-white cursor-pointer">
                    <a href="/" className="hover:text-pink-400">
                        Home
                    </a>

                    <a href="/login">
                        <button className="px-4 py-2 rounded-full bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                            Entrar
                        </button>
                    </a>
                </nav>

            </div>
        </header>
    )
}
