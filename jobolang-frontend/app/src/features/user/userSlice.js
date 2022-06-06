import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUserThunk, loginUserThunk, updateUserThunk, clearUserThunk } from "./userThunks";
import { toast } from "react-toastify";

import { addUserToLocalStorage, removeUserFromLocalStorage } from "../../utils/localStorage";

import { userInitialState } from "../initialStates";
import { Navigate } from "react-router-dom";

export const registerUser = createAsyncThunk("user/registerUser", registerUserThunk);
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);
export const clearStore = createAsyncThunk("user/clearStore", clearUserThunk);

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      state.user[name] = value;
    },
    clearValues: () => {
      return userInitialState;
    },
    logoutUser: (state) => {
      state.user = null;
      state.isOpen = false;
      removeUserFromLocalStorage();
    },
    toggleSideBar: (state) => {
      if (state.isOpen) {
        state.isOpen = false;
      } else {
        state.isOpen = true;
      }
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      toast.loading("Registering");
    },
    [registerUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.dismiss();
      toast.success("Registered successfully!");
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.dismiss();
      toast.error(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      toast.loading("Logging in..");
    },
    [loginUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      toast.dismiss();
      console.log(action.payload);
      state.user = action.payload;
      addUserToLocalStorage(state.user);
      toast.success("logged in successfully!");
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.dismiss();
      toast.error(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
      toast.loading("updating profile");
    },
    [updateUser.fulfilled]: (state, action) => {
      toast.dismiss();
      console.log(action.payload);
      const { username, email, fullName, location } = action.payload;
      state.isLoading = false;
      state.user = { ...state.user, username, email, fullName, location };
      addUserToLocalStorage(state.user);
      toast.success("Profile updated successfully");
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.dismiss();
      toast.error(payload);
    },
    [clearStore.rejected]: () => {
      toast.error("An error occurred");
    },
  },
});

console.log(userSlice);
export default userSlice.reducer;
export const { logoutUser, toggleSideBar, clearValues, handleChange } = userSlice.actions;
