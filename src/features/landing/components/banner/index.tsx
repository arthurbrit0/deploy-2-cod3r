import { IconCheck } from '@tabler/icons-react'
import Button from '../../../shared/components/Button'
import Container from '../../../shared/layouts/Container'
import urls from '@/data/constants/urls'

export interface BannerProps {
    qtyCourses: number
}

export default function Banner(props: BannerProps) {
    return (
        <div
            className="
                flex flex-col items-center lg:items-start gap-10 relative
                bg-gradient-to-r from-[#9D174D] to-[#1E40AF]
            "
        >
            <Container className="flex flex-col py-10 gap-7 relative">
                <div className="flex flex-col items-center gap-1 text-center">
                    <div className="flex gap-2 text-xl sm:text-2xl lg:text-3xl text-white font-medium">
                        Comprando hoje você garante:
                    </div>
                </div>
                <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-8 pb-5">
                    <Item value="50%" label="de desconto">
                        <div className="flex gap-1.5 items-center text-zinc-400">
                            <span className="text-xs">De</span>
                            <span className="line-through">R$ 597,00</span>
                        </div>
                        <div className="flex gap-1.5 items-center">
                            <span className="text-xs">Por</span>
                            <span className="text-green-400 font-bold">R$ 297,00</span>
                        </div>
                    </Item>
                    <Item value={props.qtyCourses.toString()} label="Cursos Atualizados">
                        <div className="flex gap-1.5 items-center">
                            <span>São</span>
                            <span className="text-green-400 font-bold">
                                {props.qtyCourses} cursos
                            </span>
                        </div>
                        <span>pelo preço de 1</span>
                    </Item>
                    <Item value="02" label="Anos de Acesso">
                        <span>O dobro de acesso</span>
                        <div className="flex gap-1.5 items-center">
                            <span>pela</span>
                            <span className="text-green-400 font-bold">metade do preço</span>
                        </div>
                    </Item>
                </div>

                <div className="absolute bottom-0 flex justify-center w-full -mb-5">
                    <Button primary href={urls.checkout}>
                        <IconCheck size={24} />
                        <span>Garantir Minha Vaga</span>
                    </Button>
                </div>
            </Container>
        </div>
    )
}

function Item(props: { value: string; label: string; children: any }) {
    return (
        <div
            className="
                flex flex-col items-center rounded-xl overflow-hidden
                bg-gradient-to-b from-black/70 to-black/15 w-full sm:w-96 lg:w-full
            "
        >
            <div className="flex flex-col items-center p-3.5">
                <span
                    className="
                        text-5xl font-extrabold
                        bg-gradient-to-b from-white to-zinc-400
                        bg-clip-text text-transparent
                    "
                >
                    {props.value}
                </span>
                <span className="text-sm text-zinc-300">{props.label}</span>
            </div>
            <div className="bg-black w-full p-3 text-lg">
                <div className="flex flex-col justify-center items-center text-zinc-300 upprcase font-semibold leading-5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
