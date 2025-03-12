import { IconArrowRight } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import { JSX } from 'react'
export default function DefaultSubjetctItem({
    icon: Icon,
    title,
    description,
    id,
}: {
    icon: JSX.ElementType
    title: string
    description: string
    id: string
}) {
    return (
        <div className="p-6 h-[18.75rem] flex flex-col justify-between">
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
            <motion.p
                layoutId={`description-${description}-${id}`}
                className="text-sm font-medium text-zinc-300/70"
            >
                {description}
            </motion.p>
            <IconArrowRight stroke={1} size={40} className="text-emerald-400" />
        </div>
    )
}
