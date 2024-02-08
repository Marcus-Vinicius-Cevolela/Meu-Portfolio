import { Container } from "./container"
import Image from "next/image"
import Profile from "@/assets/MarcusProfile.jpeg"

export function SobreMim() {
    return (
        <section className="w-[100%] h-[100%] p-11 m-auto flex-2 border" id="SobreMim">
            <Container>
                <div className="text-center max-w-[500px] mx-auto">
                    <h1 className="text-zinc-900 text-4xl font-bold mb-4">Olá! Sou Marcus Vinícius e sou desenvolvedor Front-End.</h1>
                    <p className="text-zinc-900 text-lg font-semibold mb-4">Tenho 17 anos, sou do Rio de Janeiro e me dedico aos estudos de programação há mais ou menos dois anos e meio. Durante esse período desenvolvi diversos projetos utilizando várias tecnologias e frameworks. </p>

                    <div className="flex-2">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded mr-4"><a href="https://linkedin.com/in/marcus-cevolela-355644292" target="_blank" rel="noopener noreferrer">Linkedin</a></button>
                        <button className="bg-gray-700 text-white py-2 px-4 rounded"><a href="https://github.com/Marcus-Vinicius-Cevolela" target="_blank" rel="noopener noreferrer">GitHub</a></button>
                    </div>
                </div>

                <div className="mx-auto pb-5">
                    <Image
                        className="hidden md:block md:rounded-full lg:rounded-full lg:block"
                        src={Profile}
                        alt="Marcus Vinícius"
                        width={400}
                        height={400}
                    />
                </div>

            </Container>

        </section>
    )
} 