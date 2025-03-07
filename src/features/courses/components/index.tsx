'use client'

import { fromSeconds } from '@/utils/duration'
import Title from '../../shared/components/Title'
import CourseItem from './CourseItem'
import ActiveCourse from './ActiveCourse'
import ExpandableSubjects from '../../shared/components/expandable/ExpandableSubjects'
import Button from '../../shared/components/Button'
import urls from '@/data/constants/urls'
import { IconCheck } from '@tabler/icons-react'

export interface CoursesProps {
    values: {
        id: string
        nome: string
        imagemURL: string
        duracao: number
        qtdeDeAulas: number
        nivel: number
        autores: string[]
        trilha: string
    }[]
}

export default function Courses(props: CoursesProps) {
    const qtyOfLearningPaths = props.values.reduce((acc: string[], cur) => {
        if (!acc.includes(cur.trilha)) {
            acc.push(cur.trilha)
        }
        return acc
    }, []).length

    return (
        <div className="flex flex-col items-center lg:items-start gap-10">
            <Title
                main={[
                    {
                        value: 'Currículo Completo',
                        gradient: true,
                    },
                    {
                        value: 'para DEV Fullstack',
                    },
                ]}
                secondary="Sequência perfeita de cursos que vão te transformar em um desenvolvedor fullstack"
            />

            <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-6">
                <div className="flex flex-col items-center text-center">
                    <span className="text-[#EC499A] font-bold text-3xl">
                        {qtyOfLearningPaths} Trilhas
                    </span>
                    <span className="text-zinc-300 w-52">Especializadas por assunto</span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-[#DD5BB9] font-bold text-3xl">
                        {props.values.length} Cursos
                    </span>
                    <span className="text-zinc-300 w-56">Independentes e progressivos</span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-[#CF6FD9] font-bold text-3xl">
                        {props.values.reduce((acc, cur) => acc + (cur.qtdeDeAulas ?? 0), 0)} Aulas
                    </span>
                    <span className="text-zinc-300 w-56">
                        Nas principais tecnologias do mercado
                    </span>
                </div>
                <div className="flex flex-col items-center text-center">
                    <span className="text-[#C083FB] font-bold text-3xl">
                        {fromSeconds(
                            props.values.reduce((acc, cur) => acc + (cur.duracao ?? 0), 0),
                        )}{' '}
                    </span>
                    <span className="text-zinc-300 w-56">
                        de vídeos com conteúdo prático e didático
                    </span>
                </div>
            </div>

            <div className="flex flex-col w-full items-center lg:items-start gap-14">
                <ExpandableSubjects
                    data={props.values}
                    previewElement={CourseItem}
                    activeElement={ActiveCourse}
                />

                <div className="flex justify-center w-full">
                    <Button primary={true} href={urls.checkout}>
                        <IconCheck size={24} />
                        <span>Garantir Minha Vaga</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
