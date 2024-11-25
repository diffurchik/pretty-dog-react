import { useQuery } from "@tanstack/react-query"
import { useCallback, useState } from "react"
import { getFoxPicture } from "../api/getFoxInfo"
import { Button } from "../components/Button"
import styles from '../components/styles/image.module.css'

export const FoxPage: React.FC = () => {

    const { data, error, isFetching, refetch } = useQuery({
        queryKey: ['FoxCatch'],
        queryFn: getFoxPicture,
        retryDelay: (attemptIndex) => attemptIndex * 2
    })

    const handleClick = useCallback(() => {
        refetch();
    }, [])

    return <>
        {data?.url ? <img src={data.url} className={styles.image} onClick={handleClick} />
            : <Button handleClick={handleClick} isDisabled={isFetching} animal='Fox' />}
    </>
}