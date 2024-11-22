import { useState, useRef, useEffect, useCallback } from "react"
import { getCapybaraInfo } from "../api/getCapybaraInfo"
import { useAppContext } from "../components/AppContext"
import { Button } from "../components/Button"
import styles from '../components/styles/image.module.css'

export const CapybaraPage = () => {

    const abortSignalRef = useRef<AbortController>()
    const { isLoading, setIsLoading, error, setError } = useAppContext()
    const [imageURL, setImageURL] = useState<string>('')

    const handleClick = useCallback(() => {
        abortSignalRef.current = new AbortController()
        const { signal } = abortSignalRef.current

        const getImage = async () => {

            setIsLoading(true)
            const data = await getCapybaraInfo(signal)
            if (data) {
                setImageURL(data.url);
                setIsLoading(false)
            } else { setError(true) }
        }
        getImage()
        
    }, [])


    useEffect(() => {
        return () => { abortSignalRef.current?.abort() }
    }, [])

    return <>{imageURL ? (<img src={imageURL} className={styles.image} onClick={handleClick} />) 
    : <Button handleClick={handleClick} isDisabled={isLoading} animal="Capybara" />}</>

}
