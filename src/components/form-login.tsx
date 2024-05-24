import { useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { formatCPF } from '../utils/cpf-mask-input'
import { Link, useNavigate } from 'react-router-dom'

import { MdOutlineErrorOutline } from 'react-icons/md'
import { IoMdArrowForward } from 'react-icons/io'
import { RiEyeCloseLine } from 'react-icons/ri'
import { VscEye } from 'react-icons/vsc'

export function FormLogin() {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [formValid, setFormValid] = useState(false)

    /*
        Essa função é ilustrativa, somente para simular uma conexão
        entre o axios e o backend 
    */
    const delayNavigation = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        navigate('/acesso-qr-celular')
    }

    const schema = z.object({
        cpf: z.string().min(1, "Este campo é obrigatório").regex(/^[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}$/, "Não é um CPF válido"),
        password: z.string().min(1, "Este campo é obrigatório").min(8, "A senha deve ter 8 digitos ou mais")
    })

    const { register, handleSubmit, formState, getValues, setValue, reset } = useForm({
        mode: 'all',
        resolver: zodResolver(schema),
        defaultValues: {
            cpf: '',
            password: ''
        }
    })

    const { errors, isSubmitting } = formState
    const { cpf, password } = getValues()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    async function handleSubmitData(data: any) {
        console.log('submit', data)

        await delayNavigation()

        reset()
    }

    useEffect(() => {
        const isCpfValid = !errors.cpf && cpf !== ""
        const isPasswordValid = !errors.password && password !== ""
        setFormValid(isCpfValid && isPasswordValid)

    }, [cpf, password])

    const handleCPFChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedValue = formatCPF(event.target.value)
        setValue('cpf', formattedValue, { shouldValidate: true })
    }

    return (
        <section className="w-full h-screen flex flex-col lg:w-1/2">
            <div className="flex flex-1 items-center justify-center">
                <form
                    onSubmit={handleSubmit(handleSubmitData)}
                    className="w-[26.875rem] p-6 m-auto mt-[6.5rem] lg:mt-auto"
                >
                    <h1 className="text-[1.75rem] font-medium mb-6">Acesse sua conta</h1>

                    <div className="flex flex-col">
                        <label htmlFor="cpf" className="text-sm font-medium text-black/60 dark:text-white/60">CPF</label>
                        <div className={`mb-10 flex items-center border-b-2 ${errors.cpf?.message ? "mb-2 border-red-error dark:border-red-error-secondary" : "border-background-primary dark:border-background"}`}>
                            <input
                                className="w-[95%] text-xl font-medium bg-transparent outline-none py-3 mr-2 caret-primary-purple"
                                type="text"
                                id="cpf"
                                {...register('cpf')}
                                onChange={handleCPFChange}
                            />

                            {errors.cpf?.message &&
                                <MdOutlineErrorOutline className="text-2xl fill-red-error dark:fill-red-error-secondary" />
                            }
                        </div>
                        {errors.cpf?.message &&
                            <p className="text-sm font-medium text-red-error dark:text-red-error-secondary mb-10">
                                {errors.cpf?.message}
                            </p>
                        }

                        <label htmlFor="password" className="text-sm font-medium text-black/60 dark:text-white/60">Senha</label>
                        <div className={`mb-2 flex items-center border-b-2 ${errors.password?.message ? "border-red-error dark:border-red-error-secondary" : "border-background-primary dark:border-background"}`}>
                            <input
                                className="w-[95%] text-xl font-medium bg-transparent outline-none py-3 mr-2 caret-primary-purple"
                                type={showPassword ? "text" : "password"}
                                min={8}
                                id="password"
                                {...register('password')}
                            />
                            {showPassword ? (
                                <button type="button" onClick={togglePasswordVisibility}>
                                    <VscEye className={`text-2xl stroke-[0.4] ${errors.password?.message ? "fill-red-error dark:fill-red-error-secondary" : "fill-background/80 dark:fill-[#e1e1e1a3]"}`} />
                                </button>
                            ) : (
                                <button type="button" onClick={togglePasswordVisibility}>
                                    <RiEyeCloseLine className={`text-2xl ${errors.password?.message ? "fill-red-error dark:fill-red-error-secondary" : "fill-background/80 dark:fill-[#e1e1e1a3]"}`} />
                                </button>
                            )}
                        </div>

                        {errors.password?.message ?
                            <p className="text-sm font-medium text-red-error dark:text-red-error-secondary mb-10">
                                {errors.password?.message}
                            </p> :
                            <p className="text-sm text-black/60 dark:text-white/60 mb-10">Possui 8 caracteres ou mais</p>
                        }

                        <button
                            type="submit"
                            className={`h-14 rounded-[4rem] flex items-center justify-center outline-none ${formValid ? 'bg-secondary-purple text-white outline' : 'bg-background-primary text-black/35 dark:bg-background dark:text-white/35 cursor-not-allowed'}`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ?
                                <div className="w-6 h-6 border-2 rounded-[50%] border-white border-l-transparent animate-spin" />
                                :
                                <div className="flex items-center gap-3">
                                    <span className="text-base font-medium">Continuar</span>
                                    <IoMdArrowForward className="text-2xl" />
                                </div>
                            }
                        </button>
                    </div>
                </form>
            </div>
            <footer className="w-auto min-h-20 lg:min-h-[8.313rem] bg-background-primary dark:bg-background flex justify-center items-center">
                <div className="w-[26.875rem] h-12 flex items-center justify-between px-6">
                    <Link to={'esqueci-senha'} className="min-h-12 flex items-center">
                        <span className="font-medium text-secondary-purple dark:text-primary-purple">Esqueci a senha</span>
                    </Link>
                    <a href="#" className="min-h-12 flex items-center">
                        <span className="font-medium text-secondary-purple dark:text-primary-purple">Não sou cliente</span>
                    </a>
                </div>
            </footer>
        </section>
    )
}