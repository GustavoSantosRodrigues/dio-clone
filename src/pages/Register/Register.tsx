import { email, password, user } from '@/assets/images'
import ButtonDefault from '../../components/Button/buttonDefault'
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '@/services/api'
import { useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
});


type FormData = yup.InferType<typeof schema>

export default function Register() {
    const navigate = useNavigate()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })


    const onSubmit = async (data: FormData) => {
        try {
            const response = await api.get('/users', {
                params: {
                    email: data.email,
                    password: data.password,
                },
            })

            if (response.data.length === 1) {
                navigate('/login')
                alert('Usuário já cadastrado')
            } else {
                alert('Usuário não cadastrado')
            }
        } catch (error: unknown) {
            alert('Erro ao criar usuário')
        }
    }



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

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Input nome */}
                                    <div className="flex items-center gap-3 border-b border-white/30 py-2 mb-4">
                                        <img src={user} alt="" className="h-4" />
                                        <Controller
                                            name="name"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="text"
                                                    placeholder="Nome completo"
                                                    className="bg-transparent outline-none text-sm w-full"
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}

                                    {/* Input email */}
                                    <div className="flex items-center gap-3 border-b border-white/30 py-2 mb-4">
                                        <img src={email} alt="" className="h-4" />
                                        <Controller
                                            name="email"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="email"
                                                    placeholder="E-mail"
                                                    className="bg-transparent outline-none text-sm w-full"
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}

                                    {/* Input senha */}
                                    <div className="flex items-center gap-3 border-b border-white/30 py-2 mb-6">
                                        <img src={password} alt="" className="h-4" />
                                        <Controller
                                            name="password"
                                            control={control}
                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="password"
                                                    placeholder="Password"
                                                    className="bg-transparent outline-none text-sm w-full"
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors.password && <p className="text-red-500 text-xs my-1">{errors.password.message}</p>}

                                    <ButtonDefault type="submit" title="Criar minha conta" className="cursor-pointer w-full h-10 rounded-full bg-pink-600 hover:bg-pink-500 transition" />

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
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}


