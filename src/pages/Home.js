import Header from "components/Header";
import "./Home.css";

const Home = () => {
    return (
        <div className="root">
            <Header />
            <div className="body">
                <img className="img-trio" src={require("img/background.jpg")} alt="Bild på trion"/>
                <h1>Örni</h1>
                <p>Bra musik!!</p>
            </div>
        </div>
    );
}

export default Home;
