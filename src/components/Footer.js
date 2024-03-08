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
                <p className="footer-header">Sociala medier</p>
                <div className="social-links">
                    <Social name="spotify" text="Spotify" url="https://open.spotify.com/artist/5g4goXzUuMiUvgvgxBAMtA?si=QGyl1O5dSMajGi_jpeid2Q"/>
                    <Social name="facebook" text="Facebook" url="https://www.facebook.com/profile.php?id=100086436221555&paipv=0&eav=AfZprYIB8T8JnLFFDBVZZk3VuC1WygHEMa1Ecjtzi-TECUUUJlum5UyPJ9DjdXrBD9g" />
                    <Social name="youtube" text="YouTube" url="https://www.youtube.com/channel/UC2KV3yJi7mE-eEyfpPMuvgw" />
                </div>
                <p>&copy; 2024 Örni.</p>
            </div>
        </div>
    );
}

export default Footer;
