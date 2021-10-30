import React from 'react';
import './../../styles/App.css'
import MyButton from "../sharedUI/myButton/MyButton";

const ArticlesItem = ({post}) => {
    return (
        <div className='card' >
           <div className="title-card">
               {post.id}.  {post.title}
           </div>
            <div className="body-card">
                {post.body}
            </div>
            <div className='card-btns'>
                <MyButton>View </MyButton>
                <MyButton> Change color </MyButton>


            </div>
        </div>
    );
};

export default ArticlesItem;