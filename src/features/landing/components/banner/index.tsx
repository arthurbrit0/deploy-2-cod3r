import { IconCheck } from '@tabler/icons-react'
import Button from '../../../shared/components/Button'
import Container from '../../../shared/layouts/Container'
import { BackgroundBeams } from '@/components/ui/background-beams'
export interface BannerProps {
    qtyCourses: number
}

export default function Banner() {
    return (
        <div
            className="
                flex flex-col items-center lg:items-start gap-10 relative
            "
        >
            <BackgroundBeams />
            <Container className="flex flex-col py-8 gap-7 relative">
                <div className="flex flex-col items-center gap-1 text-center">
                    <div className="flex gap-2 text-xl font-bold sm:text-2xl lg:text-3xl text-white">
                        Comprando hoje você garante:
                    </div>
                </div>
                <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-8 pb-5">
                    <Item value="63%" label="de desconto">
                        <div className="flex gap-1.5 items-center">
                            <span className="text-lg">Descontos de até</span>
                            <span className="text-green-400 font-bold">63%</span>
                        </div>
                    </Item>
                    <Item value={"3"} label="Formações">
                        <div className="flex gap-1.5 items-center">
                            <span>São</span>
                            <span className="text-green-400 font-bold">
                                3 Formações
                            </span>
                        </div>
                        <span>pelo preço de 1</span>
                    </Item>
                    <Item value="Mentorias" label="exclusivas ao vivo">
                        <span className="text-center">Participe de mentorias exclusivas ao vivo <span className="text-green-400 font-bold">em grupo</span></span>
                    </Item>
                </div>

                <div className="absolute bottom-0 flex justify-center w-full -mb-5">
                    <Button primary href="/assinatura" className="hover:bg-emerald-300 hover:scale-105 transition-all">
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
                <span className="text-sm text-zinc-300 uppercase">{props.label}</span>
            </div>
            <div className="bg-black w-full p-3 text-lg min-h-[7vh]">
                <div className="flex flex-col justify-center items-center text-zinc-300 font-semibold leading-5">
                    {props.children}
                </div>
            </div>
        </div>
    )
}
