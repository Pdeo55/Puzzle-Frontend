import axios from "axios";

const BASE_URL = process.env.BASE_URL

const API_URL = 'http://localhost:8000/api/user/'

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL + 'register', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// Login user
const login = async (userData) => {
    const reponse = await axios.post(API_URL + 'login', userData)

    if (reponse.data) {
        localStorage.setItem('user', JSON.stringify(reponse.data))
    }

    return reponse.data
}

// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService