import Header from "components/Header";
import "./Home.css";

const Home = () => {
    return (
        <div className="root">
            <Header />
            <h1>Örni</h1>
            <p>Bra musik!!</p>
            <img className="img-trio" src={require("img/background.jpg")} alt="Bild på trion"/>
        </div>
    );
}

export default Home;
