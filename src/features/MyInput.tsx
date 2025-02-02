import { useField } from "formik";

interface IInputProps {
    name: string,
    [x: string]: string;
}

export const MyInput: React.FC<IInputProps> = ({ ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <input {...props} {...field} />
            {meta.touched && meta.error ? (
                <div className='text-[#e53e3e] mb-[8px]'>{meta.error}</div>
            ) : null}
        </>
    )
};