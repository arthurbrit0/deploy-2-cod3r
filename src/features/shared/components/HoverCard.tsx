import { twm } from '@/utils/tw'

export interface HoverCardProps {
    children: React.ReactNode
    className?: string
}

export default function HoverCard(props: HoverCardProps) {
    return (
        <div
            className={twm(
                'flex p-0.5 bg-gray-900 border-gray-700 rounded-xl',
                'hover:bg-gradient-to-r from-pink-400/40 to-blue-400/40',
                'transition duration-300 ease-in-out transform hover:scale-105',
                props.className,
            )}
        >
            {props.children}
        </div>
    )
}
