
import { email, password } from '@/assets/images'
import { useForm, Controller } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '@/services/api'
import ButtonDefault from '../../components/Button/buttonDefault'

import { Link, useNavigate } from 'react-router-dom'

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email é obrigatório'),
    password: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
});

type LoginProps = yup.InferType<typeof schema>

interface user {
    id: number
    name: string
    email: string
    password: string
}

export default function Login() {
    const navigate = useNavigate()
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginProps>({
        resolver: yupResolver(schema),
        mode: 'all',
        defaultValues: {
            email: '',
            password: '',
        },
    })

    // console.log(isValid, errors)

    const onSubmit = async (data: LoginProps) => {
        try {
            const response = await api.get<user[]>(`/users`, {
                params: {
                    email: data.email,
                    password: data.password
                }
            })
            // console.log('retorno api', response.data)
            if (response.data.length === 1) {
                console.log('Usuário encontrado')
                navigate('/feed')
            } else {
                alert('Usuário não encontrado, verifique seu email e senha')
            }
        } catch (error: unknown) {
            alert('Erro ao fazer login')
        }
    }

    return (
        <>
            {/* <Header /> */}
            <section className="w-full min-h-[calc(100vh-47px)] bg-linear-to-br from-[#1b1530] to-[#120d1f]">
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


                                <form onSubmit={handleSubmit(onSubmit)}>

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
                                                    className={`bg-transparent outline-none text-sm w-full ${errors.email ? 'border-red-500' : ''}`}
                                                />
                                            )}
                                        />
                                    </div>

                                    {errors.email && <span className="error-message">{errors.email.message}</span>}
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
                                                    className={`bg-transparent outline-none text-sm w-full ${errors.password ? 'border-red-500' : ''}`}
                                                />
                                            )}
                                        />
                                    </div>
                                    {errors?.password && <span className="error-message">{errors?.password.message}</span>}

                                    {/* Botão */}
                                    <ButtonDefault
                                        type="submit"
                                        title="Entrar"
                                        className="cursor-pointer w-full h-10 rounded-full bg-pink-600 hover:bg-pink-500 transition"
                                    />

                                    {/* Links */}
                                    <div className="flex justify-between text-sm my-3">

                                        <Link to="/esqueci-senha" className="text-yellow-400 hover:underline">
                                            Esqueci minha senha
                                        </Link>

                                        <Link to="/cadastro" className="text-green-400 hover:underline">
                                            Criar conta
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}


