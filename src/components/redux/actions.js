export const ADD_POSTS = 'ADD_POSTS';
export const ADD_USERS = 'ADD_USERS';
export const ADD_PHOTOS = 'ADD_PHOTOS';
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';




export const showLoadAC = () => {
    return {
        type: SHOW_LOADER,

    }
}

export const hideLoadAC = () => {
    return {
        type: HIDE_LOADER,

    }
}


export const addPostAC = (posts) => {
    return {
        type: ADD_POSTS,
        payload: posts
    }
}

export const addUsersAC = (users) => {
    return {
        type: ADD_USERS,
        payload: users
    }
}

export const addPhotosAC = (photos) => {
    return {
        type: ADD_PHOTOS,
        payload: photos
    }
}



