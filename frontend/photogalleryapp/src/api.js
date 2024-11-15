const API_BASE_URL = "http://localhost:7071/api"; // Replace with Azure Function URL

export const loginUser = async (username, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });
        return response.ok;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    }
};

export const fetchPhotos = async (username) => {
    try {
        const response = await fetch(`${API_BASE_URL}/photos?username=${username}`);
        const data = await response.json();
        return data.photos || [];
    } catch (error) {
        console.error("Fetching photos failed:", error);
        return [];
    }
};

export const uploadPhoto = async (username, file) => {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("file", file);

    try {
        const response = await fetch(`${API_BASE_URL}/upload`, {
            method: "POST",
            body: formData,
        });
        return response.ok;
    } catch (error) {
        console.error("Photo upload failed:", error);
        return false;
    }
};
