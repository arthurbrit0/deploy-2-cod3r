import { ReactNode, CSSProperties } from 'react'

interface SectionProps {
  children: ReactNode
  backgroundUrl?: string
  className?: string
  style?: CSSProperties
}

export default function Section({
  children,
  backgroundUrl,
  className,
  style,
}: SectionProps) {
  return (
    <div
      className={className}
      style={{
        backgroundImage: backgroundUrl ? `url('${backgroundUrl}')` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
