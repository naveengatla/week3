import React, { useEffect, useState } from "react";
import { fetchPhotos } from "../api";

function PhotoGallery({ username }) {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const loadPhotos = async () => {
            const userPhotos = await fetchPhotos(username);
            setPhotos(userPhotos);
        };
        loadPhotos();
    }, [username]);

    return (
        <div>
            <h2>Your Photos</h2>
            <div>
                {photos.map((photo, index) => (
                    <img key={index} src={photo.url} alt={`Photo ${index}`} width="200" />
                ))}
            </div>
        </div>
    );
}

export default PhotoGallery;
