'use client'
import { fromSeconds } from '@/utils/duration'
import { motion } from 'framer-motion'
import Image from 'next/image'

export interface CourseItemProps {
    layoutId: string
    id: string
    nome: string
    imagemURL: string
    duracao: number
    qtdeDeAulas: number
    nivel: number
    autores: string[]
    trilha: string
}

export default function CourseItem(props: CourseItemProps) {
    return (
        <div className="h-[18.75rem] flex flex-col justify-between">
            <motion.div
                className="flex flex-col w-full relative h-40"
                layoutId={`image-${props.id}-${props.layoutId}`}
            >
                <Image src={props.imagemURL} alt="logo curso" fill className="object-cover" />
            </motion.div>
            <div className="text-center">
                <motion.h3
                    layoutId={`title-${props.nome}-${props.id}`}
                    className="text-xl font-semibold text-white/90"
                >
                    {props.nome}
                </motion.h3>
                <motion.h3 className="text-white/60 font-semibold">{props.trilha}</motion.h3>
            </div>
            <div className="flex-1 h-full"></div>
            <div className="px-6 py-3 flex justify-between bg-gray-900">
                <div className="flex flex-col text-center">
                    {props.qtdeDeAulas > 2 && (
                        <>
                            <span className="text-sm font-medium text-zinc-300/70">
                                {props.qtdeDeAulas}
                            </span>
                            <span className="text-sm font-medium text-zinc-300/70">aulas</span>
                        </>
                    )}
                </div>
                <div className="flex flex-col text-center">
                    {props.qtdeDeAulas > 1 ? (
                        <>
                            <span className="text-sm font-medium text-zinc-300/70">
                                {fromSeconds(props.duracao ?? 0)}
                            </span>
                            <span className="text-sm font-medium text-zinc-300/70">de duração</span>
                        </>
                    ) : (
                        <div className="flex flex-col items-end">
                            <span className="text-sm font-medium text-zinc-300/70">Liberado</span>
                            <span className="text-sm font-medium text-zinc-300/70">em breve</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
