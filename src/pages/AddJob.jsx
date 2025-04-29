import React from "react";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleJobSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData);
    console.log(initialData);
    const { min, max, currency, ...newJob } = initialData;
    newJob.salaryRange = { min, max, currency };
    newJob.requirements = newJob.requirements.split(",");
    newJob.responsibility = newJob.responsibility.split(",");
    console.log(newJob);

    fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "The job has been added",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/mypostedjob");
      });
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add A Job</h2>
      <form onSubmit={handleJobSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Job Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter job title"
          />
        </div>

        <div>
          <label className="block text-gray-700">Company Name</label>
          <input
            type="text"
            name="company"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter Company Name"
          />
        </div>

        <div>
          <label className="block text-gray-700">Job Location</label>
          <input
            type="text"
            name="location"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter job location"
          />
        </div>

        {/* salary range */}
        <div>
          <label className="block text-gray-700">Salary Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="min"
              className="w-1/3 p-2 border rounded mt-1"
              placeholder="Min"
              required
            />
            <input
              type="number"
              name="max"
              className="w-1/3 p-2 border rounded mt-1"
              placeholder="Max"
              required
            />
            <select
              name="currency"
              className="w-1/3 p-2 border rounded mt-1"
              required
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700">Job Category</label>
          <select name="category" className="w-full p-2 border rounded mt-1">
            <option value="">Select a category</option>
            <option value="Engineering">Engineering</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="Sales">Sales</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700">Job Description</label>
          <input
            type="text"
            name="description"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter job requirements (e.g., Java, React, JavaScript, HTML)"
          />
        </div>
        <div>
          <label className="block text-gray-700">Job Requirements</label>
          <input
            type="text"
            name="requirements"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter job requirements (e.g., Java, React, JavaScript, HTML)"
          />
        </div>
        <div>
          <label className="block text-gray-700">Responsibility</label>
          <input
            type="text"
            name="responsibility"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter job responsibility (e.g., Develop and maintain software)"
          />
        </div>
        <div>
          <label className="block text-gray-700">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter HR Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">HR Email</label>
          <input
            type="email"
            name="hr_email"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter HR email"
            defaultValue={user?.email}
          />
        </div>
        <div>
          <label className="block text-gray-700">Company Logo</label>
          <input
            type="url"
            name="company_logo"
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter logo url"
          />
        </div>
        <div>
          <label className="block text-gray-700">Application Deadline</label>
          <input
            type="date"
            name="deadline"
            className="w-full p-2 border rounded mt-1"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 cursor-pointer"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
