interface PProps {
    text?: React.ReactNode,
    className?: string,
}

export const P: React.FC<PProps> = ({ text, className }) => {
    return (
        <p className={className}>{text}</p>
    )
}