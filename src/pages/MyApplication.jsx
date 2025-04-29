import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import useAxiousSecure from "../hooks/useAxiousSecure";

const MyApplication = () => {
  const { user } = useAuth();
  const [jobApplication, setJobApplication] = useState([]);
  const axiosSecure = useAxiousSecure();
  useEffect(() => {
    // fetch(`https://jobbox-server-ten-bay.vercel.app/job-application?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setJobApplication(data);
    //   });

    // axiosSecure.get(`/job-application?email=${user?.email}`).then((res) => {
    //   setJobApplication(res.data);
    // });

    axiosSecure
      .get(`/job-application?email=${user?.email}`)
      .then((res) => setJobApplication(res.data));
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobApplication.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.title}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, Daniel and Leannon
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>Purple</td>
                <th>
                  <button className="btn btn-ghost btn-xs">X</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
