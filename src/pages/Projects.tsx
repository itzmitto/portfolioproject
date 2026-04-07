import "./Projects.css";

function Projects() {
    return (
        <div className="projects">
            <div className="wrapper">
                <div className="gridContainer">
                    <div className="titleBlock">
                        <h1>── My work</h1>
                        <h2>Things I've built.</h2>
                        <p>
                            A mix of web projects, creative experiments, and things I'm<br />
                            currently building. Always working on something new.
                        </p>
                    </div>



                    <div className="cardsContainer">
                        <div className="card main">
                            <span className="cardNumber">01</span>
                            <h1>Portfolio website</h1>
                            <h2>Webapp</h2>
                            <h3>This portfolio you're looking at right now — built with React and TypeScript to showcase my work and skills.</h3>
                            <div className="pillsWrapper">
                                <span className="pill">react</span>
                                <span className="pill">typescript</span>
                                <span className="pill">css</span>
                            </div>
                        </div>



                        <div className="card second">
                            <span className="cardNumber">02</span>
                            <h1>Project title</h1>
                            <h2>Webapp</h2>
                            <h3>Short description of the second project goes here.</h3>
                            <div className="pillsWrapper">
                                <span className="pill">react</span>
                                <span className="pill">node</span>
                                <span className="pill">mongodb</span>
                            </div>
                        </div>



                        <div className="card third">
                            <span className="cardNumber">03</span>
                            <h1>Project title</h1>
                            <h2>Webapp</h2>
                            <h3>Short description of the third project goes here.</h3>
                            <div className="pillsWrapper">
                                <span className="pill">next.js</span>
                                <span className="pill">tailwind</span>
                                <span className="pill">prisma</span>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;