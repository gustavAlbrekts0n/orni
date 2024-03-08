import Header from "components/Header";
import Footer from "components/Footer";
import SpotifyEmbeds from "components/SpotifyEmbeds";
import "./Home.css";

const Home = () => {
    return (
        <div className="root">
            <Header />
            <div className="body">
                <img className="img-trio" src={require("img/background.jpg")} alt="Bild på trion"/>
                <div className="intro">
                    <div className="intro-body">
                        <h1>Örni</h1>
                        <h3>
                        Örni är världens största trio, ömsom brötigt slamrig, ömsom mjukt finstämd.
                        </h3>
                        <p>
                        <em>Bob Hund</em>, <em>November</em> och <em>Queens of the Stone Age</em> är alla referenser som nämnts i samma andetag som Örni. Och, visst, allt stämmer.
                        </p>
                        <p>
                        Men Örni är framför allt väldigt, väldigt egna.
                        </p>
                    </div>
                    
                </div>
                <div className="release-info">
                    <div className="release-info-text">
                        <p>Våren 2024 tillbringar Örni i studion, med sikte på <strong>albumsläpp</strong>, det andra i ordningen, <strong>18/4</strong>.</p>
                    </div>
                </div>
                <SpotifyEmbeds />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
