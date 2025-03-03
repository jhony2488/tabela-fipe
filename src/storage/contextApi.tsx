/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from 'react';
import { resultCarProps } from "../interfaces/resultCar"

const ThemeContext = createContext<{
    car: resultCarProps | null;
    setCar: React.Dispatch<React.SetStateAction<resultCarProps | null>>;
}>({
    car: null,
    setCar: () => { }
});


export const AplicationProvider = ({ children }: { children: React.ReactNode; }) => {

    const [car, setCar] = useState<resultCarProps | null>(null)

    return (
        <ThemeContext.Provider value={{
            car,
            setCar
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error('Trying to acess MyContext out of the Provider');
    }

    return context;
};