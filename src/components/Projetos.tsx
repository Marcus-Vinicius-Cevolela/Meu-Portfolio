import { Container } from "./container";
import { CardsProjetos } from "./CardsProjetos";


export function Projetos() {
    return (
        <section className="w-full h-full p-10 m-auto" id="Projetos">
            <Container>
                <div className="text-center mx-auto pb-5">
                    <h1 className="text-zinc-900 text-4xl font-bold mb-4">Projetos</h1>
                    <p className="text-zinc-900 text-lg font-semibold mb-4">
                        Alguns projetos que desenvolvi durante minha jornada como Dev.
                    </p>
                </div>
            </Container>
            <CardsProjetos/>
            

            
        </section>
    );
}
