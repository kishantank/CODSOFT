// src/pages/Home.tsx
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <div className="home__hero">
        <h1>Welcome to JobBoard</h1>
        <p>Find your dream job or the perfect candidate today.</p>
        <div className="home__buttons">
          <Link to="/jobs" className="btn primary">Browse Jobs</Link>
          <Link to="/signup" className="btn secondary">Join Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
