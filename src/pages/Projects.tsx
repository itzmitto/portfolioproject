import "./Projects.css";

function Projects() {
    return (
        <div className="projects">
            <div className="wrapper">
                <div className="gridContainer">

                    <div className="titleBlock">
                        <h1>── My work</h1>
                        <h2>Things I've built.</h2>
                        <p>A mix of web projects, creative experiments, and things I'm currently building. Always working on something new.</p>
                    </div>





                    <div className="card main">
                        <div className="cardHeader">
                            <span className="tag">01</span>
                            <h1>PORTFOLIO WEBSITE</h1>
                            <p>WEB APP</p>
                        </div>
                        <p>This portfolio you're rogress Coming Soon Project Building something new.</p>
                        <div className="techStack">
                            <span>React</span>
                            <span>CSS</span>
                            <span>Vite</span>
                        </div>
                    </div>





                    <div className="cardRows">
                        <div className="card coming">
                            <div className="cardHeader">
                                <span className="tag">Game</span>
                            </div>
                            <p>Een uitgebreide mod voor een soulslike game met custom levels,
                            enemy AI-tweaks en handgemaakte concept art als basis.</p>

                            <div className="techStack">
                                <span>Level design</span>
                                <span>Scripting</span>
                                <span>Concept art</span>
                            </div>
                        </div>





                        <div className="card art">
                            <div className="cardHeader">
                                <span className="tag">Art</span>
                            </div>
                            <p>Een reeks van 10 digitale karakterillustraties in een mix van
                            realisme en cartoon — bedoeld voor print en online publicatie.</p>
                            <div className="techStack">
                                <span>Digital painting</span>
                                <span>Character design</span>
                            </div>




                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Projects;