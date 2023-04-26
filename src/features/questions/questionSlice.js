import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import questionService from "./questionService";

const initialState = {
    question: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// create new homework
export const addQuestion = createAsyncThunk(
    'question/create',
    async (questionData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await questionService.addQuestion(questionData, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// get questions
export const getQuestion = createAsyncThunk(
    'questions/getAll',
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await questionService.getQuestion(token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const questionSlice = createSlice({
    name: "question",
    initialState,
    reducers: {
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
            .addCase(addQuestion.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addQuestion.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.question.push(action.payload)
            })
            .addCase(addQuestion.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getQuestion.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getQuestion.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.homeworks = action.payload
            })
            .addCase(getQuestion.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset } = questionSlice.actions
export default questionSlice.reducer