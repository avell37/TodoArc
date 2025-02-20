import { FC } from "react"

interface PProps {
    text?: React.ReactNode,
    className?: string,
}

export const P: FC<PProps> = ({ text, className }) => {
    return (
        <p className={className}>{text}</p>
    )
}