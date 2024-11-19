type statusType = 'success' | 'error' 

export type DogPictureDTO = {
    message: string
    status: statusType
}

export type DogPicture = {
    url: string
}
