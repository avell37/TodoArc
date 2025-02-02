import { ClipboardIcon } from "../../assets/ClipboardIcon"

export const Clipboard = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-[15px] 
        pt-[84px] pb-[84px] border-t-2 rounded-t-xl border-gray-500 max-w-[880px] w-full'>
            <ClipboardIcon
                width={75}
                height={75}
                fill="#262626" />
            <p className="text-gray-300 font-bold">Пока что ваш список пуст...</p>
            <p className="text-gray-300 font-medium">Введите вашу цель, а затем добавьте ее, тогда она отобразится тут :3</p>
        </div>
    )
}