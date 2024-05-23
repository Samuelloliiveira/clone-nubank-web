import { IoMdArrowRoundForward } from 'react-icons/io'
import { SiNubank } from 'react-icons/si'

export function NotFound() {
    return (
        <main className="flex flex-1 flex-col min-h-screen">
            <footer className="w-full py-6 px-8 lg:p-10">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <SiNubank className="text-[2.5rem] lg:text-6xl text-secondary-purple" />
                    </a>
                    <a href="#" className="min-w-12 min-h-12 flex items-center cursor-pointer text-secondary-purple dark:text-primary-purple">
                        <span className="text-primary-purple font-medium">Entrar</span>
                    </a>
                </div>
            </footer>

            <section className="w-auto h-full py-8 ps-6 pe-6 flex flex-1 items-center justify-center">
                <div className="w-auto h-auto lg:w-[31.25rem]">
                    <div className="flex flex-col gap-8">
                        <h1 className="text-[2.75rem] font-medium leading-[1.1]">Ops!</h1>
                        <h2 className="text-[1.75rem] font-medium leading-[1.2]">Não conseguimos encontrar a página que você está procurando.</h2>
                    </div>

                    <div className="my-8 flex flex-col gap-4 lg:my-6">
                        <p className="text-lg">Não se preocupe pois ela está em boa companhia com outras coisas que não existem no mundo do Nubank:</p>
                        <div>
                            <p className="text-base">Porta-giratória</p>
                            <p className="text-base">Boletos chegando pelo correio</p>
                            <p className="text-base">Pontos que já venceram</p>
                            <p className="text-base">Senhas pra falar com o gerente</p>
                            <p className="text-base">Tarifas escondidas</p>
                        </div>
                    </div>

                    <div>
                        <a href="#" className="min-w-12 min-h-12 flex items-center cursor-pointer text-secondary-purple dark:text-primary-purple">
                            <span className="text-base font-medium mr-1">Ir para a página principal</span>
                            <IoMdArrowRoundForward className="text-[24px]" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}