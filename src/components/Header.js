import "./Header.css";

const Button = (props) => {
    const handleClick = () => {
        window.open(props.url, "_blank");
    }
    
    return (
        <div className={"button " + props.name} onClick={handleClick}>
            <p>{props.text}</p>
        </div>
    );
}

const Header = () => {
    return (
        <div className="header-container">
            <div className="header">
                <img className="logo" src={require("img/logo.png")} alt="Örni"/>
                <div className="header-buttons">
                    <Button name="spotify" text="Spotify" url="https://open.spotify.com/artist/5g4goXzUuMiUvgvgxBAMtA?si=QGyl1O5dSMajGi_jpeid2Q"/>
                    <Button name="booking" text="Boka" url="https://l.facebook.com/l.php?u=http%3A%2F%2Fwww.mcv.se%2F&h=AT12d66r2xdMqjJdPDw_e081wmyHI13X9CKOV40UHpi8yUhXrBeek5HciPoa-4H2YwhASiMFtKrhNjoHfNkR4s7_QojyU7aTa2fBZpkf47FfHjMMGCRJz95ZZoM"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
