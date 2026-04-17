import { useState, useCallback } from "react";    
import "./Contact.css"; 
    
function Contact() {  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");   

    const isFormValid = name.trim() && email.trim() && message.trim();

    const handleSubmit = useCallback(() => {
        if (!isFormValid) return;

        const subject = encodeURIComponent(`Portfolio Contact van ${name}`);
        const body = encodeURIComponent(
            `Naam: ${name}\nEmail: ${email}\n\nBericht:\n${message}`
        );

        window.open(`mailto:andre.babirian@gmail.com?subject=${subject}&body=${body}`);

        setName("");
        setEmail("");
        setMessage("");
    }, [name, email, message, isFormValid]);

    return (
        <div className="contact">
            <div className="wrapper">
                <div className="gridContainer">
                    <div className="titleBlock">
                        <h1>── Get in touch</h1>
                        <h2>Let's work together.</h2>
                        <p>
                            Want to collaborate on a project, have a question,<br />
                            or just want to say hi? Feel free to reach out.<br />
                            I'm always open to interesting conversations.
                        </p>

                        <div className="infoContainer">
                            <div className="info">
                                <h3>Location</h3>
                                <p>Zwolle, Netherlands</p>
                            </div>
                            <div className="info">
                                <h3>School</h3>
                                <p>Deltion College</p>
                            </div>
                            <div className="info">
                                <h3>Status</h3>
                                <p>Open to projects</p>
                            </div>
                        </div>
                    </div>

                    <div className="formContainer">
                        <div id="form-box">
                            <div>
                                <label>Naam</label>
                                <input 
                                    type="text"
                                    placeholder="Jouw naam"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="jouw@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label>Bericht</label>
                                <textarea
                                    placeholder="Wat wil je zeggen?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>

                            <button id="send-btn"
                                onClick={handleSubmit}
                                disabled={!isFormValid}
                            >→ Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;