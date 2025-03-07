import { motion } from 'framer-motion'
import { JSX } from 'react'
export default function AtiveSubject({
    id,
    icon: Icon,
    title,
    content,
    video,
}: {
    title: string
    icon: JSX.ElementType
    video: string
    id: string
    content: any
}) {
    return (
        <>
            <div className="flex items-center gap-5">
                <motion.div layoutId={`image-${title}-${id}`}>
                    <Icon
                        stroke={1}
                        size={55}
                        className="
                                rounded-full p-2.5
                                bg-gradient-to-r from-pink-500 to-blue-500
                            "
                        style={{ maxWidth: '55px', maxHeight: '55px' }}
                    />
                </motion.div>

                <motion.h3
                    layoutId={`title-${title}-${id}`}
                    className="text-2xl font-semibold text-white/90"
                >
                    {title}
                </motion.h3>
            </div>

            {video && (
                <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full rounded-xl overflow-hidden min-h-48"
                >
                    <iframe
                        className="aspect-video w-full"
                        src={video}
                        allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            )}

            <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-neutral-600 text-xs md:text-sm lg:text-base h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
            >
                {content}
            </motion.div>
        </>
    )
}
