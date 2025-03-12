import { twm } from '@/utils/tw'

interface Text {
    value: string
    gradient?: boolean
}

export interface TitleProps {
    main: Text[]
    secondary?: string
}

export default function Title(props: TitleProps) {
    return (
        <div className="flex flex-col gap-3 items-center text-center lg:text-left lg:items-start">
            <h2 className="flex flex-col md:flex-row leading-7 gap-3 text-3xl md:text-4xl font-bold text-center max-w-96 md:max-w-full">
                {props.main.map((text, index) => (
                    <span
                        key={index}
                        className={twm(
                            'transition-all duration-300',
                            text.gradient
                                ? 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-400'
                                : ''
                        )}
                    >
                        {text.value}
                    </span>
                ))}
            </h2>
            {props.secondary && (
                <h3 className="text-base md:text-lg text-gray-400 max-w-96 md:max-w-full">
                    {props.secondary}
                </h3>
            )}
        </div>
    )
}
