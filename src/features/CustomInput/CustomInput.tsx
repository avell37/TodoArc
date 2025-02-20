import { useField } from "formik";
import { IInput } from "../../models/IInput";

export const CustomInput: React.FC<IInput> = ({ name, ...props }) => {
    const [field, meta] = useField(name);

    return (
        <>
            <input {...props} {...field}
            className={meta.touched && meta.error ? 
            "border-red-500 text-white bg-gray-600 border-2 border-solid p-[10px] rounded-md transition duration-200 hover:bg-gray-600 outline-none" 
            : 
            "text-white bg-gray-600 border-2 border-solid border-gray-500 p-[10px] rounded-md transition duration-200 hover:bg-gray-600 outline-none"} />
            {meta.touched && meta.error ? (
                <div className='text-[#e53e3e] mb-[8px]'>{meta.error}</div>
            ) : null}
        </>
    )
};