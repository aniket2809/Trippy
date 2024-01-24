import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
import HeroVideo from "../assets/video-2.mp4";
function SignIn (){
    return (
        <>
        <Navbar />
            <Hero 
            cName = "hero"
            heroVideo ={HeroVideo}
            title = "Sign In"

            btnClass = "hide"
            />
            <SignInForm/>
            <Footer/>
        </> 
    );
}

export default SignIn;