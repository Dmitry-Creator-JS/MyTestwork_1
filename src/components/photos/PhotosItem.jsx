import React from 'react';

const PhotosItem = ({photo}) => {
    return (
        <div>
            <div> {photo.id}. {photo.title} </div>
            <img src={photo.url} alt="pic"/>
        </div>
    );
};

export default PhotosItem;