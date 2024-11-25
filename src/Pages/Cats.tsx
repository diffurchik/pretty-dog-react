import { useState, useCallback, useRef, useEffect } from "react"
import { getCatPicture } from "../api/getCatsInfo"
import { useAppContext } from "../components/AppContext"
import { Button } from "../components/Button"
import styles from '../components/styles/image.module.css'

export const CatPage = () => {

    const abortControllerRef = useRef<AbortController>()
    const [imageURL, setImageURL] = useState<string | null>(null)
    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const {showedImagesTimes, setShowedImagesTimes} = useAppContext()

    const callImage = useCallback(() => {

        abortControllerRef.current = new AbortController()
        const { signal } = abortControllerRef.current

        const getImage = async () => {
            setIsLoading(true)

            const data = await getCatPicture(signal, setError, setIsLoading) 
            if (data) {
                setImageURL(data.imageURL)
                setShowedImagesTimes(prev => prev + 1)
            } else {
                setError(true)
            }
        }

        getImage()
    }, [])

    useEffect(() => {
        return () => {
            abortControllerRef.current?.abort()
        }

    }, [])

    return <>
        {
            imageURL ? <img src={imageURL} className={styles.image} onClick={callImage} />
                : <Button handleClick={callImage} isDisabled={isLoading} animal="Cat" />
        }
        <div className={styles.numbers}>You've seen {showedImagesTimes} pictures</div>

    </>
}