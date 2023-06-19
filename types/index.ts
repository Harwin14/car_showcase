import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    btnType?: "button" | "submit";
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    textStyles?: string;
    rightIcon?: string;
    isDisable?: boolean;
}
export interface SearchManufacturerProps {
    selected: string;
    setSelected: (selected: string) => void;
}
export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}
export interface SearchBarProps {
    setManufacturer: (manufacturer: string) => void;
    setModel: (model: string) => void;
  }
export interface FilterProps {
    manufacturer: string;
    year: number;
    fuel: string;
    limit: number;
    model: string;
}
export interface OptionProps {
    title: string;
    value: string;
}
export interface CustomFilterProps<T> {
    options: OptionProps[];
    setFilter: (selected: T) => void
}
export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit:number) => void
}
