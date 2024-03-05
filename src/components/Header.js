import "./Header.css";

const Button = (props) => {
    return (
        <div className={"button " + props.name}>
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
                    <Button name="spotify" text="Spotify"/>
                    <Button name="booking" text="Boka" />
                </div>
            </div>
        </div>
    );
}

export default Header;
