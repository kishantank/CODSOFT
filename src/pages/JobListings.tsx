import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './JobListings.css';

interface Job {
  _id: string;
  title: string;
  company: string;
  location: string;
  type: string;
}

const JobListings = () => {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/jobs')
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="job-listings">
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <Link to={`/jobs/${job._id}`} key={job._id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company} — {job.location}</p>
          <span className="type">{job.type}</span>
        </Link>
      ))}
    </div>
  );
};

export default JobListings;
