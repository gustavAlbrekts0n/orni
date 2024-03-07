import "./Footer.css";

const Social = (props) => {
    const handleClick = () => {
        window.open(props.url, "_blank");
    }

    return (
        <div className={"social social-" + props.name}  onClick={handleClick}>
            <p>{props.text}</p>
        </div>
    );
}

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="social-links">
                    <Social name="spotify" text="Spotify" url="https://open.spotify.com/artist/5g4goXzUuMiUvgvgxBAMtA?si=QGyl1O5dSMajGi_jpeid2Q"/>
                    <Social name="facebook" text="Facebook" />
                    <Social name="youtube" text="YouTube" />
                </div>
                <p>&copy; 2024 Örni.</p>
            </div>
        </div>
    );
}

export default Footer;
