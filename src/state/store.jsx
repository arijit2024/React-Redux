import {applyMiddleware, createStore} from "redux"
import thank from "redux-thunk"
import reducers from "./reducers"
const store = createStore(reducers,{},applyMiddleware(thank))

export default store;