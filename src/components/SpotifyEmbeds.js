import { Spotify } from "react-spotify-embed";
import "./SpotifyEmbeds.css";

const SpotifyEmbeds = () => {
    return (
        <div className="container">
            <Spotify className="embed" wide link="https://open.spotify.com/track/7GettAr7UidDKaTlLN3flD?si=4608748906384ce8" />
            <Spotify className="embed" wide link="https://open.spotify.com/track/1CiArdHpPaTvyInGmKoaiR?si=0731eb90ec5644a0" />
            <Spotify className="embed" wide link="https://open.spotify.com/track/39rewKEkB8CpCMA2Ube7Gm?si=a1283ad9e7e34d63" />
        </div>
    );
}

export default SpotifyEmbeds;
