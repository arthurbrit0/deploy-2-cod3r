import React, { ReactNode, CSSProperties } from 'react'
import Title, { TitleProps } from '../components/Title'
import Container from './Container'

interface BaseSectionProps extends TitleProps {
  backgroundUrl?: string;
  style?: CSSProperties;
  children: ReactNode;
  containerClassName?: string;
  sectionClassName?: string;
}

export default function BaseSection({
  main,
  secondary,
  backgroundUrl,
  style,
  children,
  containerClassName,
  sectionClassName
}: BaseSectionProps) {
  return (
    <div
      className={sectionClassName}
      style={{
        backgroundImage: backgroundUrl ? `url('${backgroundUrl}')` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...style,
      }}
    >
      <Container className={containerClassName}>
        {main && (
          <div className="mb-12">
            <Title main={main} secondary={secondary} />
          </div>
        )}
        {children}
      </Container>
    </div>
  )
}
