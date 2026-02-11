import { dioLogo } from '@/assets/images'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="w-full h-16 bg-[#151515] backdrop-blur-md">
            <div className="container h-full flex items-center justify-between">

                <div className="flex items-center">
                    <Link to="/">
                        <img
                            src={dioLogo}
                            alt="DIO Logo"
                            className="h-6"
                        />
                    </Link>
                </div>

                <nav className="flex items-center gap-4 text-sm text-white">

                    <Link to="/" className="hover:text-pink-400">
                        Home
                    </Link>

                    <Link to="/login">
                        <button className="px-4 py-2 rounded-full bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                            Entrar
                        </button>
                    </Link>

                    <Link to="/register">
                        <button className="px-4 py-2 rounded-full bg-zinc-700 hover:bg-zinc-600 cursor-pointer">
                            Cadastrar
                        </button>
                    </Link>

                </nav>


            </div>
        </header>
    )
}
