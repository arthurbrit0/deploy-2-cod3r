import { twm } from '@/utils/tw'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean
    href?: string
    target?: HTMLAttributeAnchorTarget
}

export default function Button(props: ButtonProps) {
    const classes = twm(
        'flex justify-center items-center text-white gap-3',
        'rounded-full px-6 py-2.5 bg-zinc-800 font-semibold',
        props.primary && 'bg-emerald-400 text-zinc-900',
        props.className,
    )
    if (props.href) {   
        return (
            <Link href={props.href} className={classes} target={props.target}>
                {props.children}
            </Link>
        )
    }
    return <button {...props} className={classes} />
}
