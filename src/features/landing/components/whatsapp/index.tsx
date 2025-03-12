"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Groups } from "./Groups";

export function WhatsAppCommunity() {
  return (
    <div className="flex flex-col py-32 md:py-16 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div>
            <h1 className="text-3xl font-semibold text-black dark:text-white">
              Você terá acesso a nossas <br />
              <span className="text-2xl md:text-5xl font-bold mt-1 leading-none">
                Comunidades do <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">WhatsApp</span>
              </span>
            </h1>
          </div>
        }
      >
        <Image
          src={`/linear.webp`}
          alt="hero"
          height={600}
          width={900}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <Groups />
    </div>
  );
}
