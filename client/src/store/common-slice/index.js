import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from '@/config/api'

const initialState = {
  isLoading: false,
  featureImageList: [],
};

export const getFeatureImages = createAsyncThunk(
  "/order/getFeatureImages",
  async () => {
    const response = await axios.get(
      `${API_URL}/api/common/feature/get`
    );

    return response.data;
  }
);

export const addFeatureImage = createAsyncThunk(
  "/order/addFeatureImage",
  async (image) => {
    const response = await axios.post(
      `${API_URL}/api/common/feature/add`,
      { image }
    );

    return response.data;
  }
);

// Acción para eliminar imágenes
export const deleteFeatureImage = createAsyncThunk(
  "/common/deleteFeatureImage",
  async (id) => {
    const response = await axios.delete(
      `${API_URL}/api/common/feature/delete/${id}`
    );

    return response.data;
  }
);

const commonSlice = createSlice({
  name: "commonSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFeatureImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFeatureImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.featureImageList = action.payload.data;
      })
      .addCase(getFeatureImages.rejected, (state) => {
        state.isLoading = false;
        state.featureImageList = [];
      })
      .addCase(deleteFeatureImage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFeatureImage.fulfilled, (state, action) => {
        state.isLoading = false;
        // No necesitamos actualizar el estado aquí porque vamos a obtener las imágenes actualizadas
      })
      .addCase(deleteFeatureImage.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default commonSlice.reducer;
