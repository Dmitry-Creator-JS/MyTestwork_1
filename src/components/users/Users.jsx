import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import UsersItem from "./UsersItem";
import {getUsers} from "../../api/apiRequests";
import Loader from "../sharedUI/myLoader/Loader";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users)
    const isLoading = useSelector(state => state.appReducer.isLoad)


    useEffect(() => {
        dispatch(getUsers())
    }, [])

    if(isLoading){
        return <Loader/>
    }




    return (
        <div className='user-list'>
            {users.map(user => <UsersItem key={user.id} user={user} />)}
        </div>
    );
};

export default Users;