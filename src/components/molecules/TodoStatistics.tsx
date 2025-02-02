import { P } from "../atoms/P"

export const TodoStatistics: React.FC = () => {

    return (
        <div className='max-w-[866px] w-full flex justify-between items-center mb-[25px]'>
            <P text={
                <span className="flex min-w-[200px]">
                    Количество задач <span className="flex items-center justify-center max-w-[25px] w-full h-[25px] bg-gray-400 rounded-[50%] text-white text-[14px] ml-[10px]">1</span>
                </span>
            }
                className="text-blue-400 font-bold" />
            <P text={
                <span className="flex items-center">
                    Выполнено <span className="flex items-center justify-center min-w-[55px] h-[25px] bg-gray-400 rounded-xl text-white text-[14px] ml-[10px]">1/5</span>
                </span>
            }
                className="text-purple-400 font-bold" />
        </div>
    )
}