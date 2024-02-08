// @ts-nocheck
import { Metadata } from "next";
import "./globals.css";
import { Cabecalho } from "@/components/header";

export const metadata: Metadata = {
  title: "Portfólio | Marcus Cevolela",
  description: "Portfolio do desenvolvedor front-end Marcus Vinícius Cevolela.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) 
{
  return (
    <html lang="pt-br">
      <body className=" bg-zinc-100 w-100%">
        <Cabecalho />
        {children}
      </body>
    </html>
  )
}
