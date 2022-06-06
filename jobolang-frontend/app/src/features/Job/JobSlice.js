import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { createJobThunk, editJobThunk } from "./jobThunks";
import { jobInitialState } from "../initialStates";

export const createJob = createAsyncThunk("job/createJob", createJobThunk);
export const editJob = createAsyncThunk("job/editJob", editJobThunk);

const jobSlice = createSlice({
  name: "job",
  initialState: jobInitialState,
  reducers: {
    setEditJob: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      state[name] = value;
    },
    clearValues: () => {
      return jobInitialState;
    },
  },
  extraReducers: {
    [createJob.pending]: (state) => {
      state.isLoading = true;
    },
    [createJob.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      toast.success("Job added");
    },
    [createJob.rejected]: (state, { payload }) => {
      state.isLoading = false;

      toast.error("Error adding job!");
    },
    [editJob.pending]: (state) => {
      state.isLoading = true;
    },
    [editJob.fulfilled]: (state) => {
      state.isLoading = false;
      toast.success("Job edited successfully");
    },
    [editJob.rejected]: (state, { payload }) => {
      state.isLoading = false;
      // toast.error(payload);
      toast.error("Error editing job!");
    },
  },
});

export default jobSlice.reducer;
export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
