import "./Contact.css";
function Contact() {

    return (
        <div className="contect">
            <div className="wrapper">
                <div className="gridContainer">
                    <div className="titleBlock">
                        <h1>── Get in touch</h1>
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
                            <h3>This portfolio you're looking at right now built with React and TypeScript to showcase my work and skills.</h3>
                            <div className="pillsWrapper">
                                <span className="pill">React</span>
                                <span className="pill">Typescript</span>
                                <span className="pill">Css</span>
                            </div>
                        </div>



                        <div className="card second">
                            <span className="cardNumber">02</span>
                            <h1>Coming soon</h1>
                            <h2>Project</h2>
                            <h3>Building something new. Check back soon for more projects as I keep creating and coding cool things.</h3>
                            <div className="pillsWrapper">
                                <span className="pill">react</span>
                                <span className="pill">Laravel</span>
                            </div>
                        </div>








                </div>
            </div>
        </div>
        </div>


    )
}

export default Contact;