import "./Home.css";
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  return ( 
    <div className="Home-container">
      <h1> · Developer · Artist · Gamer </h1>
      <p>Hey, I'm Andre. I build things for the web.</p>
      <p>21-year-old developer from the Netherlands. I create with code
        and art — blending digital creativity with clean, purposeful engineering.
      </p>

      <div className="button-group">
        <button className="btn-primary" onClick={() => navigate('/Projects')}>
          View Projects
        </button>
        <button className="btn-secondary" onClick={() => navigate('/Skills')}>
          Contact Me
        </button>
      </div>

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-value">21</span>
          <span className="stat-label">YEARS OLD</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">Nl</span>
          <span className="stat-label">Netherlands</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">∞</span>
          <span className="stat-label">Hours gamed</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">♦</span>
          <span className="stat-label">Building stuff</span>
        </div>
      </div>
    </div>
  );
}

export default Home;


















