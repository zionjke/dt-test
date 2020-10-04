import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../store";
import {addPostAC, deletePostAC, PostsAction, setPostsAC, setPostsLoadingState, updatePostAC} from "./actionCreators";
import {Dispatch} from "redux";
import {postsAPI} from "../../services/api/postsAPI";
import {LoadingState} from "../../interfaces/post";


type ThunkType = ThunkAction<void, AppStateType, unknown, PostsAction>

export const getPostsTC = (): ThunkType => (dispatch: Dispatch<PostsAction>) => {
    postsAPI.fetchPosts().then((data) => {
        dispatch(setPostsAC(data))
    })
        .catch(e => {
            dispatch(setPostsLoadingState(LoadingState.ERROR))
        })
}

export const addPostTC = (title: string, body: string): ThunkType => (dispatch: Dispatch<PostsAction>) => {
    postsAPI.createPost(title, body).then(data => {
        dispatch(addPostAC(data))
    })
}

export const deletePostTC = (id: number): ThunkType => (dispatch: Dispatch<PostsAction>) => {
    postsAPI.deletePost(id).then(() => {
        dispatch(deletePostAC(id))
    })
}

export const updatePostTC = (id:number, title: string, body: string): ThunkType => (dispatch: Dispatch<PostsAction>) => {
    postsAPI.updatePost(id, title, body).then((data) => {
        dispatch(updatePostAC(data))
    })
}
