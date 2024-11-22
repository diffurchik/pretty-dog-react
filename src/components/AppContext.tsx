import { createContext, ReactNode, useContext, useState } from "react"

interface AppContextProps {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    error: boolean
    setError: React.Dispatch<React.SetStateAction<boolean>>
}

interface AppProviderProps {
    children: ReactNode
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)

    return <AppContext.Provider value={{ isLoading, setIsLoading, error, setError }}>
        {children}
    </AppContext.Provider>
}

export const useAppContext = () => {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider')
    }

    return context
}