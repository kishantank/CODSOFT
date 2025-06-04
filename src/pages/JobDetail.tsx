// src/pages/JobDetail.tsx
import { useParams } from 'react-router-dom';
import './JobDetail.css';

const JobDetail = () => {
  const { id } = useParams();

  // Normally you'd fetch job data by ID
  return (
    <div className="job-detail">
      <h2>Job Detail - ID: {id}</h2>
      <p>Title: Frontend Developer</p>
      <p>Company: TechCorp</p>
      <p>Location: Remote</p>
      <p>Type: Full-time</p>
      <p>Description: We’re looking for a frontend dev skilled in React and TypeScript.</p>
      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

export default JobDetail;
