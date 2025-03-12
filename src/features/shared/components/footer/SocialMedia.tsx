export interface SocialMediaProps {
    icon: React.ElementType
    link: string
}

export default function SocialMedia(props: SocialMediaProps) {
    return (
        <div className="transition-all hover:scale-110">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <props.icon stroke={1} size={30} className="text-emerald-400" />
            </a>
        </div>
    )
}
