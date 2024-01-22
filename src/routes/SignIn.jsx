import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import ContactImg from "../assets/img.jpg";
import Footer from "../components/Footer";
import SignInForm from "../components/SignInForm";
function SignIn (){
    return (
        <>
        <Navbar />
            <Hero 
            cName = "hero-mid"
            heroImg = {ContactImg}
            title = "Sign In"

            btnClass = "hide"
            />
            <SignInForm/>
            <Footer/>
        </> 
    );
}

export default SignIn;