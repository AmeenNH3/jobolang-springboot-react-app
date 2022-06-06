import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { clearValues } from "../Job/JobSlice";
import { logoutUser } from "./userSlice";
export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/user/register", user);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const loginUserThunk = async (user, thunkAPI) => {
  try {
    console.log(user);
    const response = await customFetch.post("/user/login", user);
    return response.data;
  } catch (error) {
    // console.log(error.response);
    return thunkAPI.rejectWithValue(error.response.data);
  }
};
export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/user/update", user, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const clearUserThunk = async (message, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
