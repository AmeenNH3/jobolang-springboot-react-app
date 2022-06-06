import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import abstractImg from "../../assets/images/abstract-1.svg";
import { handleChange, clearValues, createJob, editJob } from "../../features/Job/JobSlice";
import { toast } from "react-toastify";

function AddJob() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((state) => state.job);

  const dispatch = useDispatch();

  function handleChangeForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(
      handleChange({
        name,
        value,
      })
    );
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!position || !jobLocation || !company) {
      toast.error("please fill all the values");
      return;
    }
    if (isEditing && editJobId !== "") {
      dispatch(editJob({ id: editJobId, position, company, jobLocation, jobType, status }));
      return;
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  }
  return (
    <Wrapper>
      <div className="job-page-container">
        <h2 className="job-title">{isEditing ? "Edit Job" : "Add a Job"}</h2>
        <div className="job-content-container">
          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-row-1">
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="position">
                  Position
                </label>
                <input
                  value={position}
                  onChange={handleChangeForm}
                  className="form-input"
                  name="position"
                  type="text"
                  placeholder="position"
                />
              </div>
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="company">
                  Company
                </label>
                <input
                  value={company}
                  onChange={handleChangeForm}
                  className="form-input"
                  name="company"
                  type="text"
                  placeholder="company"
                />
              </div>
            </div>
            <div className="form-row-1">
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="position">
                  Location
                </label>
                <input
                  value={jobLocation}
                  onChange={handleChangeForm}
                  className="form-input"
                  name="jobLocation"
                  type="text"
                  placeholder="job location"
                />
              </div>
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="status">
                  Status
                </label>
                <select
                  onChange={handleChangeForm}
                  className="form-input"
                  name="status"
                  value={status}
                >
                  {statusOptions.map((item, index) => {
                    return (
                      <option className="select-option" key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="form-row-3">
              <div className="form-input-element">
                <label className="form-input-label" htmlFor="jobType">
                  Type
                </label>
                <select
                  onChange={handleChangeForm}
                  className="form-input"
                  name="jobType"
                  value={jobType}
                >
                  {jobTypeOptions.map((item, index) => {
                    return (
                      <option className="select-option" key={index} value={item}>
                        {item}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            <div className="form-button-container">
              <button type="submit" className="form-btn form-btn-save">
                save
              </button>
              <button
                type="button"
                className="form-btn form-btn-cancel"
                onClick={() => dispatch(clearValues())}
              >
                cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="abstract-1">
        <img className="abstract-img" src={abstractImg} alt="abstract" />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;

  padding-top: 3rem;
  padding-left: 2rem;
  z-index: 5;
  .job-page-container {
    /* background-color: grey; */
    /* background-color: #88c0c5; */
  }
  .job-content-container {
    /* background-color: #8e8e8e; */
    margin-left: 5rem;
    /* width: fit-content; */
  }
  .job-title {
    color: #000;
    font-size: 2rem;
    font-weight: 700;
  }

  .job-header-container {
    padding-top: 2rem;
    padding-bottom: 2rem;
    /* padding-left: 4rem; */
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .job-picture-big {
    width: 77px;
    height: 77px;
    border: 4px solid rgba(149, 208, 213, 0.5);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 100%;
    background-color: #88c0c5;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .job-name {
    font-size: 1rem;
    font-weight: 600;
    text-transform: capitalize;
  }
  .job-letter-big {
    font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
  }
  .job-text {
    color: #8e8e8e;
  }

  .job-form {
    /* background-color: grey; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 6rem;
  }
  .form-row-1 {
    display: flex;
    gap: 1rem;
    input {
      width: 16.75rem;
    }
    /* background-color: grey; */
    /* width: fit-content; */
    width: 50%;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(202, 202, 202, 0.29);
  }
  .form-row-2 {
    input {
      width: 20rem;
    }
    width: 50%;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(202, 202, 202, 0.29);
  }
  .form-row-3 {
    width: 50%;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(202, 202, 202, 0.29);
  }
  .form-input-element {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    color: #525252;

    input::placeholder {
      font-family: Calibri, "Trebuchet MS", sans-serif;
      padding-left: 6px;
      font-size: 12px;
      color: #bcbcbc;
      text-transform: capitalize;
    }
  }
  .form-input {
    background-color: none;
    border: none;
    box-shadow: 0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px 3px 2px -2px rgba(25, 37, 50, 0.1);
    border-radius: 6px;
    padding: 8px;
  }
  .form-input:focus {
    outline: 1px solid #88c0c5;
  }

  .form-button-container {
    padding-top: 1rem;
    display: flex;
    gap: 1rem;
  }
  .form-btn {
    display: block;
    background: none;
    border: none;
    font-size: 14px;
    text-transform: capitalize;
    cursor: pointer;
    transition: all 0.3s;
  }
  .form-btn-save {
    background-color: #3d3d3d;
    border-radius: 6px;
    padding: 8px 2.4rem;
    color: #fff;
  }
  .form-btn-cancel {
    border-radius: 6px;
    padding: 8px 2.4rem;
    color: #3d3d3d;
    border: 1px solid #3d3d3d;
  }
  .form-btn-save:hover {
    background-color: #555555;
  }
  .form-btn-cancel:hover {
    color: #d3d3d3;
    border: 1px solid #c0c0c0;
  }
  .select-option {
    text-transform: capitalize;
  }
  .abstract-1 {
    width: 100%;
    bottom: -2%;
    position: absolute;
    z-index: -1;
  }
  .abstract-img {
    width: 100%;
    opacity: 80%;
    z-index: -1;
  }

  @media (max-width: 1124px) {
    .form-row-1 {
      flex-direction: column;
    }
  }
  @media (max-width: 546px) {
    .job-content-container {
      margin-left: 1rem;
    }
    .job-form {
      padding-left: 1rem;
    }
    .abstract-1 {
      display: none;
    }
  }
`;

export default AddJob;
