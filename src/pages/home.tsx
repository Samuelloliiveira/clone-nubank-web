import { FiShield } from 'react-icons/fi'
import { CardBlocked } from '../assets/card_blocked'
import { HiMiniArrowUturnLeft } from 'react-icons/hi2'
import { RiUserLine } from 'react-icons/ri'
import { IoMdArrowForward } from 'react-icons/io'

export function Home() {
    return (
        <main className="min-h-screen grid lg:grid-cols-[5rem,2fr] lg:grid-rows-[5rem,1fr] xl:grid-cols-[20rem,2fr]">
            <section className="w-auto h-auto py-4 px-6 flex items-center justify-between bg-secondary-purple/70">
                <div className="flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-secondary-purple">
                        <RiUserLine className="w-6 h-6" />
                    </div>
                    <span className="font-medium px-3">Olá</span>
                </div>
                <button className="flex gap-2">
                    <FiShield className="w-5 h-5" />
                    <span className="font-medium">Autenticar</span>
                </button>
            </section>

            <section className="w-auto h-auto hidden ps-14 pe-14 lg:flex items-center justify-center bg-background">
                <div className="w-auto h-auto xl:w-[58.375rem] 2xl:w-[80rem]">
                    <h1 className="text-xl font-medium">Início</h1>
                </div>
            </section>

            <section className="w-auto h-auto p-6 pb-6 flex flex-col gap-6 lg:border-r-[1px] lg:border-background">
                <button className="w-auto h-auto rounded-xl p-4 text-start bg-background hover:brightness-75 lg:hidden xl:block">
                    <h3 className="text-base font-medium pb-1">Modo acesso rápido</h3>
                    <p className="text-sm mb-2 text-white/55">As funções estão limitadas para a sua própria segurança. Para o acesso completo faça a autenticação.</p>
                    <button className="flex items-center gap-1 py-4 text-primary-purple">
                        <span className="text-sm font-medium">Autenticar</span>
                        <IoMdArrowForward />
                    </button>
                </button>
            </section>

            <section className="w-auto h-auto px-6 pb-6 mb-14 xl:py-6 xl:px-14 xl:m-0 xl:flex flex-col items-center">
                <div className="w-auto h-auto xl:w-[58.375rem] 2xl:w-[80rem] grid grid-rows-3 xl:grid-rows-1 xl:grid-cols-3 gap-8 mx-auto xl:mb-14">
                    <button className="w-auto h-auto rounded-xl p-4 text-start bg-background hover:brightness-75">
                        <div className="w-12 h-12 rounded-full bg-[#313131] mb-4 flex items-center justify-center">
                            <FiShield className="w-5 h-5" />
                        </div>
                        <p className="text-xl font-medium mb-2">Me roubaram</p>
                        <p className="text-sm text-white/55">Passo a passo em caso de roubos</p>
                    </button>
                    <button className="w-auto h-auto rounded-xl p-4 text-start bg-background hover:brightness-75">
                        <div className="w-12 h-12 rounded-full bg-[#313131] mb-4 flex items-center justify-center">
                            <CardBlocked />
                        </div>
                        <p className="text-xl font-medium mb-2">Bloquear cartão físico</p>
                        <p className="text-sm text-white/55">Bloquar temporariamente o seu cartão físico</p>
                    </button>
                    <button className="w-auto h-auto rounded-xl p-4 text-start bg-background hover:brightness-75">
                        <div className="w-12 h-12 rounded-full bg-[#313131] mb-4 flex items-center justify-center">
                            <HiMiniArrowUturnLeft className="scale-y-[-1] w-5 h-5" />
                        </div>
                        <p className="text-xl font-medium mb-2">Sair de tudo</p>
                        <p className="text-sm text-white/55">Desconecta todos os seus aparelhos</p>
                    </button>
                </div>
            </section>
        </main>
    )
}
