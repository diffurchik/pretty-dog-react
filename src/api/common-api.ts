export async function fetchPicture<T>(url: string, signal: AbortSignal, retries: number = 5, delay: number = 1000): Promise<T | T[]> {
    try {
        const response = await fetch(url, { signal, mode: 'cors'})
        if (!response) {
            throw new Error()
        }
        console.log(`Success: ${response.status}`);
        const data: T | T[] = await response.json()
        if (!data) {
            throw new Error()
        }
        return data

    } catch (error) {
        console.log(`Fetch failed with error: ${error}. Waiting ${delay} ms before retrying.`)
        if (retries > 0 && !signal.aborted) {
            await new Promise(resolve => setTimeout(resolve, delay))
            return fetchPicture(url, signal, retries - 1, delay * 2)
        } else {
            throw new Error('All retries failed')
        }
    }
}