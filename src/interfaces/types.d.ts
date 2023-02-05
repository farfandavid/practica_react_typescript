export interface Sub {
    nick: string
    subMonths: number
    description?: string
    avatar: string
}

export type SubsResponseFromApi = Array<{
    nick: string
    months: number
    profileUrl: string
    description: string
}>