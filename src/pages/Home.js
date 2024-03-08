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
                        <p>Vintervåren 2024 tillbringar Örni i studion, med sikte på <strong>albumsläpp</strong>, det andra i ordningen, <strong>18/4</strong>.</p>
                    </div>
                </div>
                <SpotifyEmbeds />
                <div className="about">
                    <div className="about-text">
                        <p>
                            <strong>Jonas Slättung</strong> (<em>We Sell the Dead</em>, <em>Drömriket</em>, <em>Den Mänskliga Faktorn</em>, <em>Gordon</em>, <em>Anywhen</em>, m.fl) 
                            och <strong>Andreas Gustafsson</strong> (<em>Söderut</em>, <em>Göteborgselektronikerna</em>, <em>Slow Drop City</em>, <em>Manfred Kid</em>, 
                            m.fl och mångårig musikproducent) kuskade i flera år land och rike runt tillsammans i smått
                            legendariska bandet <em>Det Är Kärlek</em>. Våren 2022 beslöt de sig för att börja skriva musik ihop 
                            igen och samma höst fann de trummisen <strong>Joakim Albrektson</strong>, som bland annat lånat ut sin talang 
                            till <em>Brutal Personal</em>, <em>Bara Barn</em>, <em>Den Onde Den Gode Den Fule</em> och <em>Hurdle Brothers</em>.
                        </p>
                        <p>
                            Örni blev till.
                        </p>
                        <p>
                            Garagerock, visa, punk och pop – allt ryms under det stora paraply av musikkärlek som är Örni!
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
