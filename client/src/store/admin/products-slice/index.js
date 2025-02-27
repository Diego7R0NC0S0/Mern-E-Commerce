import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoading : false,
    productList : []
}

export const addNewProduct = createAsyncThunk

const AdminProductsSlice = createSlice({
    name : 'adminProducts',
    initialState,
    reducers : {},
    extraReducers : (builder) => {

    }


})