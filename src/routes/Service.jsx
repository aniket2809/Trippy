import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Herovideo from "../assets/video-1.mp4"
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Service (){
    return (
        <>
        <Navbar />
            <Hero 
            cName = "hero"
            heroVideo ={Herovideo}
            title = "Service"

            btnClass = "hide"
            />
            <Trip/>
            <Footer/>
        </>
    );
}

export default Service;