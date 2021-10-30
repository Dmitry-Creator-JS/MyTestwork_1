import {ADD_USERS} from "./actions";


let initialState = {
    users: []
}

const usersReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USERS:
            return {
                ...state, users: [...state.users, ...action.payload]
            }


        default:
            return state

    }
}

export default usersReducer;