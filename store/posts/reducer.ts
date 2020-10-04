import {LoadingState, PostsState} from "../../interfaces/post";
import {PostsAction, PostsActionType} from "./actionCreators";

const initialPostsState: PostsState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const reducer = (state = initialPostsState, action: PostsAction) => {

    switch (action.type) {
        case PostsActionType.SET_POSTS:
            return {
                ...state,
                items: action.payload,
                loadingState: LoadingState.LOADED
            }
        case PostsActionType.FETCH_POSTS:
            return {
                ...state,
                items: [],
                loadingState: LoadingState.LOADING
            }
        case PostsActionType.ADD_POST:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case PostsActionType.DELETE_POST:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            }
        case PostsActionType.UPDATE_POST:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id !== action.payload.id) {
                        return item
                    } else {
                        return {
                            ...item,
                            title: action.payload.title,
                            body: action.payload.body
                        }
                    }
                })
            }
        case PostsActionType.SET_LOADING_STATE:
            return {
                ...state,
                loadingState: action.payload
            }

        default: {
            return state
        }
    }

}
