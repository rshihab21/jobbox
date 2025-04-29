import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Button } from "@headlessui/react";
import { Link } from "react-router-dom";

const MyPostedJob = () => {
  const { user } = useAuth();
  const [myPostedJob, setMyPostedJob] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyPostedJob(data);
      });
  }, [user.email]);
  return (
    <div className="overflow-x-auto mx-auto max-w-7xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Application Number</th>
            <th>Applicant</th>
          </tr>
        </thead>
        <tbody>
          {myPostedJob.map((job, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{job.title}</td>
              <td>{job.applicationCount}</td>
              <Link to={`/viewapplication/${job._id}`}>
                <td>
                  <Button className="cursor-pointer">View Applicant</Button>
                </td>
              </Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPostedJob;
