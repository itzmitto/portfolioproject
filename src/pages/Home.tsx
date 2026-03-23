import "./Home.css";
import { useNavigate } from 'react-router';

export default Home;

// ---- HOME ----
function Home({ nav }) {
  return (
    <div>
      <section className="hero">
        <div className="hero-grid">
          <div>
            <div className="htag">
              <span className="tdot" />
              <span>Developer · Artist · Gamer</span>
            </div>
            <h1 className="htitle">
              <span className="ht-line">Hey, I'm</span>
              <span className="ht-name">
                Andre<span className="ht-dot">.</span>
              </span>
              <span className="ht-sub">
                I build things
                <br />
                for the web.
              </span>
            </h1>
            <p className="hdesc">
              21-year-old developer from the Netherlands. I create with
              code and art — blending digital creativity with clean,
              purposeful engineering.
            </p>
            <div className="hctas">
              <button
                className="btn btn-p"
                onClick={() => nav("projects")}
              >
                <span>→</span> See my work
              </button>
              <button
                className="btn btn-o"
                onClick={() => nav("contact")}
              >
                Get in touch
              </button>
            </div>
            <div className="hstack">
              {["React", "TypeScript", "CSS", "Laravel", "HTML"].map(
                (t) => (
                  <span key={t} className="sbadge">
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="hvisual">
            <div className="avframe">
              <div className="avinner">
                <span className="avini">
                  A<span>.</span>
                </span>
              </div>
              <div className="avring r1" />
              <div className="avring r2" />
              <div className="avring r3" />
              <div className="fbadge fb1">
                <span>🎮</span>
                <span>Gamer</span>
              </div>
              <div className="fbadge fb2">
                <span>🎨</span>
                <span>Artist</span>
              </div>
              <div className="fbadge fb3">
                <span>⚡</span>
                <span>Dev</span>
              </div>
            </div>
          </div>
        </div>
        <div className="scrollh">
          <div className="sline" />
          <span>scroll</span>
        </div>
      </section>
      <section className="stats">
        <div className="stats-inner">
          {[
            ["21", "Years old"],
            ["NL", "Netherlands"],
            ["∞", "Hours gamed"],
            ["♦", "Building stuff"],
          ].map(([v, l]) => (
            <div key={l} className="sitem">
              <span className="sval">{v}</span>
              <span className="slbl">{l}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}








































// import "./Home.css";
// import { useNavigate } from 'react-router';

// function Home() {
//   const navigate = useNavigate();

//   return ( 
//     <div className="Home-container">
//       <h1> · Developer · Artist · Gamer </h1>
//       <p>Hey, I'm Andre. I build things for the web.</p>
//       <p>21-year-old developer from the Netherlands. I create with code
//         and art — blending digital creativity with clean, purposeful engineering.
//       </p>

//       <div className="button-group">
//         <button className="btn-primary" onClick={() => navigate('/Projects')}>
//           View Projects
//         </button>
//         <button className="btn-secondary" onClick={() => navigate('/Skills')}>
//           Contact Me
//         </button>
//       </div>

//       <div className="stats-bar">
//         <div className="stat-item">
//           <span className="stat-value">21</span>
//           <span className="stat-label">YEARS OLD</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-value">Nl</span>
//           <span className="stat-label">Netherlands</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-value">∞</span>
//           <span className="stat-label">Hours gamed</span>
//         </div>
//         <div className="stat-item">
//           <span className="stat-value">♦</span>
//           <span className="stat-label">Building stuff</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


