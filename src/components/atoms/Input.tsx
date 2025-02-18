interface IProps {
    name?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    required?: boolean,
    disabled?: boolean,
}

export const Input: React.FC<IProps> = 
({ name, type, placeholder, value, className, required, onChange }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className={className}
            required={required}
            onChange={onChange} />
    )
}