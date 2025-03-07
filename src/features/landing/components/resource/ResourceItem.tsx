export interface ResourceItemProps {
    title: string
    icon: React.ElementType
}

export default function ResourceItem(props: ResourceItemProps) {
    return (
        <div className="flex flex-col gap-4 bg-gray-950 border border-gray-900 p-6 rounded-xl w-full min-w-72 max-w-96">
            <props.icon stroke={1} size={40} className="text-emerald-400" />
            <h3 className="text-lg font-semibold text-white/90">{props.title}</h3>
        </div>
    )
}
