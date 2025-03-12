import HoverCard from '@/features/shared/components/HoverCard'

interface VideoProps {
    url: string
}
export default function TestimonyItem({ url }: VideoProps) {
    return (
        <HoverCard className="p-[2px]">
            <div
                className={`
                rounded-xl overflow-hidden  w-full
            `}
            >
                <iframe
                    className="aspect-video w-full h-full"
                    id="panda-76a6f5f9-39e9-40b6-acce-e36891d4df28"
                    src={url}
                    allow="accelerometer;gyroscope;encrypted-media;picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </HoverCard>
    )
}
