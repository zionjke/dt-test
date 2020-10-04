import {combineReducers} from "redux";
import {reducer} from "./posts/reducer";

export const rootRecuder = combineReducers({
    posts: reducer
})
