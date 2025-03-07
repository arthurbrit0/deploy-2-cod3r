'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useOutsideClick } from '@/data/hook/useOutsideClick'
import React, { JSX, useEffect, useId, useRef, useState } from 'react'
import DefaultItem from './DefaultItem'
import ActiveItem from './ActiveItem'

export interface ExpandableSubjectsProps {
    data: any[]
    previewElement: JSX.ElementType
    activeElement: JSX.ElementType
}

export default function ExpandableSubjects(props: ExpandableSubjectsProps) {
    const [active, setActive] = useState<(typeof props.data)[number] | boolean | null>(null)
    const id = useId()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setActive(false)
            }
        }

        if (active && typeof active === 'object') {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [active])

    useOutsideClick(ref, () => setActive(null))

    return (
        <>
            <AnimatePresence>
                {active && typeof active === 'object' && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === 'object' ? (
                    <ActiveItem
                        layoutId={id}
                        value={active}
                        ref={ref}
                        onClose={() => setActive(null)}
                    >
                        <props.activeElement layoutId={id} {...active} />
                    </ActiveItem>
                ) : null}
            </AnimatePresence>
            <div className="lg:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {props.data.map((item) => (
                    <DefaultItem key={item.title} value={item} layoutId={id} onSelected={setActive}>
                        <props.previewElement layoutId={id} {...item} />
                    </DefaultItem>
                ))}
            </div>
        </>
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
