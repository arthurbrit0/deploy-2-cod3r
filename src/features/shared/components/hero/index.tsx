import Gradient from '../Gradient'

export interface HeroProps {
    slogan: string
}

export default function Hero(props: HeroProps) {
    return (
        <div className="flex flex-col justify-center items-center gap-7 h-40">
            <h2 className="text-lg w-72 md:w-full md:text-xl text-zinc-400 text-center">
                {props.slogan}
            </h2>
            <h1 className="text-white text-5xl md:text-6xl font-extrabold text-center -mt-5 max-w-5xl">
                <span>A Formação indispensável para </span>
                <Gradient className="inline">qualquer Desenvolvedor</Gradient>
            </h1>
        </div>
    )
}