import React, { useEffect} from "react";
import { StyledAbout } from "../../components/Styles/About.styles";

export default function About() {
    useEffect(() => {
        document.title = "Fitness-Blog | About";
    }, [])

    return (
        <StyledAbout>
            <div>
                <h1>About Us</h1>
                <section className="about-container">
                    <p>
                        We at Fitness Power are here to help most people with issues of fitness and physical health. We believe that knowledge about how to go on with our daily physical exercises is very important and suitable to enable the pursuit of good health. Through our content, we hope to inspire you with all the available blogs of exercises and workout tips to be confident in owning your health and making good decisions for you and your love ones.  
                    </p>
                    <p>
                        Building a community of healthy strong physical persons serves as one of our goals; this platform brings in people of different categories be it beginners, intermediate, experienced, fat burning to support each another in their different fitness journeys. 
                    </p>
                </section>
                
            </div>
            <div>
                <img src="assets/images/gym-2.jpeg" alt="gym hall"/>
            </div>
        </StyledAbout>
    );
}