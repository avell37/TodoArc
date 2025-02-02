interface Button {
    text?: string,
    type?: "submit",
    className?: string,
    onClick?: () => void;
}

export const Button: React.FC<Button> = ({ text, className, type }) => {
    return (
        <button type={type} className={className}>{text}</button>
    )
}