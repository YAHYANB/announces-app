import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  axios  from 'axios';

export const fetchAddAnnounce = createAsyncThunk('announce/fetchAddAnnounce', async (announceInfo) =>{
    try{
        const response = await axios.post('http://127.0.0.1:8000/api/announce/add',announceInfo)
        console.log(response.data)
        return response.data
    }catch(err){
        console.log(err)
    }
})

const initialState = {
    status: null,
    announces: {},
    error: null
}

const AnnounceReducer = createSlice({
    name: 'announce',
    initialState,
    reducers: {
    },
    extraReducers: (builder)=> {
        builder
        .addCase(fetchAddAnnounce.pending, (state)=> {
            state.status = 'loading';
        })
        .addCase(fetchAddAnnounce.fulfilled, (state, action)=>{
            console.log('success'+action.payload)
            state.status = "succeeded";
            state.announces = action.payload
        })
        .addCase(fetchAddAnnounce.rejected, (state,action)=> {
            console.log('failed'+action)
            state.status = 'failed';
            state.error = action.error.message
        })
    }
})

export default AnnounceReducer.reducer