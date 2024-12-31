import { useEffect } from "react";
import * as S from "../../components/Styles/Contact.styles";

export default function Contact() {
    useEffect(() => {
        document.title = "Fitness-blog | Contact";
    }, []);

    return (
        <S.StyledWrapper>
            <div>
            <h1>CONTACT US</h1>
            <section className="contact-box">
                <div className="form-container">
                    <p>
                        For additional guidance and follow-up regarding your fitness and health life, 
                        please kindly send a message with a subject to get the best of help from us.
                    </p>
                    <form id="contact-form">
                        <div className="form-box">
                            <label htmlFor="username">
                                Name<span className="irrelevant">not needed</span>
                            </label>
                            <input type="text" id="username" placeholder="Enter your name" name="username" />
                            <i className="fa-solid fa-circle-check"></i>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <small>Error message</small>
                        </div>
                        <div className="form-box">
                            <label htmlFor="email">
                                Email Address<span className="irrelevant">not needed</span>
                            </label>
                            <input type="text" id="email" placeholder="Enter your email" name="email" />
                            <i className="fa-solid fa-circle-check"></i>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <small>Error message</small>
                        </div>
                        <div className="form-box">
                            <label htmlFor="subject">
                                Subject<span className="irrelevant">not needed</span>
                            </label>
                            <input type="text" id="subject" placeholder="Subject" name="subject" />
                            <i className="fa-solid fa-circle-check"></i>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <small>Error message</small>
                        </div>
                        <div className="form-box">
                            <label htmlFor="message">
                                Message<span className="irrelevant">not needed</span>
                            </label>
                            <textarea id="message" placeholder="Enter your message" name="message"></textarea>
                            <i className="fa-solid fa-circle-check"></i>
                            <i className="fa-solid fa-circle-exclamation"></i>
                            <small>Error message</small>
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <div>
                    <img 
                        src="assets/images/fitness.jpeg" 
                        alt="fitness-subjects" 
                    />
                </div>
            </section>
            </div>
        </S.StyledWrapper>
        
    );
}
