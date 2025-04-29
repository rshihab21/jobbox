import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JObDetails = () => {
  const jobs = useLoaderData();
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h3 className="text-3xl font-bold">{jobs.title}</h3>
      <p>{jobs.description}</p>
      <Link to={`/applyjob/${jobs._id}`}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JObDetails;
