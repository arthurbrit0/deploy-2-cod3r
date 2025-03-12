"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import MobileMenu from "./MobileMenu";
import ListItem from "./ListItem";

const products = [
  {
    title: "Formação DEV",
    href: "/",
    description: "Trilha de formação completa para quem deseja se tornar um desenvolvedor",
    icon: "🚀",
  },
  {
    title: "Formação DEV Express",
    href: "/",
    description: "Trilha de formação completa para quem deseja se tornar um desenvolvedor rápido",
    icon: "⚡",
  },
  {
    title: "Formação IA",
    href: "/",
    description: "Trilha de formação completa para quem deseja se tornar um especialista em IA",
    icon: "🧠",
  }
];

const tracks = [
  {
    title: "Fundamentos",
    href: "/areas/fundamentos-dev",
    description: "Trilha fundamental para iniciar sua jornada na programação",
    icon: "🎯",
  },
  {
    title: "Especialista",
    href: "/areas/especialista-dev",
    description: "Aprofunde seus conhecimentos em desenvolvimento",
    icon: "⚡",
  },
  {
    title: "Humano",
    href: "/areas/humano-dev",
    description: "Desenvolva habilidades interpessoais e de liderança",
    icon: "👥",
  },
  {
    title: "Arquiteto",
    href: "/areas/arquiteto-dev",
    description: "Domine a arquitetura de software",
    icon: "🏗️",
  },
  {
    title: "Mentoria",
    href: "/areas/mentoria-dev",
    description: "Acompanhamento personalizado com especialistas",
    icon: "👨‍🏫",
  },
];

const others = [
  {
    title: "Clube do Livro",
    href: "/",
    description: "Trilha de formação completa para quem deseja se tornar um desenvolvedor",
    icon: "📚",
  },
  {
    title: "Projeto Open-Source",
    href: "/",
    description: "Trilha de formação completa",
    icon: "💻",
  }
];

export function Header() {
  return (
    <header className="bg-black border-b border-zinc-950 py-12 flex justify-between items-center px-6 md:px-20 h-16 sticky top-0 z-50">
      <div className="flex items-center gap-6 md:gap-12">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" width={150} height={0} alt="Logo" />
        </Link>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-gray-300 hover:text-white">
                  Formação DEV
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[900px] p-6 bg-black">
                    <div className="grid grid-cols-5 gap-6">
                      <div className="col-span-3">
                        <div className="mb-6">
                          <h3 className="font-semibold mb-3 text-sm text-gray-400">FORMAÇÕES</h3>
                          <ul className="grid gap-2">
                            {products.map((product) => (
                              <ListItem
                                key={product.title}
                                title={product.title}
                                href={product.href}
                                icon={product.icon}
                              >
                                {product.description}
                              </ListItem>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-3 text-sm text-gray-400">ÁREAS DA FORMAÇÃO DEV</h3>
                          <div className="grid grid-cols-2 gap-2 list-none">
                            {tracks.map((track) => (
                              <ListItem
                                key={track.title}
                                title={track.title}
                                href={track.href}
                                icon={track.icon}
                              >
                                {track.description}
                              </ListItem>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="mb-6">
                          <h3 className="font-semibold mb-3 text-sm text-gray-400">OUTROS</h3>
                          <ul className="grid gap-2">
                            {others.map((other) => (
                              <ListItem
                                key={other.title}
                                title={other.title}
                                href={other.href}
                                icon={other.icon}
                              >
                                {other.description}
                              </ListItem>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-lg p-4">
                          <Image 
                            src="/logo.png"
                            alt="Logo da Formação"
                            width={200}
                            height={200}
                            className="m-5 mx-auto"
                          />
                          <div className="mb-3">
                            <h3 className="text-lg font-bold text-white mb-1">Formação Completa</h3>
                            <p className="text-sm text-gray-400">
                              Sua jornada para se tornar um desenvolvedor de sucesso começa aqui
                            </p>
                          </div>
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            <div className="flex items-center gap-2 text-gray-300">
                              <span className="text-green-500">✓</span>
                              <span className="text-sm">Mentoria personalizada</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <span className="text-green-500">✓</span>
                              <span className="text-sm">Projetos práticos</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <span className="text-green-500">✓</span>
                              <span className="text-sm">Comunidade ativa</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                              <span className="text-green-500">✓</span>
                              <span className="text-sm">Suporte dedicado</span>
                            </div>
                          </div>
                          <Button primary href="/assinatura" className="w-full justify-center text-sm py-2">
                            Garantir Minha Vaga
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/projeto-ead"
                  className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2"
                >
                  Projeto EAD
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="hidden md:flex md:gap-3">
        <Button href="http://escola.formacao.dev">
          Área de Membros
        </Button>
        <Button primary href="/assinatura">
          Garantir Minha Vaga
        </Button>
      </div>
      <div className="md:hidden">
        <MobileMenu tracks={tracks} />
      </div>
    </header>
  );
}

export default Header;