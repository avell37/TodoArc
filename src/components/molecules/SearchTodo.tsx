import { Input } from "../atoms/Input"
import { SearchIcon } from "../../assets/SearchIcon"
import Select from 'react-select';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { selectTodosFilter } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { useState } from "react";

interface OptionType {
    value: string,
    label: string
}

export const SearchTodo = () => {

    const dispatch = useAppDispatch();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleChange = (newValue: SingleValue<OptionType | null>) => {
        dispatch(selectTodosFilter(newValue.value))
        setSelectedOption(newValue.label);
    }

    const customStyles = {
        control: (base: any) => ({
            ...base,
            backgroundColor: "#333333",
            borderColor: "none",
            borderWidth: "none",
            width: "165px",
            height: "44px",
            "&:hover": {
                backgroundColor: "#262626"
            }
        }),
        menu: (provided: any) => ({
            ...provided,
            backgroundColor: "#333333"
        }),
        option: (provided: any, state: any) => ({
            ...provided,
            backgroundColor: "#333333",
            color: "#fff",
            "&:hover": {
                backgroundColor: "#808080"
            }
        }),
        singleValue: (provided: any) => ({
            ...provided,
            color: "white",
        }),
    }

    const filterOptions = [
        {value: "nothing", label: "Без фильтра"},
        {value: 'likes', label: 'По лайкам'},
        {value: 'title', label: 'По заголовку'},
        {value: 'date', label: 'По дате'}
    ]

    return (
        <div className="flex justify-center items-center max-w-[900px] w-full gap-[10px]">
            <div className="relative max-w-[700px] w-full">
                <Input
                    name="login"
                    type="text"
                    placeholder="Поиск"
                    className="max-w-[700px] w-full text-white bg-gray-400 p-[10px] rounded-md transition duration-200 hover:bg-gray-500" />
                <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
            <Select
                styles={customStyles}
                defaultValue={selectedOption}
                placeholder="Фильтры"
                onChange={handleChange}
                options={filterOptions} />
        </div>
    )
}