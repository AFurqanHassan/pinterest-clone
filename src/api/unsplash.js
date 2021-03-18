import React from 'react'
import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID 4QX4XxwhbMMkSAxX4t7stN3cETDHboepGakoIsEUfKg" 
    }
})
