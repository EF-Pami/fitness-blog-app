import { Link } from "react-router-dom";
import { StyledFooter } from "../Styles/Footer.styles";

export default function Footer() {
    return (
        <StyledFooter>
            <div className="footer-flexbox">
                <div className="flexbox1">
                    <p className="footer-head">Quick Links</p>
                    <p><Link to="/blogs">Blogs</Link></p>
                    <p><Link to="/about">About</Link></p>
                    <p><Link to="/contact">Contact</Link></p>
                </div>
                <div className="flexbox2">
                    <p className="footer-head">Keep in Touch</p>
                    <p><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a></p>
                    <p><a href="https://www.twitter.com/?lang=nb" target="_blank" rel="noopener noreferrer">Twitter</a></p>
                    <p><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a></p>
                    <p><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">YouTube</a></p>
                </div>
            </div>
            <div className="licence">Copy&copy;2023 Pami@fitness power</div>
        </StyledFooter>
    );
}
