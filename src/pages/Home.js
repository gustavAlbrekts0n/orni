import Header from "components/Header";
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
                        <p>
                        Rock som spritter, skevar och drar med egensinniga svenska texter. Mjukt möter hårt – som regn mot mark.
                        </p>
                        <p>
                        <strong>Bob Hund</strong>, <strong>November</strong> och <strong>Queens of the Stone Age</strong> är alla referenser som nämnts i samma andetag som Örni. Och, visst, allt stämmer.
                        </p>
                        <p>
                        Men Örni är framför allt väldigt, väldigt egna.
                        </p>
                    </div>
                </div>
                <SpotifyEmbeds />
            </div>
        </div>
    );
}

export default Home;
