// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">JobBoard</Link>
      </div>
      <ul className="navbar__links">
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="/employer">Employer</Link></li>
        <li><Link to="/candidate">Candidate</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
