import { useEffect, useState } from "react";

import axios from "axios";

const useJobs = (sort) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/jobs?sort=${sort}`).then((res) => {
      setLoading(false);
      setJobs(res.data);
    });
  }, [sort]);
  return { jobs, loading };
};

export default useJobs;
