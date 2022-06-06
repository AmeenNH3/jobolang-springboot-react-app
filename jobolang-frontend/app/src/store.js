import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./features/user/userSlice";
import jobSlice from "./features/Job/JobSlice";
import allJobsSlice from "./features/AllJobs/allJobsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
    allJobs: allJobsSlice,
  },
});
