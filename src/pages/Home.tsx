import "./Home.css";
import { useNavigate } from 'react-router';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="Home-container">
      <h1> · Developer · Artist · Gamer </h1>
      <h2>Hey, I'm Andre. I build things for the web.</h2>
      <p>21 years old developer from the Netherlands. I create with code
        and art blending digital creativity with clean, purposeful engineering.
      </p>

      <div className="button-group">
        <button className="btn-primary" onClick={() => navigate('/Projects')}>
          View Projects
        </button>
        <button className="btn-secondary" onClick={() => navigate('/Contact')}>
          Contact Me
        </button>
      </div>

      <div>
        <span className="pills">React</span>
        <span className="pills">Typescript</span>
        <span className="pills">CSS</span>
        <span className="pills">Laravel</span>
        <span className="pills">HTML</span>
      </div>






      {/* dit fizen */}

      <div className="stats-bar">
        <div className="stat-item">
          <span className="stat-value">21</span>
          <span className="stat-label">YEARS OLD</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">NL</span>
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