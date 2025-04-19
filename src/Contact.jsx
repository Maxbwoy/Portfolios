import { useState } from "react"

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form Submitted, formData")
        }
    }

    return (
        <div className="container">
            <h2>Contact</h2>
            <form
            name="contact"
            netlify-honeypot="bot-field"
            onSubmit={(e) =>
                e.preventDefault()} data-netlify="true"
                >
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>
                        Don't fill this out: <input type="hidden" name="bot-field" />
                    </label>
                    </p>
                <div>
                    <label> Name:</label><br></br>
                    <input type="text" id="name" name="name"
                        required />
                </div>
                <div>
                    <label> Email:</label><br></br>
                    <input type="email" id="email" name="email"
                        required />
                </div>
                <div>
                    <label> Subject:</label><br></br>
                    <input type="text" id="subject" name="subject"
                        required />
                </div>
                <div>
                    <label> Message:</label><br></br>
                    <textarea id="message" name="message"
                        required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
            {/*<h3>or</h3>
             <div className="contact-container">
                <div className="social">
                    <h3>social media</h3>
                    <div className="links">
                        <a href="https://wa.me/+233505404401?text=Hello! I would like to inquire about your services." target="_blank" rel="noopener noreferrer"><span style={{ color: "green", fontSize: "50px" }} className="fab fa-whatsapp"></span></a>
                        <a href="https://www.facebook.com/Halfcedi" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><span style={{ fontSize: "50px;" }} className="fab fa-facebook"></span></a>
                        <a href="https://x.com/Abel_Maxbwoy" target="_blank" rel="noopener noreferrer"><span style={{ color: "black", fontSize: "50px;" }} className="fab fa-x-twitter"></span></a>
                        <a href="https://linkedin.com/in/abel-amedor" target="_blank" rel="noopener noreferrer"><span style={{ fontSize: "50px;" }} className="fab fa-linkedin"></span></a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Contact