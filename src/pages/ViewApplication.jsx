import { useLoaderData, useParams } from "react-router-dom";

const ViewApplication = () => {
  const application = useLoaderData();
  const handleStatusUpdate = (e, id) => {
    console.log(e.target.value, id);
    const data = {
      status: e.target.value,
    };
    fetch(`https://jobbox-server-ten-bay.vercel.app/job-application/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="overflow-x-auto max-w-7xl mx-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Status</th>
            <th>Uudate Status</th>
          </tr>
        </thead>
        <tbody>
          {application.map((app, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{app.applicant_email}</td>
              <td>Quality Control Specialist</td>
              <td>
                <select
                  onChange={(e) => handleStatusUpdate(e, app._id)}
                  defaultValue={app.status || "Change Status"}
                  className="select select-accent w-full max-w-xs"
                >
                  <option disabled>Change Status</option>
                  <option>Under Review</option>
                  <option>Hired</option>
                  <option>Rejected</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewApplication;
