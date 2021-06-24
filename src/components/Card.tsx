import React, { FC } from 'react'

export enum CardVariant {
    outline = "outline",
    primary = "primar"
}

interface CardProps {
    width: string
    height: string
    children?: React.ReactChild | React.ReactNode
    variant: CardVariant
    onClick?: () => void
}

const Card: FC<CardProps> = ({
    width,
    height,
    variant,
    children,
    onClick
}) => {
    return (
        <div style={{ 
            width, height, 
            border: variant === CardVariant.outline ? '1px solid black' : 'none', 
            background: variant === CardVariant.primary ? 'lightgray' : '', 
            }}
            onClick={onClick}
            >
            {children}
        </div>
    )
}

export default Card
