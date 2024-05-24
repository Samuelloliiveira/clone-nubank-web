import { FiShield } from "react-icons/fi";
import { HiMiniArrowUturnLeft } from "react-icons/hi2";
import { CardBlocked } from "../assets/card_blocked";

export function Home() {
    return (
        <main className="min-h-screen grid max-md:grid-cols-1 lg:grid-cols-[320px,1fr]">
            <section className="border-r-[1px] border-background">
                <footer className="w-full h-20 bg-secondary-purple brightness-75">

                </footer>
            </section>
            <section className="">
                <footer className="hidden w-full h-20 lg:flex items-center justify-center ps-14 bg-background">
                    <h1 className="w-[80rem] text-xl font-medium">Inicio</h1>
                </footer>

                <div className="w-auto h-auto py-6 px-[3.625rem]">
                    <div className="w-[80rem] grid grid-cols-12 gap-8">
                        <button className="w-auto h-auto col-span-3 rounded-xl p-4 text-start bg-background hover:brightness-75">
                            <div className="w-12 h-12 rounded-full bg-[#313131] mb-4 flex items-center justify-center">
                                <FiShield className="w-5 h-5" />
                            </div>
                            <p className="text-xl font-medium mb-2">Me roubaram</p>
                            <p className="text-sm text-white/55">Passo a passo em caso de roubos</p>
                        </button>
                        <button className="w-auto h-auto col-span-3 rounded-xl p-4 text-start bg-background hover:brightness-75">
                            <div className="w-12 h-12 rounded-full bg-[#313131] mb-4 flex items-center justify-center">
                                <CardBlocked />
                            </div>
                            <p className="text-xl font-medium mb-2">Bloquear cartão físico</p>
                            <p className="text-sm text-white/55">Bloquar temporariamente o seu cartão físico</p>
                        </button>
                        <button className="w-auto h-auto col-span-3 rounded-xl p-4 text-start bg-background hover:brightness-75">
                            <div className="w-12 h-12 rounded-full bg-[#313131] mb-4 flex items-center justify-center">
                                <HiMiniArrowUturnLeft className="scale-y-[-1] w-5 h-5" />
                            </div>
                            <p className="text-xl font-medium mb-2">Sair de tudo</p>
                            <p className="text-sm text-white/55">Desconecta todos os seus aparelhos</p>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
