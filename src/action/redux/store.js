import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {todoReducer} from "../todoReduser/todoReduser";
export const store = createStore(
    todoReducer,
    composeWithDevTools()
)

