import { FC } from "react"

interface ButtonProps {
    type?: "submit",
    className?: string,
    onClick?: () => void,
    children?: React.ReactNode | string
}

export const Button: FC<ButtonProps> = ({ className, type, children, onClick }) => {
    return (
        <button 
            type={type} 
            className={className}
            onClick={onClick}>{children}</button>
    )
}