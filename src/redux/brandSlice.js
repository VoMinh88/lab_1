import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
export const getBrands = createAsyncThunk('brand/getBrands', async ()=>{
    return ((res)=>res.json())
})
export const brandSlice = createSlice({
    name:'brand',
    initialState:{
        brands:[],
        loading1:false
    },
    extraReducers:{
        [getBrands.pending]: (state,action)=>{
            state.pending=true;
        },
        [getBrands.fulfilled]:(state,action)=>{
            state.loading1=false;
            state.brands=action.payload.categrories;
        },
        [getBrands.rejected]:(state,action)=>{
            state.loading1=false;
        }
    }    

})
export default brandSlice.reducer