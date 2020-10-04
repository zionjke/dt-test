export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}

export interface Post {
    id:number
    title:string
    body:string
}

export interface PostsState {
    items: Post[]
    loadingState: LoadingState
}
