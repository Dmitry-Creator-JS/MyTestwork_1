import {ADD_POSTS} from "./actions";


let initialState = {
    posts: []
}

const articlesReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POSTS:
            return {
                ...state, posts: [...state.posts, ...action.payload]
            }


        default:
            return state

    }
}

export default articlesReducer;