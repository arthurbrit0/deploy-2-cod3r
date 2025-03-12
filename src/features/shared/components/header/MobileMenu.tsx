"use client";

import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { twm } from "@/utils/tw";
import ListItem from "./ListItem";

function HamburgerIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

interface Track {
  title: string;
  href: string;
  description: string;
}

interface MobileMenuProps {
  tracks: Track[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ tracks }) => {
  const [open, setOpen] = React.useState(false);
  const [areasOpen, setAreasOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white"
        aria-label="Abrir menu"
      >
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </button>
      {open && (
        <div
          className={twm(
            "absolute top-28 left-0 w-full bg-black z-50 p-6",
            "flex flex-col gap-4 items-center"
          )}
        >
          <NavigationMenu>
            <NavigationMenuList className="flex flex-col gap-4 items-center text-center w-full">
              <NavigationMenuItem>
                <Link
                  href="/cod3r"
                  className="text-md font-medium hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setOpen(false)}
                >
                  Sobre nós
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="https://blog.formacao.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setOpen(false)}
                >
                  Blog
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="w-full flex flex-col items-center">
                <button
                  onClick={() => setAreasOpen(!areasOpen)}
                  className="text-md font-medium px-4 py-2 hover:text-primary transition-colors flex items-center gap-1"
                >
                  Áreas
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                      areasOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div
                  className={twm(
                    "bg-black w-full rounded-md shadow-md text-center overflow-hidden transition-all duration-300 ease-in-out",
                    areasOpen ? "py-4 opacity-100" : "max-h-0 py-0 opacity-0"
                  )}
                >
                  <ul className="flex flex-col gap-2 items-center justify-center">
                    {tracks.map((track) => (
                      <ListItem
                        key={track.title}
                        title={track.title}
                        href={track.href}
                        onClick={() => {
                          // Fecha tudo ao clicar em uma das trilhas
                          setAreasOpen(false);
                          setOpen(false);
                        }}
                      >
                        {track.description}
                      </ListItem>
                    ))}
                  </ul>
                </div>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link
                  href="/projeto-ead"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-medium hover:text-primary transition-colors px-4 py-2"
                  onClick={() => setOpen(false)}
                >
                  Projeto EAD
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
