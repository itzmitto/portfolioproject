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
                            Want to collaborate on a project, have
                            a question, or<br /> just want to say hi? Feel free to reach out
                            I'm always open to interesting<br /> conversations.
                        </p>
                    </div>


                    <div className="cardsContainer">
                        <div className="card main">
                            <h1>Name</h1>
                            <h2>Email</h2>
                            <h3>Message</h3>
                           
                        </div>












                        {/* <div className="card second">
                            <h1>Coming soon</h1>
                            <h3>Building something new. Check back soon for more projects as I keep creating and coding cool things.</h3>
                            </div>
                        </div> */}








                    </div>
                </div>
            </div>
        </div>


    )
}

export default Contact;