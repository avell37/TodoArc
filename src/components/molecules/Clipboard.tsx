import { FC } from "react"
import { ClipboardIcon } from "../../assets/ClipboardIcon"
import { P } from "../atoms/P"

export const Clipboard: FC = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-[15px] 
        pt-[84px] pb-[84px] border-t-2 rounded-t-xl border-gray-500 max-w-[880px] w-full'>
            <ClipboardIcon
                width="75px"
                height="75px"
                fill="#262626" />
            <P className="text-gray-300 font-bold" 
                text="Пока что ваш список пуст..." />
            <P className="text-gray-300 font-medium" 
                text="Введите вашу цель, а затем добавьте ее, тогда она отобразится тут :3" />
        </div>
    )
}