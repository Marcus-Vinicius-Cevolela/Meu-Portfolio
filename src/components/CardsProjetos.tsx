import Image from "next/image";
import Link from "next/link"
import ProjetosInfo from "@/data/ProjetosInfo";



export function CardsProjetos() {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid md:grid-cols-2 md:gap-5 lg:grid lg:grid-cols-3 lg:gap-5">
            {ProjetosInfo.map((projeto, index) => (
                <a key={index} href={projeto.link} target="_blank" rel="noopener noreferrer" className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-transform">
                    <Image
                        className="w-full"
                        src={projeto.image}
                        alt={`Projeto ${projeto.title}`}
                    />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{projeto.title}</div>
                        <p className="text-base">{projeto.description}</p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {projeto.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
                                {tag}
                            </span>
                        ))}
                    </div>
                </a>
            ))}
        </div> 
    );
}
