
import { Outlet } from "react-router-dom"

import img from '../assets/nu_core_login.png'
import { SiNubank } from "react-icons/si"

export function Login() {
    return (
        <main className="h-screen relative">
            <a href="#" className="ml-6 mt-4 absolute">
                <SiNubank className="text-[2.75rem] text-secondary-purple dark:text-primary-purple dark:lg:text-white" />
            </a>

            <div className="flex">
                <div className="lg:w-1/2 lg:h-screen">
                    <img
                        src={img}
                        alt="Imagem de uma mulher usando um notebook sentada em um sofá com um gato ao lado"
                        className="w-full h-full hidden lg:block object-cover object-top"
                    />
                </div>
                <Outlet />
            </div>
        </main>
    )
}
