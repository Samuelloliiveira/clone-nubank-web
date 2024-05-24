import { useNavigate } from 'react-router-dom'
import { HiMiniArrowUturnLeft } from 'react-icons/hi2'

import QRCode from '../assets/qrcode_portfolio-samuel.png'

export function AccessQRMobile() {
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate('/login')
    }

    const handleHome = async () => {
        navigate('/home')
    }


    return (
        <section className="w-full h-screen pt-20 flex flex-col lg:pt-0 lg:w-1/2 lg:overflow-x-hidden lg:overflow-scroll relative">
            <div className="absolute top-6 right-2">
                <button onClick={handleGoBack} className="px-8 lg:px-4 flex items-center cursor-pointer text-secondary-purple dark:text-primary-purple hover:brightness-90">
                    <HiMiniArrowUturnLeft className="text-2xl mr-3 scale-y-[-1]" />
                    <span className="font-medium">Sair</span>
                </button>
            </div>

            <div className="flex flex-1 items-center justify-center">
                <div className="w-[28.125rem] h-auto p-6 mx-auto flex flex-col items-center">
                    <div className="max-w-[23.875rem] h-auto flex flex-col">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                <p className="text-sm">1</p>
                            </div>
                            <p className="text-base">Abra o aplicativo do Nubank no celular</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                <p className="text-sm">2</p>
                            </div>
                            <p className="text-base">Toque na sua foto para acessar o menu</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                <p className="text-sm">3</p>
                            </div>
                            <p className="text-base">Selecione Segurança / Acesso no navegador</p>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 flex items-center justify-center shrink-0 rounded-full mr-4 bg-background-primary dark:bg-background">
                                <p className="text-sm">4</p>
                            </div>
                            <p className="text-base">Aponte a câmera para o código QR abaixo</p>
                        </div>
                    </div>
                    <button className="mt-9">
                        <img
                            src={QRCode}
                            alt="QR Code do site do desenvolvedor Samuel Oliveira"
                            className="w-[11.25rem] h-[11.25rem]"
                        />
                    </button>
                </div>
            </div>
            <footer className="w-auto min-h-20 lg:min-h-[8.313rem] bg-background-primary dark:bg-background flex justify-center items-center">
                <button onClick={handleHome} className="min-h-12 flex items-center">
                    <span className="font-medium text-secondary-purple dark:text-primary-purple">Continuar sem celular</span>
                </button>
            </footer>
        </section>
    )
}