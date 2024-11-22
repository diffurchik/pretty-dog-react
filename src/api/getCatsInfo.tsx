import { CatInfo, CatInfoDTO } from "./Types";

async function fetchCatPicture(signal: AbortSignal): Promise<CatInfoDTO[]> {
    const response = await fetch('https://api.thecatapi.com/v1/images/search', { signal })
    if (!response.ok) {
        throw new Error()
    }
    console.log(`Success: ${response.status}`);
    const data: CatInfoDTO[] = await response.json()
    return data
}

export async function getCatPicture(
    signal: AbortSignal,
    setError: (parameter: boolean) => void,
    setIsLoading: (parameter: boolean) => void,
    retries: number = 5, delay: number = 1000
): Promise<CatInfo>{

    try {
        const data = await fetchCatPicture(signal)
        if (data) {
            return { imageURL: data[0].url }
        } else {
            throw new Error('Data is empty')
        }
    } catch (error) {
        setError(true)
        console.log(`Fetch failed with error: ${error}. Waiting ${delay} ms before retrying.`)
        if (retries > 0 && !signal.aborted ){
            await new Promise(resolve => setTimeout(resolve, delay))
            return getCatPicture(signal, setError, setIsLoading, retries - 1, delay * 2)
        } else {
            throw new Error('All retries failed')
        }
    } finally {
        setIsLoading(true)
    }
}


