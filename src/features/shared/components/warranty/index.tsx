import { twm } from '@/utils/tw'
import Gradient from '../Gradient'
import Image from 'next/image'
import Button from '../Button'
import { IconCheck } from '@tabler/icons-react'
import urls from '@/data/constants/urls'

export interface WarrantyProps {
    className?: string
}

export default function Warranty(props: WarrantyProps) {
    return (
        <div className="flex flex-col gap-7">
            <div
                className={twm(
                    'flex flex-col lg:flex-row lg:justify-between items-center gap-5',
                    'bg-zinc-900 rounded-2xl p-8 md:p-12',
                    props.className,
                )}
            >
                <div className="flex-1 flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
                    <Gradient className="text-2xl sm:text-4xl font-bold ">
                        Garantia de 15 Dias
                    </Gradient>
                    <p className="text-zinc-400 text-base md:text-lg">
                        Adquirindo a nossa Formação DEV Express, você tem 15 dias para avaliar. Se
                        por algum motivo você achar que este material não é pra você, basta nos
                        enviar uma mensagem que devolveremos integralmente seu dinheiro, e sem
                        questionamentos.
                    </p>
                </div>
                <Image src="/warranty.png" width={300} height={0} alt="Garantia" />
            </div>
            <Button primary className="self-center" href={urls.checkout}>
                <IconCheck size={24} />
                <span>Garantir Minha Vaga</span>
            </Button>
        </div>
    )
}
