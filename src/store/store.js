import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "../components/redux/usersReducer";
import articlesReducer from "../components/redux/articlesReducer";
import photosReducer from "../components/redux/photosReducer";
import thunk from "redux-thunk";
import appReducer from "../components/redux/appReducer";


const rootReducer = combineReducers({
    usersReducer,
    articlesReducer,
    photosReducer,
    appReducer,
})

let store = createStore(rootReducer, applyMiddleware(thunk) )

export default store;