import {AppStateType} from "../store";
import {PostsState} from "../../interfaces/post";
import {createSelector} from "reselect";

export const  selectPosts = (state:AppStateType):PostsState => state.posts
export const selectPostsItems = createSelector(selectPosts,posts => posts.items)
