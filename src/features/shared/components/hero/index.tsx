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
            <h1 className="flex flex-col md:flex-row gap-4 text-white text-5xl md:text-6xl font-extrabold text-center -mt-5">
                <span>Do Zero</span>
                <Gradient className="-mt-4 md:mt-0">ao Mercado.</Gradient>
            </h1>
        </div>
    )
}
