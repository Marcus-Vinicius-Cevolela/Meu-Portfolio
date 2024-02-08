// @ts-nocheck
import RootLayout from "./layout";

import { SobreMim } from "@/components/sobreMim";
import { TechSkills } from "@/components/TechSkills";
import { Cabecalho } from "@/components/header";
import { Projetos } from "@/components/Projetos"

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <SobreMim />
      <TechSkills />
      <Projetos />
    </div>
  );
}

