import { fetchPicture } from "./common-api";
import { AnimalURLs } from "./helper/urls-enum";
import { CapybaraDTO, CapybaraPicture } from "./Types";

export const getCapybaraInfo = async (signal: AbortSignal): Promise<CapybaraPicture> => {

    const dataCapybaraFetched = await fetchPicture<CapybaraDTO>(AnimalURLs.CAPYBARA, signal) as CapybaraDTO 
    if (dataCapybaraFetched) {
        return { url: dataCapybaraFetched.data.url }
    } else {
        return { url: '' }
    }

}