import { DogPicture, DogPictureDTO } from "./Types";

async function fetchDogPicture(): Promise<DogPictureDTO>{
    const responce = await fetch('https://dog.ceo/api/breeds/image/random')
    if(!responce.ok){
        throw new Error(`Failed to fetch: ${responce.statusText}`)
    }
    
    const data: DogPictureDTO = await responce.json()
    return data
}

export async function getDogPicture(): Promise<DogPicture> {
    const data =  await fetchDogPicture()
    
    return {url: data.message}
}