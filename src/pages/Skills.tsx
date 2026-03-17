import "./Skills.css";

function Skills() {
    return (
        <div className="skills">
            <div className="wrapper">

                <h1>── Skills</h1>
                <p>What I create & master.</p>
                <div className="gridContainer">

                    <div>
                        <div className="card main">
                            <h3>⚡Web & Code</h3>
                            <p>Altijd op zoek naar gave projecten om beter te worden en toffe dingen te laten zien.</p>



                            <div className="progressBox">
                                <span>React</span>
                                <div className="progressBar">
                                    <div className="progressFill react"></div>
                                </div>
                                <span className="percent">80%</span>
                            </div>

                            <div className="progressBox">
                                <span>typescript</span>
                                <div className="progressBar">
                                    <div className="progressFill typescript"></div>
                                </div>
                                <span className="percent">75%</span>
                            </div>

                            <div className="progressBox">
                                <span>HTML / CSS</span>
                                <div className="progressBar">
                                    <div className="progressFill html"></div>
                                </div>
                                <span className="percent">90%</span>
                            </div>

                            <div className="progressBox">
                                <span>Laravel</span>
                                <div className="progressBar">
                                    <div className="progressFill laravel"></div>
                                </div>
                                <span className="percent">85%</span>
                            </div>



                        </div>
                    </div>

                    <div>
                        <div className="card creative">
                            <h3>🎨 Creatief & Kunst</h3>
                            <p>
                                Ik maak kunst voor m’n huis, maar ook gewoon omdat het leuk is.
                                Mijn stijl wisselt tussen realistisch en cartoon-achtig — net wat het project nodig heeft.
                            </p>


                            <div className="progressBox">
                                <span>Digital painting</span>
                                <div className="progressBar">
                                    <div className="progressFill digital"></div>
                                </div>
                                <span className="percent">90%</span>
                            </div>

                            <div className="progressBox">
                                <span>Character design</span>
                                <div className="progressBar">
                                    <div className="progressFill character"></div>
                                </div>
                                <span className="percent">95%</span>
                            </div>

                            <div className="progressBox">
                                <span>Acrylic / oil</span>
                                <div className="progressBar">
                                    <div className="progressFill acrylic"></div>
                                </div>
                                <span className="percent">85%</span>
                            </div>

                            <div className="progressBox">
                                <span>Concept art</span>
                                <div className="progressBar">
                                    <div className="progressFill concept"></div>
                                </div>
                                <span className="percent">90%</span>
                            </div>


                        </div>






                        <div className="card gaming">
                            <h3>🎮 Gaming & Game-gerelateerd</h3>
                            <p>
                                Van soulslikes tot cozy games — ik speel én bouw er graag dingen in.
                            </p>


                             <div className="progressBox">
                                <span>Level design</span>
                                <div className="progressBar">
                                    <div className="progressFill digital"></div>
                                </div>
                                <span className="percent">85%</span>
                            </div>

                            <div className="progressBox">
                                <span>Mods and maps</span>
                                <div className="progressBar">
                                    <div className="progressFill character"></div>
                                </div>
                                <span className="percent">90%</span>
                            </div>

                            <div className="progressBox">
                                <span>Game optimization</span>
                                <div className="progressBar">
                                    <div className="progressFill acrylic"></div>
                                </div>
                                <span className="percent">95%</span>
                            </div>



                        </div>







                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Skills;