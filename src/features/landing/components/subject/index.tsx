'use client'
import { IconCheck } from '@tabler/icons-react'
import ActiveSubject from './ActiveSubject'
import Button from '../../../shared/components/Button'
import DefaultSubjetctItem from './DefaultSubjectItem'
import ExpandableSubjects from '../../../shared/components/expandable/ExpandableSubjects'
import subjects from '@/data/constants/subjects'
import Title from '../../../shared/components/Title'
import urls from '@/data/constants/urls'

export default function Subject() {
    return (
        <div className="flex flex-col items-center lg:items-start gap-14">
            <Title
                main={[{ value: 'Tudo que' }, { value: 'você precisa', gradient: true }]}
                secondary="Currículo completo para você se tornar um desenvolvedor fullstack"
            />

            <ExpandableSubjects
                data={subjects}
                previewElement={DefaultSubjetctItem}
                activeElement={ActiveSubject}
            />

            <div className="flex justify-center w-full">
                <Button primary={true} href={urls.checkout}>
                    <IconCheck size={24} />
                    <span>Garantir Minha Vaga</span>
                </Button>
            </div>
        </div>
    )
}
