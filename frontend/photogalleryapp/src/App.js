import React, { useState } from "react";
import Login from "./components/Login";
import PhotoGallery from "./components/PhotoGallery";
import UploadPhoto from "./components/UploadPhoto";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    const handleLogin = (username) => {
        setIsLoggedIn(true);
        setUsername(username);
    };

    return (
        <div className="App">
            {!isLoggedIn ? (
                <Login onLogin={handleLogin} />
            ) : (
                <>
                    <h1>Welcome, {username}</h1>
                    <PhotoGallery username={username} />
                    <UploadPhoto username={username} />
                </>
            )}
        </div>
    );
}

export default App;
