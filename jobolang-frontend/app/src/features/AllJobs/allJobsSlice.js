import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { alljobsInitialState } from "../initialStates";

export const getAllJobs = createAsyncThunk("allJobs/getJobs", async (_, thunkAPI) => {
  let url = `/job/allJobs`;
  try {
    const response = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const deleteJob = createAsyncThunk("job/deleteJob", async (id, thunkAPI) => {
  let url = `/job/deleteJob/${id}`;
  try {
    thunkAPI.dispatch(showLoading());
    const response = await customFetch.delete(url, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
export const getStats = createAsyncThunk("job/getStats", async (_, thunkAPI) => {
  let url = "job/getStats";
  try {
    const response = await customFetch.get(url, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.reducer.data);
  }
});

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState: alljobsInitialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllJobs.fulfilled]: (state, action) => {
      state.isLoading = false;
      // toast.dismiss();
      state.jobs = action.payload;
      // state.jobs = [];
    },
    [getAllJobs.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      toast.error("Error occured! couldn't retrieve jobs");
    },
    [deleteJob.fulfilled]: (state) => {
      toast.success("Job removed Successfully");
    },
    [deleteJob.rejected]: (state) => {
      toast.error("Error removing job!");
    },
    [getStats.pending]: (state) => {
      console.log("getting stats");
      state.isLoading = true;
    },
    [getStats.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.monthlyApplications = payload.monthlyApplications;
      state.stats = {
        pending: payload.pending,
        declined: payload.declined,
        interview: payload.interview,
      };
    },
    [getStats.rejected]: (state, payload) => {
      console.log(payload);
      toast.error("error getting stats");
    },
  },
});

export default allJobsSlice.reducer;
export const { showLoading, hideLoading } = allJobsSlice.actions;
