import "./Projects.css";

function Projects() {
  return (
    <div className="projects">
      <div className="wrapper">
        <div className="gridContainer">

          <div className="titleBlock">
            <h1>── My work</h1>
            <h2>Things I've built.</h2>
            <p>A mix of web projects, creative experiments, and things I'm<br />
            currently building. Always working on something new.</p>
          </div>



          <div className="card card--wide">
            <div className="card__header">
              <span className="card__number">01</span>
              <span className="card__badge card__badge--live">LIVE</span>
            </div>
            <h3 className="card__title">PORTFOLIO WEBSITE</h3>
            <p className="card__category">WEB APP</p>
            <p className="card__description">
              This portfolio you're looking at right now — built with React and TypeScript to showcase my work and skills.
            </p>
            <div className="card__tags">
              <span className="tag">React</span>
              <span className="tag">TypeScript</span>
              <span className="tag">CSS</span>
            </div>
          </div>



          <div className="card">
            <div className="card__header">
              <span className="card__number">02</span>
              <span className="card__badge card__badge--progress">IN PROGRESS</span>
            </div>
            <h3 className="card__title">COMING SOON</h3>
            <p className="card__category">PROJECT</p>
            <p className="card__description">
              Building something new. Check back soon for more projects as I keep creating and coding cool things.
            </p>
            <div className="card__tags">
              <span className="tag">React</span>
              <span className="tag">Laravel</span>
            </div>
          </div>



          <div className="card">
            <div className="card__header">
              <span className="card__number">03</span>
              <span className="card__badge card__badge--ongoing">ONGOING</span>
            </div>
            <h3 className="card__title">DIGITAL ART SERIES</h3>
            <p className="card__category">CREATIVE</p>
            <p className="card__description">
              A collection of digital paintings — character designs, concept art, and experiments mixing realism with cartoon aesthetics.
            </p>
            <div className="card__tags">
              <span className="tag">Photoshop</span>
              <span className="tag">Procreate</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projects;