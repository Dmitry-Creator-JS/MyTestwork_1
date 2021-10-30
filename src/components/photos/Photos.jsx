import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PhotosItem from "./PhotosItem";
import {getPhotos} from "../../api/apiRequests";
import Loader from "../sharedUI/myLoader/Loader";

const Photos = () => {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photosReducer.photos)

    useEffect(() => {
        dispatch(getPhotos())
    }, [])

    if(!photos.length){
        return <Loader/>
    }

    return (
        <div>
            {photos.map(photo => <PhotosItem key={photo.id} photo={photo} />)}
        </div>
    );
};

export default Photos;