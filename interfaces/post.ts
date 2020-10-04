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
    comments: Comment[]
}

export interface PostsState {
    items: Post[]
    loadingState: LoadingState
}

export interface Comment {
    id:number
    postId:number
    body:string
}
