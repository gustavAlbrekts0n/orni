import { Spotify } from "react-spotify-embed";

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

const SpotifyEmbeds = () => {
    return (
        <div className="container">
            <Spotify wide link="https://open.spotify.com/track/7GettAr7UidDKaTlLN3flD?si=4608748906384ce8" />
            <Spotify wide link="https://open.spotify.com/track/1CiArdHpPaTvyInGmKoaiR?si=0731eb90ec5644a0" />
            <Spotify wide link="https://open.spotify.com/track/39rewKEkB8CpCMA2Ube7Gm?si=a1283ad9e7e34d63" />
        </div>
    );
}

export default SpotifyEmbeds;
