'use client'
import { motion } from 'framer-motion'
import Subject from '@/data/model/Subject'
import HoverCard from '../HoverCard'

export interface DefaultItemProps {
    layoutId: string
    value: Subject
    onSelected: (value: Subject) => void
    children: React.ReactNode
}

export default function DefaultItem(props: DefaultItemProps) {
    const { value, layoutId } = props
    return (
        <HoverCard className="max-w-72 cursor-pointer">
            <motion.div
                layoutId={`item-${value.id}-${layoutId}`}
                key={value.title}
                onClick={props.onSelected.bind(null, value)}
                className="w-full"
            >
                <div className="flex flex-col gap-4 bg-gray-950 overflow-hidden rounded-xl w-full h-full max-w-72">
                    {props.children}
                </div>
            </motion.div>
        </HoverCard>
    )
}
