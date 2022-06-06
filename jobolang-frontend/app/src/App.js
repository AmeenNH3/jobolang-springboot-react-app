import { Landing, Register, Error, Dashboard } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile, AddJob, AllJobs, Analytics, SharedLayout } from "./pages/dashboard";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"light"}
      ></ToastContainer>
      <Routes>
        <Route path="/landing" element={<Landing></Landing>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <SharedLayout></SharedLayout>
            </ProtectedRoute>
          }
        >
          <Route index element={<Analytics></Analytics>} />
          <Route path="all-jobs" element={<AllJobs></AllJobs>} />
          <Route path="add-job" element={<AddJob></AddJob>} />
          <Route path="profile" element={<Profile></Profile>} />
        </Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
