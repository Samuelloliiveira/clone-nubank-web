import { SiNubank } from "react-icons/si"
import { MdOutlineArrowOutward } from "react-icons/md"
import img from '../assets/nu_core_login.png'

export function ForgotPassord() {
    return (
        <main className="h-screen overflow-x-hidden overflow-scroll lg:relative lg:overflow-hidden">
            <a href="#" className="lg:ml-6 lg:mt-4 lg:absolute">
                <SiNubank className="ml-6 mt-4 lg:m-0 text-[2.75rem] text-secondary-purple dark:text-primary-purple lg:text-white" />
            </a>

            <div className="flex">
                <div className="lg:w-1/2 lg:h-screen">
                    <img
                        src={img}
                        alt="Imagem de uma mulher usando um notebook sentada em um sofá com um gato ao lado"
                        className="w-full h-full hidden lg:block object-cover object-top"
                    />
                </div>
                <section className="w-full h-screen flex flex-col lg:w-1/2 lg:overflow-x-hidden lg:overflow-scroll">
                    <div className="flex flex-1 items-center justify-center p-6">
                        <div className="w-[30.313rem] h-auto">
                            <p className="text-4xl mb-9">Vamos te ajudar a recuperar sua senha</p>

                            <div>
                                <p className="text-2xl mb-4">Você precisa do aplicativo do Nubank para recuperar sua senha</p>
                                <p className="text-base mb-4">Se você já tiver feito login no seu aplicativo do Nubank, você precisará sair da sua conta.</p>

                                <div className="mb-8 flex justify-center">
                                    <div className="max-w-[23.875rem] h-auto flex flex-col">
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                                <p className="text-sm">1</p>
                                            </div>
                                            <p className="text-base">Baixe o aplicativo do Nubank na sua loja de aplicativos, caso não esteja instalado;</p>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                                <p className="text-sm">2</p>
                                            </div>
                                            <p className="text-base">Toque em Entrar em minha conta e digite seu CPF;</p>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                                <p className="text-sm">3</p>
                                            </div>
                                            <p className="text-base">Clique em Esqueci a senha;</p>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                                <p className="text-sm">4</p>
                                            </div>
                                            <p className="text-base">Siga as instruções na tela para alterar sua senha.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-2xl">Ainda tem dúvidas?</p>
                            <a href="#" className="min-w-12 min-h-12 flex items-center cursor-pointer text-secondary-purple dark:text-primary-purple">
                                <span className="text-base font-medium mr-1">Confira como alterar sua senha</span>
                                <MdOutlineArrowOutward className="text-2xl" />
                            </a>
                        </div>
                    </div>
                    <footer className="w-auto min-h-20 lg:min-h-[8.313rem] bg-background-primary dark:bg-background flex justify-center items-center">
                        <a href="#" className="min-h-12 flex items-center">
                            <span className="font-medium text-secondary-purple dark:text-primary-purple">Lembrei a senha</span>
                        </a>
                    </footer>
                </section>
            </div>
        </main>
    )
}
