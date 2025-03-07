'use client'
import { motion } from 'framer-motion'
import Subject from '@/data/model/Subject'

export interface ActiveItemProps {
    layoutId: string
    value: Subject
    ref: React.RefObject<HTMLDivElement | null>
    children: React.ReactNode
    onClose: () => void
}

export default function ActiveItem(props: ActiveItemProps) {
    const { layoutId, value, ref, children, onClose } = props
    return (
        <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
                key={`button-${value.id}-${layoutId}`}
                layout
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                    transition: {
                        duration: 0.05,
                    },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={onClose}
            >
                <CloseIcon />
            </motion.button>
            <motion.div
                layoutId={`item-${value.id}-${layoutId}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col gap-4 bg-gray-900 sm:rounded-3xl overflow-hidden p-6"
            >
                {children}
            </motion.div>
        </div>
    )
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    )
}
