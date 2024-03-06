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
                    <Button name="booking" text="Kontakt" url="https://www.mcv.se/artister/orni/"/>
                </div>
            </div>
        </div>
    );
}

export default Header;
