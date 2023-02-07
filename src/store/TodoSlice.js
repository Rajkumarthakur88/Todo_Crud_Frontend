import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import TodoService from './TodoService';

const initialState = {
    todo: [],
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: ""

}

const TodoSlice = createSlice({

    name: 'todos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(createTodo.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(createTodo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.todo = action.payload;
            })
            .addCase(createTodo.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.todo = null;
                state.message = action.payload;

            });
    }
})

export const createTodo = createAsyncThunk("todos/create", async () => {

    const res = await fetch(`/todo`)
    const data = await res.json()

    return data
})

export default TodoSlice.reducer