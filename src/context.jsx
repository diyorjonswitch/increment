import { useState, createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [count, setCount] = useState(0)

    return (
        <AppContext.Provider value={{ count, setCount }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }
