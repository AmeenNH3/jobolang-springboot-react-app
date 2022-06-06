import { getUserFromLocalStorage } from "../utils/localStorage";

export const jobInitialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobType: "full-time",
  status: "pending",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  statusOptions: ["interview", "declined", "pending"],
  isEditing: false,
  editJobId: "",
};

export const userInitialState = {
  isOpen: false,
  isLoading: false,
  user: getUserFromLocalStorage(),
};

export const initialFilterState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

export const alljobsInitialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  noOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilterState,
};
