import { Container } from "./container"
import Image from "next/image"
import Habilidades from "@/assets/TechSkillsImage.png"


export function TechSkills() {
    return (
        <section className="w-[100%] h-[100%] p-10 m-auto flex-2 border" id="TechSkills">
            <Container>
                <div className="mx-auto pb-5">
                    <Image
                        className="hidden md:block md:rounded-full lg:rounded-full lg:block"
                        src={Habilidades}
                        alt="Habilidades"
                        width={450}
                        height={540}
                    />
                </div>
                <div className="text-center mx-auto">
                    <h1 className="text-zinc-900 text-4xl font-bold mb-4 pb-5">TechSkills</h1>
                    <ul className="text-zinc-900 text-lg font-semibold mb-4 grid grid-cols-2 gap-5 pl-4 mx-auto border-b  border-zinc-900 pb-4">
                        <div className="border-r border-zinc-900 pr-[1.85rem]">
                            <li>HTML e CSS</li>
                            <p className="text-zinc-800 text-sm font-normal">Avançado</p>
                            <li>JavaScript</li>
                            <p className="text-zinc-800 text-sm font-normal">Intermediário</p>
                            <li>React JS</li>
                            <p className="text-zinc-800 text-sm font-normal">Básico</p>
                            <li>Next JS</li>
                            <p className="text-zinc-800 text-sm font-normal">Intermediário</p>
                        </div>

                        <div className="pr-7">
                            <li>Bootstrap</li>
                            <p className="text-zinc-800 text-sm font-normal">Avançado</p>
                            <li>Tailwind css</li>
                            <p className="text-zinc-800 text-sm font-normal">Avançado</p>
                            <li>Python</li>
                            <p className="text-zinc-800 text-sm font-normal">Básico</p>
                            <li>Arduino</li>
                            <p className="text-zinc-800 text-sm font-normal">Básico</p>
                        </div>
                    </ul>

                    <div className="grid grid-cols-9 gap-1">
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                            alt="HTML Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                            alt="CSS Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                            alt="JavaScript Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                            alt="NextJS Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                            alt="ReactJS Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/tailwindcss/tailwindcss-original.svg"
                            alt="Tailwind CSS Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                            alt="Bootstrap Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                            alt="Python Logo"
                            width={56}
                            height={56}
                        />
                        <Image
                            className="w-14 h-14"
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg"
                            alt="Python Logo"
                            width={56}
                            height={56}
                        />
                    </div>
                </div>
            </Container>

        </section>
    )
} 