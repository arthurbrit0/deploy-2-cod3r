import {
    IconCertificate,
    IconChecks,
    IconClock,
    IconFileCheck,
    IconHelp,
    IconProgressCheck,
    IconTimelineEvent,
    IconUsers,
} from '@tabler/icons-react'
import Title from '../../../shared/components/Title'
import ResourceItem from './ResourceItem'

export default function Resource() {
    return (
        <div className="flex flex-col items-center lg:items-start py-12 gap-14">
            <Title
                main={[
                    {
                        value: 'Experiência Completa de Aprendizado',
                    },
                ]}
                secondary="Aprenda com conteúdos atualizados, aulas sequenciadas e suporte especializado"
            />

            <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <ResourceItem title="Conteúdo Atualizado" icon={IconChecks} />
                <ResourceItem title="Aulas Sequenciadas" icon={IconTimelineEvent} />
                <ResourceItem title="Progresso Completo" icon={IconProgressCheck} />
                <ResourceItem title="Certificados" icon={IconCertificate} />
                <ResourceItem title="Desafios" icon={IconFileCheck} />
                <ResourceItem title="Fórum" icon={IconUsers} />
                <ResourceItem title="Suporte Especializado" icon={IconHelp} />
                <ResourceItem title="2 anos de Acesso" icon={IconClock} />
            </div>
        </div>
    )
}
