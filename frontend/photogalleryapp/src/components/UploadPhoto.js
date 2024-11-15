import React, { useState } from "react";
import { uploadPhoto } from "../api";

function UploadPhoto({ username }) {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (file) {
            const success = await uploadPhoto(username, file);
            if (success) {
                alert("Photo uploaded successfully!");
            } else {
                alert("Failed to upload photo.");
            }
        }
    };

    return (
        <div>
            <h2>Upload a Photo</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
}

export default UploadPhoto;
