import { twm } from '@/utils/tw'
import React from 'react'

export interface ContainerProps {
    children: React.ReactNode
    className?: string
}

export default function Container(props: ContainerProps) {
    return (
        <div className={twm('w-full max-w-7xl mx-auto px-4', props.className)}>
            {props.children}
        </div>
    )
}
