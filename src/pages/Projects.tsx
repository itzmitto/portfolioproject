import "./Projects.css";

function Projects() {
    return (
        <div className="projects">
            <div className="wrapper">
                <div className="gridContainer">

                    <div className="titleBlock">
                        <h1>── Projects</h1>
                        <p>What I've built & shipped.</p>
                    </div>

                    <div className="card main">
                        <div className="cardHeader">
                            <span className="tag">Web</span>
                            <span className="status live">● Live</span>
                        </div>
                        <h3><i className="fas fa-globe"></i> Portfolio Website</h3>
                        <p>
                            Mijn eigen portfolio gebouwd in React — inclusief animaties,
                            een skills-pagina en een volledig custom design.
                        </p>
                        <div className="techStack">
                            <span>React</span>
                            <span>CSS</span>
                            <span>Vite</span>
                        </div>
                        <a href="#" className="cardLink">Bekijk project →</a>
                    </div>

                    <div className="cardRows">
                        <div className="card projectCard">
                            <div className="cardHeader">
                                <span className="tag">Game</span>
                                <span className="status wip">◐ In progress</span>
                            </div>
                            <h3><i className="fas fa-dragon"></i> RPG Mod Pack</h3>
                            <p>
                                Een uitgebreide mod voor een soulslike game met custom levels,
                                enemy AI-tweaks en handgemaakte concept art als basis.
                            </p>
                            <div className="techStack">
                                <span>Level design</span>
                                <span>Scripting</span>
                                <span>Concept art</span>
                            </div>
                            <a href="#" className="cardLink">Bekijk project →</a>
                        </div>

                        <div className="card projectCard">
                            <div className="cardHeader">
                                <span className="tag">Art</span>
                                <span className="status done">✓ Done</span>
                            </div>
                            <h3><i className="fas fa-paint-brush"></i> Character Series</h3>
                            <p>
                                Een reeks van 10 digitale karakterillustraties in een mix van
                                realisme en cartoon — bedoeld voor print en online publicatie.
                            </p>
                            <div className="techStack">
                                <span>Digital painting</span>
                                <span>Character design</span>
                                <span>Procreate</span>
                            </div>
                            <a href="#" className="cardLink">Bekijk project →</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;