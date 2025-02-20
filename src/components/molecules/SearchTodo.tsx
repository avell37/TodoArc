import { useState, FC } from "react";
import Select, {SingleValue, StylesConfig} from 'react-select';
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { selectTodosFilter, setSearchQuery } from "../../store/reducers/userTodosSlice/userTodosSlice";
import { Input } from "../atoms/Input"
import { SearchIcon } from "../../assets/SearchIcon"

interface OptionType {
    value: string,
    label: string
}

export const SearchTodo: FC = () => {

    const dispatch = useAppDispatch();
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);
    const [searchValue, setSearchValue] = useState<string>('');

    const handleFiltersChange = (newValue: SingleValue<OptionType | null>) => {
        if (newValue) {
            dispatch(selectTodosFilter(newValue.value))
            setSelectedOption(newValue);
        } else {
            dispatch(selectTodosFilter("nothing"));
            setSelectedOption(null);
        }
    }
    
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        dispatch(setSearchQuery(e.target.value));
    }

    const customStyles: StylesConfig<OptionType, false> = {
        control: (base) => ({
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
        menu: (provided) => ({
            ...provided,
            backgroundColor: "#333333"
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#808080" : "#333333",
            color: "#fff",
        }),
        singleValue: (provided) => ({
            ...provided,
            color: "white",
        }),
    }

    const filterOptions: OptionType[] = [
        {value: "nothing", label: "Без фильтра"},
        {value: 'completed', label: 'Сделанные'},
        {value: 'title', label: 'По заголовку'},
        {value: 'date', label: 'По дате'}
    ]

    return (
        <div className="flex justify-center items-center max-w-[900px] w-full gap-[10px] max-[300px]:flex-col max-[300px]:mt-[30px]">
            <div className="relative max-w-[700px] w-full max-[300px]:max-w-[165px]">
                <Input
                    name="search"
                    type="text"
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Поиск"
                    className="max-w-[700px] w-full text-white bg-gray-400 p-[10px] rounded-md transition duration-200 hover:bg-gray-500 max-[300px]:max-w-[165px]" />
                <SearchIcon className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            </div>
            <Select
                styles={customStyles}
                defaultValue={selectedOption}
                placeholder="Фильтры"
                onChange={handleFiltersChange}
                options={filterOptions} />
        </div>
    )
}