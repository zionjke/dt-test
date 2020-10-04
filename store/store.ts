import {applyMiddleware, createStore} from "redux";
import {rootRecuder} from "./rootReducer";
import thunk from "redux-thunk";


export type AppStateType = ReturnType<typeof rootRecuder>

export const store = createStore(rootRecuder,applyMiddleware(thunk))

