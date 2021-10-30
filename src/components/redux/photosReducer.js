import {ADD_PHOTOS} from "./actions";


let initialState = {
    photos: []
}

const photosReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_PHOTOS:
            return {
                ...state, photos: [...state.photos, ...action.payload]
            }


        default:
            return state

    }
}

export default photosReducer;