import { twm } from '@/utils/tw'

export interface VideoProps {
    url: string
    className?: string
}

export default function Video(props: VideoProps) {
    return (
        <div
            className={twm(
                'flex flex-col justify-center items-center gap-12',
                'bg-no-repeat h-[400px] md:h-[600px]',
                props.className,
            )}
        >
            <div className="w-full sm:w-7/8 lg:w-full xl:w-[750px] overflow-hidden rounded-lg mt-4 md:mt-0 p-4 md:p-0">
                <iframe
                    className="aspect-video w-full"
                    src={props.url}
                    allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
            {/* <Button primary href={urls.checkout}>
                <IconCheck size={24} />
                <span>Garantir Minha Vaga</span>
            </Button> */}
        </div>
    )
}
