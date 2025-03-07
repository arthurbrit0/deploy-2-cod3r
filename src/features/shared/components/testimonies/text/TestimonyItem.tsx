import HoverCard from '@/features/shared/components/HoverCard'

export interface TestimonyItemProps {
    name: string
    quote: string
}

export default function TestimonyItem(props: TestimonyItemProps) {
    return (
        <HoverCard className="flex-1 md:w-full max-w-sm md:max-w-4xl lg:max-w-96 mx-auto">
            <div className="flex flex-col gap-5 bg-gray-950 rounded-xl w-full overflow-hidden p-7 select-none">
                <div className="flex-1 text-start">{props.quote}</div>
                <div className="self-end font-bold">{props.name}</div>
            </div>
        </HoverCard>
    )
}
