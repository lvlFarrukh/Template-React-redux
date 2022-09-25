import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

// export const chatToBot = createAsyncThunk(
//   'messages/chatToBot',
//   async (text) => {
//     return axios.post(`https://restaurant-chatapp.herokuapp.com/talktochatbot`, {text})
//     .then((response) => {
//       console.log("Response===>",response.data);
//       return response.data;
//     })
//   }
// )

interface brandState {
    data: any
  }
  
  const initialState = {
    data: {name: 'farrukh'}
  } as brandState

export const brandSlice = createSlice({
  name: 'brand',
  initialState,

  reducers: {
    getBrand: (state, {payload}) => {
    //   state.messages.push({
    //     type: "user",
    //     message: payload
    //   });
    },
  },
  extraReducers: {
    // [chatToBot.fulfilled]: (state, action) => {
    //   state.messages.push(extractResponseMessages(action.payload, "bot"));
    // }
  }
})

// Action creators are generated for each case reducer function
// export const { addUserMessage } = loginSlice.actions
export default brandSlice.reducer