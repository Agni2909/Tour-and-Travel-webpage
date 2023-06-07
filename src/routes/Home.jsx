import Navbar from "../components/Navbar";
import Hero from "../components/Hero"
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home(){
    return(
        <>
        <Navbar/> 
        <Hero 
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHRvdXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel plan"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    )

}
export default Home;