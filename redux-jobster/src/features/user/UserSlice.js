import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseURL from "../../utils/axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  isSidebarOpen:false,
  user: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUSer",
  async (user, thunkAPI) => {
    try {
      const resp = await baseURL.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      // toast.error(error.response.data.msg);
      //   console.log(error.response);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    console.log("in login thunk");
    try {
      const resp = await baseURL.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);



const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers:{
    logoutUser:(state)=>{
      state.user=null;
      state.isSidebarOpen=false;
      removeUserFromLocalStorage();
    },
    toggleSideBar:(state)=>{
      // console.log("toggled");
      state.isSidebarOpen=!state.isSidebarOpen;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome ${state.user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const { user } = payload;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${state.user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default UserSlice.reducer;

export const {toggleSideBar,logoutUser}=UserSlice.actions
