import * as React from "react"
import { createContext, ReactNode, useContext, useState } from "react"

interface AppContextProps {
    isLoading: boolean
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    error: boolean
    setError: React.Dispatch<React.SetStateAction<boolean>>
    showedImagesTimes: number
    setShowedImagesTimes: React.Dispatch<React.SetStateAction<number>>
}

interface AppProviderProps {
    children: ReactNode
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [showedImagesTimes, setShowedImagesTimes] = useState<number>(0)

    return <AppContext.Provider value={{ isLoading, setIsLoading, error, setError, showedImagesTimes, setShowedImagesTimes }}>
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