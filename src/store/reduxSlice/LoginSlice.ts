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

interface loginState {
    isLogin: boolean,
    userData: any | null,
    token: string | null,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  }
  
  const initialState = {
    isLogin: false,
    userData: null,
    token: null,
    loading: 'idle'
  } as loginState

export const loginSlice = createSlice({
  name: 'login',
  initialState,

  reducers: {
    addUserMessage: (state, {payload}) => {
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
export default loginSlice.reducer