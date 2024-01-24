import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Herovideo from "../assets/video-1.mp4"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About (){
    return (
        <>
        <Navbar />
            <Hero 
            cName = "hero"
            heroVideo ={Herovideo}
            title = "About"

            btnClass = "hide"
            />
            <AboutUs/>
            <Footer/>
        </>
    );
}

export default About;