
import {addPhotosAC, addPostAC, addUsersAC, hideLoadAC, showLoadAC} from "../components/redux/actions";
import axios from "axios";


export const getPosts = () => {
    return async dispatch => {
        dispatch(showLoadAC())
        try {

            axios.get('https://jsonplaceholder.typicode.com/posts')

                .then(res => dispatch(addPostAC(res.data)))
            dispatch(hideLoadAC())
        } catch (e) {

        }




    }
}

export const getUsers = () => {
    return async dispatch => {

        try {
            axios.get('https://jsonplaceholder.typicode.com/users')

                .then(res => dispatch(addUsersAC(res.data)))
        } catch (e) {

        }




    }
}


export const getPhotos = () => {
    return async dispatch => {

        try {
            axios.get('https://jsonplaceholder.typicode.com/photos?_limit=9')

                .then(res => dispatch(addPhotosAC(res.data)))

        } catch (e) {

        }



    }
}


