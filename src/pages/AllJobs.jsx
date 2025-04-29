import React, { useState } from "react";
import useJobs from "../hooks/useJobs";
import HotJobsCard from "../components/HotJobsCard";

const AllJobs = () => {
  const [sort, setSort] = useState(false);
  const { jobs, loading } = useJobs(sort);
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2 className="text-5xl my-5 text-center uppercase">All Jobs</h2>
      <div className="w-11/12 mx-auto text-center">
        <button
          onClick={() => setSort(!sort)}
          className={`bg-green-500 rounded btn-neutral px-4 py-2 cursor-pointer ${
            sort ? "text-white" : "text-blue-300"
          }`}
        >
          {sort ? "Sorted by salary" : "Sort by salary"}
        </button>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 my-8 max-w-7xl mx-auto">
        {jobs.map((job) => (
          <HotJobsCard key={job._id} job={job}></HotJobsCard>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
