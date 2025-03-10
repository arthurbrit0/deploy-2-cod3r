"use client";

import React from "react";
import { twm } from "@/utils/tw";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, MoreVertical, Phone, Video, SmilePlus } from "lucide-react";

export function Groups() {
  const features = [
    {
      title: "Interaja com os membros da comunidade",
      description:
        "Converse com outros membros da comunidade e compartilhe suas experiências!",
      skeleton: <SkeletonOne />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-gray-800",
    }
  ];
  return (
    <div className="relative z-20 max-w-7xl mx-auto">
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-lg dark:border-gray-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={twm(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-3xl font-bold md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={twm(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-lgs mx-0 md:text-lg my-2"
      )}
    >
      {children}
    </p>
  );
};

const ChatMessage = ({ message, isUser }: { message: string; isUser: boolean }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`rounded-lg px-4 py-2 max-w-[70%] ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-bl-none'
        }`}
      >
        <p className="text-sm">{message}</p>
        <p className="text-[10px] text-right mt-1 opacity-70">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    </div>
  );
};

export const SkeletonOne = () => {
  const images = [
    "/especialista.jpeg",
    "/ia.png",
    "/arquiteto.jpeg",
    "/fundamentos.jpeg",
    "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=2581&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="relative h-[620px] w-full max-w-5xl mx-auto bg-none rounded-lg shadow-lg overflow-hidden flex">
      <div className="flex-1 flex flex-col space-y-0 p-6 relative">
        <div className="space-y-2 mb-8">
          <h2 className="text-xl font-bold text-white">
            Você terá acesso à nossa comunidade no WhatsApp
          </h2>
          <p className="text-gray-200">Temos grupos separados por área da Formação</p>
        </div>
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-800 bg-gray-500 dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/logo_cod3r.png"
                alt="Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
            </div>
            <div>
              <h3 className="font-semibold text-black dark:text-white">Formação DEV</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">+500 membros</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Video className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <Phone className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <MoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </div>
        </div>
        <div className="p-4 h-[calc(100%-144px)] overflow-y-auto space-y-4 bg-gray-50 dark:bg-[url(/whatsapp-background.jpg)] bg-cover">
          <ChatMessage
            isUser={true}
            message="Olá pessoal! Alguém pode me explicar a diferença entre ? 🤔"
          />
          <ChatMessage
            isUser={false}
            message="Claro! Qual é sua dúvida específica sobre Hooks?"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="flex items-center space-x-2">
            <SmilePlus className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            <input
              type="text"
              placeholder="Digite uma mensagem..."
              className="flex-1 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
            <Send className="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
        </div>
      </div>
      <div className="w-[250px] text-center p-6 flex flex-col space-y-2 bg-gradient-to-t from-purple-400">
        <h2 className="text-xl font-bold text-white">Grupos</h2>
        <p className="text-gray-200">Separados por área da Formação</p>
        <div className="grid grid-cols-2 items-center justify-center mt-4 space-y-6">
          {images.map((image, idx) => (
            <motion.div
              key={"img-" + idx}
              style={{
                rotate: Math.random() * 20 - 10,
              }}
              whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
              whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
              className="rounded-xl p-1 bg-white dark:bg-gray-900 dark:border-gray-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
            >
              <Image
                src={image}
                alt="Logo da área"
                width={80}
                height={80}
                className="rounded-lg h-14 w-14 md:h-24 md:w-24 object-cover flex-shrink-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};