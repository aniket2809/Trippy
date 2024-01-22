import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import HeroImg from "../assets/12.jpg";
function Home (){
    return (
        <>
        <Navbar />
            <Hero 
            cName = "hero"
            heroImg = {HeroImg}
            title = "Your Journey Your Story"
            text = "Choose Your Favorite Destination"
            buttonText = "Travel Plan"
            url = "/"
            btnClass = "show"
            />
            <Destination />
            <Trip/>
            <Footer/>
        </>
    );
}

export default Home;