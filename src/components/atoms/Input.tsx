interface IProps {
    name?: string,
    type?: string,
    placeholder?: string,
    value?: string,
    className?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: () => void,
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
    autoFocus?: boolean,
    required?: boolean,
    disabled?: boolean,
}

export const Input: React.FC<IProps> = 
({ name, type, placeholder, value, className, required, onChange, onKeyDown }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            className={className}
            required={required}
            onChange={onChange}
            onKeyDown={onKeyDown} />
    )
}