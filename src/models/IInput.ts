export interface IInput {
    name?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    className?: string;
    email?: string;
    login?: string;
    password?: string;
    repeatPassword?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};