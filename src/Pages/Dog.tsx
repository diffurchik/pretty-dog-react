import { useState, useCallback } from "react"
import { getDogPicture } from "../api/getDogPicture"
import { Button } from "../components/Button"
import styles from '../components/styles/image.module.css'

export const DogPage = () => {

    const [imageURL, setImageURL] = useState<string | null>(null)
    const [error, setError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const callImage = useCallback(() => {

        const getImage = async () => {
            setIsLoading(true)

            try {
                const data = await getDogPicture()
                if (data) {
                    setImageURL(data.url)
                } else {
                    setError(true)
                }
            } catch {
                setError(true)
            } finally {
                setIsLoading(false)
            }
        }

        getImage()
    }, [])

    return <>
        {
            imageURL ? <img src={imageURL} className={styles.image} onClick={callImage} />
                : <Button handleClick={callImage} isDisabled={isLoading} animal="Dog"/>
        }
        </>
}