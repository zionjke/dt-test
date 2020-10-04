import {Action} from "redux";
import {LoadingState, Post, PostsState} from "../../interfaces/post";

export enum PostsActionType {
    SET_POSTS = 'posts/SET_POSTS',
    FETCH_POSTS = 'posts/FETCH_POSTS',
    SET_LOADING_STATE = 'posts/SET_LOADING_STATE',
    ADD_POST = '/posts/ADD_POST',
    DELETE_POST = 'posts/DELETE_POST',
    UPDATE_POST = 'posts/UPDATE_POST'
}

export interface SetPostsActionI extends Action<PostsActionType> {
    type: PostsActionType.SET_POSTS,
    payload: PostsState['items']
}

export interface AddPostActionI extends Action<PostsActionType> {
    type: PostsActionType.ADD_POST,
    payload: Post
}

export interface DeletePostActionI extends Action<PostsActionType> {
    type: PostsActionType.DELETE_POST
    payload: Post['id']
}

export interface UpdatePostActionI extends Action<PostsActionType> {
    type: PostsActionType.UPDATE_POST,
    payload: Post
}

export interface FetchPostsActionI extends Action<PostsActionType> {
    type: PostsActionType.FETCH_POSTS
}

export interface SetPostsLoadingStateI extends Action<PostsActionType> {
    type: PostsActionType.SET_LOADING_STATE,
    payload: LoadingState
}

export const setPostsAC = (payload: PostsState['items']): SetPostsActionI => ({
    type: PostsActionType.SET_POSTS,
    payload
})

export const addPostAC = (payload: Post): AddPostActionI => ({
    type: PostsActionType.ADD_POST,
    payload
})

export const deletePostAC = (payload: Post['id']): DeletePostActionI => ({
    type: PostsActionType.DELETE_POST,
    payload
})

export const updatePostAC = (payload: Post): UpdatePostActionI => ({
    type: PostsActionType.UPDATE_POST,
    payload
})

export const fetchPosts = (): FetchPostsActionI => ({
    type: PostsActionType.FETCH_POSTS
})

export const setPostsLoadingState = (payload: LoadingState): SetPostsLoadingStateI => ({
    type: PostsActionType.SET_LOADING_STATE,
    payload
})

export type PostsAction = SetPostsActionI
    | FetchPostsActionI
    | SetPostsLoadingStateI
    | AddPostActionI
    | DeletePostActionI
    | UpdatePostActionI
