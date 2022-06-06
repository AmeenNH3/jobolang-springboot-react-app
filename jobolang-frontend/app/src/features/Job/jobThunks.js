import { checkForUnauthorizedResponse } from "../../utils/axios";
import customFetch from "../../utils/axios";
import { clearValues } from "./JobSlice";
import { toast } from "react-toastify";
export const createJobThunk = async (job, thunkAPI) => {
  try {
    console.log(thunkAPI.getState().user.user.token);
    const resp = await customFetch.post("/job/createJob", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    console.log(resp);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const editJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/job/updateJob", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
