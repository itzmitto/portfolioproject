import "./AboutMe.css";      

function AboutMe() {
    return (
        <div className="aboutMe">
            <div className="wrapper">
                
            <h1>About Me</h1>
            <p>The things about me.</p>
            <div className="gridContainer">
                <div>
                    <div className="card about" >
                        <h3>Andre</h3>
                        <h1>Developer · Artist · Gamer</h1>
                        <p>I'm Andre, a 21-year-old from the Netherlands with a passion for coding, digital art, and gaming. I love building cool things on the web and exploring creative ways to combine tech and art. When I'm not pushing code, I'm probably grinding a game or sketching something in my sketchbook.</p>
                    </div>
                    <div className="card education">
                        <h4>Education</h4>
                        <h3>Deltion College Zwolle</h3> 
                        <p>Software Developer student</p>
                    </div>
                </div>
                
                <div>
                    
                    <div className="gridContainer">
                        <div className="card small">
                            <span>Location</span>
                            <p>Nederland</p>
                        </div>
                        <div className="card small">
                            <span>Age</span>
                            <p>21</p>
                        </div>
                        <div className="card small">
                            <span>Status</span>
                            <p>Building stuff</p>
                        </div>
                        <div className="card small">
                            <span>School</span>
                            <p>Deltion College</p>
                        </div>
                    </div>

                    <div className="card interests">
                        <h4>Interests</h4>
                        <div>
                            <span>Coding</span>
                            <span> Digital Art</span>
                            <span> Gaming</span>
                            <span> Traditional Art</span>
                            <span> Soulslike games</span>
                            <span> Home decor</span>
                        </div>
                    </div>

                    <div className="card games">
                        <h4>Currently Playing</h4>
                        <ul>
                            <li>Rainbow Six Siege</li>
                            <li>Elden Ring</li>
                            <li>Dark souls</li>
                            <li>Enshrouded</li>
                            <li>Minecraft</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default AboutMe;











































