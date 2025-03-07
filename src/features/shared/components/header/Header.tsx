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

const tracks = [
  {
    title: "Fundamentos",
    href: "/areas/fundamentos-dev",
    description: "Trilha fundamental para iniciar sua jornada na programação",
  },
  {
    title: "Inteligência Artificial",
    href: "/areas/ia-dev",
    description: "Explore o mundo da IA e suas aplicações práticas",
  },
  {
    title: "Humano",
    href: "/areas/humano-dev",
    description: "Desenvolva habilidades interpessoais e de liderança",
  },
  {
    title: "Especialista",
    href: "/areas/especialista-dev",
    description: "Aprofunde seus conhecimentos em desenvolvimento",
  },
  {
    title: "Arquiteto",
    href: "/areas/arquiteto-dev",
    description: "Domine a arquitetura de software",
  },
  {
    title: "Mentoria",
    href: "/areas/mentoria-dev",
    description: "Acompanhamento personalizado com especialistas",
  },
];

export function Header() {
  return (
    <header className="bg-black flex justify-between items-center px-6 md:px-20 h-28 sticky top-0 z-50">
      <div className="flex items-center gap-6 md:gap-12">
        <Link href="/" className="flex-shrink-0">
          <Image src="/logo.svg" width={150} height={0} alt="Logo" />
        </Link>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium">
                  Áreas
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {tracks.map((track) => (
                      <ListItem
                        key={track.title}
                        title={track.title}
                        href={track.href}
                      >
                        {track.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  href="/projeto-ead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium hover:text-primary transition-colors px-4 py-2"
                >
                  Projeto EAD
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="hidden md:flex md:gap-3">
        <Button primary href="/assinatura">
          Garantir Minha Vaga
        </Button>
        <Button href="http://escola.formacao.dev">
          Área de Membros
        </Button>
      </div>
      <div className="md:hidden">
        <MobileMenu tracks={tracks} />
      </div>
    </header>
  );
}

export default Header;
