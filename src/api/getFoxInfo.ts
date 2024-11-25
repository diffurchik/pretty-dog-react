import { fetchPictureByTanStack } from "./common-api"
import { AnimalURLs } from "./helper/urls-enum"
import { FoxPicture, FoxPictureDTO } from "./Types"

export const getFoxPicture = async (): Promise<FoxPicture> => {
    const data = await fetchPictureByTanStack(AnimalURLs.FOX) as FoxPictureDTO
    if (data) {
        return { url: data.image }
    } else {
        return { url: '' }
    }
}