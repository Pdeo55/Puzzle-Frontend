import axios from "axios";

const API_URL = "http://localhost:8000/api/question"

const addQuestion = async (homeworkData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL + '/add', homeworkData, config)

    return response.data
}

const getQuestion = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.get(API_URL + '/get', config)

    return response.data
}

const questionService = {
    addQuestion,
    getQuestion
}

export default questionService