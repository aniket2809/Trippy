import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Herovideo from "../assets/video-1.mp4"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact (){
    return (
        <>
        <Navbar />
            <Hero 
            cName = "hero"
            heroVideo ={Herovideo}
            title = "Contact"

            btnClass = "hide"
            />
            <ContactForm/>
            <Footer/>
        </> 
    );
}

export default Contact;