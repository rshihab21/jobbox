import React, { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("http://localhost:5000/jobs");
    const data = await res.json();
    setJobs(data);
  };

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4 my-8 max-w-7xl mx-auto">
      {jobs.map((job) => (
        <HotJobsCard key={job._id} job={job}></HotJobsCard>
      ))}
    </div>
  );
};

export default HotJobs;
