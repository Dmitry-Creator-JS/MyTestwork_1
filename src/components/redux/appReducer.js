import {HIDE_LOADER, HIDE_MODAL, SHOW_LOADER, SHOW_MODAL} from "./actions";


let initialState = {
    isLoad: false,
    modal: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state, isLoad: true
            }

        case HIDE_LOADER:
            return {
                ...state, isLoad: false
            }
        case SHOW_MODAL:
            return {
                ...state, modal: true
            }

        case HIDE_MODAL:
            return {
                ...state, modal: false
            }
        default:
            return state

    }
}

export default appReducer;