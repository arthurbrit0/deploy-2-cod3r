'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import CustomHTLParser from '../../shared/components/CustomHTMLParser'

interface ActiveCourseProps {
    layoutId: string
    id: string
    nome: string
    imagemURL: string
    duracao: number
    descricao?: string
    urlVideoVenda?: string
    qtdeDeAulas: number
    nivel: number
    autores: string[]
    trilha: string
}

export default function ActiveCourse(props: ActiveCourseProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-5">
            <motion.div
                className="flex items-center w-full"
                layoutId={`image-active-course-${props.id}-${props.layoutId}`}
            >
                <Image src={props.imagemURL} alt="logo curso" height={250} width={100} />
                <motion.h3
                    layoutId={`active-nome-${props.nome}-${props.layoutId}`}
                    className="text-3xl font-semibold text-white/90"
                >
                    {props.nome}
                </motion.h3>
            </motion.div>

            <motion.div
                className="flex flex-col items-center w-full h-[calc(100vh-175px)] md:h-auto md:max-h-[40rem] overflow-scroll no-scrollbar"
                layoutId={`content-active-course-${props.id}-${props.layoutId}`}
            >
                {props?.urlVideoVenda && (
                    <iframe
                        className="aspect-video w-full mb-1"
                        src={props.urlVideoVenda}
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}
                <CustomHTLParser html={props.descricao ?? ''} />
            </motion.div>
        </div>
    )
}
