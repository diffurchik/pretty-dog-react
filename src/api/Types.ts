type statusType = 'success' | 'error'

export type DogPictureDTO = {
    message: string
    status: statusType
}

export type DogPicture = {
    url: string
}


export type CatInfoDTO = {
    id: string
    url: string
    width: number
    height: number
}

export type CatInfo = {
    imageURL: string
}

export type CapybaraDTO = {

    success: boolean
    data: {
        url: string
        index: number,
        width: number,
        height: number,
        alt: string
    }
}

export type CapybaraPicture = {
    url: string
}