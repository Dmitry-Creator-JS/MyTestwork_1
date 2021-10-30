import React, {useEffect} from 'react';
import ArticlesItem from "./ArticlesItem";
import './../../styles/App.css'
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../api/apiRequests";
import Loader from "../sharedUI/myLoader/Loader";

const Articles = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.articlesReducer.posts)





    useEffect(() => {
        dispatch(getPosts())
    }, [])

    if(!posts.length) {
        return  <Loader/>
    }

    return (
        <div>


            <div className='list-title'> Article List </div>
            <div className='card-list'>

                {posts.map(post => <ArticlesItem post={post} key={post.id} />)}
            </div>
        </div>

    );
};

export default Articles;