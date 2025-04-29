import React from "react";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const HotJobsCard = ({ job }) => {
  const {
    title,
    location,
    jobType,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    company_logo,
    _id,
  } = job;
  return (
    <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-2xl border border-gray-200">
      <div className="flex items-center gap-3">
        <img
          src={company_logo}
          alt="Company Logo"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold">{company}</h3>
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <FaMapMarkerAlt className="text-blue-500" /> {location}
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold mt-3">{title}</h2>
      <div className="text-sm text-gray-500 flex items-center gap-3 mt-1">
        <span className="flex items-center gap-1">
          <FaClock /> {jobType}
        </span>
        <span className="text-gray-400">•</span>
        <span>4 minutes ago</span>
      </div>

      <p className="text-gray-600 mt-3 text-sm">{description}</p>

      <div className="flex gap-2 mt-3">
        {requirements.map((requirement, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded"
          >
            {requirement}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4">
        <p className="text-xl font-bold text-blue-600">
          {salaryRange.min}-{salaryRange.max}
          <span className="text-sm font-normal">{salaryRange.currency}</span>
        </p>
        <Link to={`/jobdetails/${_id}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HotJobsCard;
