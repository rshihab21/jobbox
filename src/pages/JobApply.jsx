import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleJobApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkdin = form.linkedin.value;
    const github = form.github.value;
    const resumue = form.resume.value;
    console.log(linkdin, github, resumue);

    const jobApply = {
      job_id: id,
      applicant_email: user?.email,
      linkdin,
      github,
      resumue,
    };
    console.log(jobApply);

    fetch("http://localhost:5000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApply),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/myapplication");
      });
  };

  console.log(id);
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md my-10">
      <h2 className="text-2xl font-semibold mb-4 text-center uppercase">
        Apply Your Jobs, Good Luck !
      </h2>
      <form onSubmit={handleJobApplySubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            LinkedIn URL
          </label>
          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/yourprofile"
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            GitHub URL
          </label>
          <input
            type="url"
            name="github"
            placeholder="https://github.com/yourusername"
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Resume URL
          </label>
          <input
            type="url"
            name="resume"
            placeholder="https://yourwebsite.com/resume.pdf"
            className="mt-1 p-2 w-full border rounded-lg focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobApply;
